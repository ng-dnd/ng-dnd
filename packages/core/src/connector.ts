/**
 * @module 1-Top-Level
 */
/** a second comment */

import { inject, Injectable, NgZone } from '@angular/core';
import { Identifier } from 'dnd-core';
import { DRAG_DROP_MANAGER, TYPE_DYNAMIC } from './tokens';

import { DropTargetSpec } from './drop-target-specification';
import createTargetConnector from './internal/createTargetConnector';
import registerTarget from './internal/register-target';

import { DragSourceSpec } from './drag-source-specification';
import createSourceConnector from './internal/createSourceConnector';
import registerSource from './internal/register-source';

import { SubscriptionLike, TeardownLogic } from 'rxjs';
import { SourceConnection, TargetConnection } from './internal/connection-factory';
import { DragLayerConnectionClass } from './internal/drag-layer-connection';
import { TypeOrTypeArray } from './type-ish';

import { DragLayer, DragSource, DropTarget } from './connection-types';
import { createSourceFactory } from './internal/createSourceFactory';
import { createSourceMonitor } from './internal/createSourceMonitor';
import { createTargetFactory } from './internal/createTargetFactory';
import { createTargetMonitor } from './internal/createTargetMonitor';

/**
 * Represents an RxJS Subscription, with multi-version compatibility.
 * The standard SubscriptionLike does not contain an add() method.
 */
export interface AddSubscription extends SubscriptionLike {
  /** Same as RxJS `Subscription#add` */
  add(teardownLogic: TeardownLogic): void;
}

/**
 * For a simple component, unsubscribing is as easy as `connection.unsubscribe()` in `ngOnDestroy()`
 * If your components have lots of subscriptions, it can get tedious having to
 * unsubscribe from all of them, and you might forget. A common pattern is to create an RxJS Subscription
 * (maybe called `destroy`), to use `this.destroy.add(xxx.subscribe(...))`
 * and to call `destroy.unsubscribe()` once to clean up all of them. @ng-dnd/core
 * supports this pattern with by using the `subscription` parameter on the
 * constructors. Simply:
 *
 * ```typescript
 * import { Subscription } from 'rxjs';
 * // ...
 * destroy = new Subscription();
 * target = this.dnd.dropTarget({
 *   // ...
 * }, this.destroy);
 * ngOnDestroy() { this.destroy.unsubscribe(); }
 * ```
 *
 * It is a good habit for avoiding leaked subscriptions, because .
 */
@Injectable({ providedIn: 'root' })
export class DndService {
  private manager = inject(DRAG_DROP_MANAGER);
  private ngZone = inject(NgZone);

  /**
   * This drop target will only react to the items produced by the drag sources
   * of the specified type or types.
   *
   * If you want a dynamic type, pass `null` as the type; and call
   * {@link DropTarget#setTypes} in a lifecycle hook.
   */
  public dropTarget<Item = unknown, DropResult = unknown>(
    types: TypeOrTypeArray | null,
    spec: DropTargetSpec<Item, DropResult>,
    subscription?: AddSubscription
  ): DropTarget<Item, DropResult> {
    return this.ngZone.runOutsideAngular(() => {
      const createTarget = createTargetFactory(spec);

      const conn = new TargetConnection(
        {
          createHandler: createTarget,
          registerHandler: registerTarget,
          createMonitor: createTargetMonitor,
          createConnector: createTargetConnector,
        },
        this.manager,
        this.ngZone,
        types || TYPE_DYNAMIC
      ) as DropTarget<Item, DropResult>;

      if (subscription) {
        subscription.add(conn);
      }
      return conn;
    });
  }

  /**
   * This method creates a {@link DragSource} object. It represents a drag
   * source and its behaviour, and can be connected to a DOM element by
   * assigning it to the `[dragSource]` directive on that element in your
   * template.
   *
   * It is the corollary of [`react-dnd`'s
   * `DragSource`](http://react-dnd.github.io/react-dnd/docs-drag-source.html).
   *
   * The `spec` argument ({@link DragSourceSpec}) is a set of _queries_ and
   * _callbacks_ that are called at appropriate times by the internals. The
   * queries are for asking your component whether to drag/listen and what
   * item data to hoist up; the callback (just 1) is for notifying you when
   * the drag ends.
   *
   * Only the drop targets registered for the same type will
   * react to the items produced by this drag source. If you want a dynamic
   * type, pass `null` as the type; and call {@link DragSource#setType} in
   * a lifecycle hook.
   *
   * @param subscription An RxJS Subscription to tie the lifetime of the
   * connection to.
   */
  public dragSource<Item, DropResult = unknown>(
    type: Identifier | null,
    spec: DragSourceSpec<Item, DropResult>,
    subscription?: AddSubscription
  ): DragSource<Item, DropResult> {
    return this.ngZone.runOutsideAngular(() => {
      const createSource = createSourceFactory(spec);

      const conn = new SourceConnection(
        {
          createHandler: createSource,
          registerHandler: registerSource,
          createMonitor: createSourceMonitor,
          createConnector: createSourceConnector,
        },
        this.manager,
        this.ngZone,
        type || TYPE_DYNAMIC
      ) as DragSource<Item, DropResult>;

      if (subscription) {
        subscription.add(conn);
      }
      return conn;
    });
  }

  /**
   * This method creates a {@link DragLayer} object
   */
  public dragLayer<Item = any>(subscription?: AddSubscription): DragLayer<Item> {
    return this.ngZone.runOutsideAngular(() => {
      const conn = new DragLayerConnectionClass(this.manager);

      if (subscription) {
        subscription.add(conn);
      }
      return conn;
    });
  }
}
