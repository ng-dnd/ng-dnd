import { DragDropManager, Unsubscribe } from 'dnd-core';
import { BehaviorSubject, Observable, Subscription, TeardownLogic } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { DragLayer } from '../connection-types';
import { DragLayerMonitor } from '../layer-monitor';
import { areCollectsEqual } from '../utils/areCollectsEqual';

export class DragLayerConnectionClass implements DragLayer {
  unsubscribeFromOffsetChange: Unsubscribe;
  unsubscribeFromStateChange: Unsubscribe;
  private readonly collector$: BehaviorSubject<DragLayerMonitor>;
  private subscription = new Subscription();

  constructor(private manager: DragDropManager) {
    const monitor = this.manager.getMonitor();
    this.collector$ = new BehaviorSubject<DragLayerMonitor>(monitor);
    this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleOffsetChange);
    this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleStateChange);

    this.subscription.add(() => {
      this.unsubscribeFromOffsetChange();
      this.unsubscribeFromStateChange();
    });

    this.handleStateChange();
  }

  isTicking = false;

  private handleStateChange = () => {
    const monitor = this.manager.getMonitor() as DragLayerMonitor;
    this.collector$.next(monitor);
  };
  private handleOffsetChange = () => {
    const monitor = this.manager.getMonitor() as DragLayerMonitor;
    this.collector$.next(monitor);
  };

  listen<P>(mapFn: (monitor: DragLayerMonitor) => P): Observable<P> {
    return this.collector$.pipe(map(mapFn), distinctUntilChanged(areCollectsEqual));
  }

  unsubscribe() {
    this.collector$.complete();
    this.subscription.unsubscribe();
  }

  add(teardown: TeardownLogic) {
    return this.subscription.add(teardown);
  }

  get closed() {
    return this.subscription.closed;
  }
}
