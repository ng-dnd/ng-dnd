import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { DndService, Offset } from '@ng-dnd/core';
import { map } from 'rxjs/operators';

/**
 * This is internal, you probably won't ever need to use it directly.
 *
 * For understanding's sake, it helps to know that this component
 * essentially just renders whatever is placed between its tags, but
 * in a `position: fixed` container that is translated according to
 * the drag in progress and how far it has travelled.
 */
@Component({
  selector: 'dnd-preview-renderer',
  template: `
    <div [style]="style$ | async">
      <ng-content />
    </div>
  `,
  styles: `
    :host {
      display: block;
      position: fixed;
      pointer-events: none;
      z-index: 100;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class DndPreviewRenderer implements OnDestroy {
  private dnd = inject(DndService);

  /** @ignore */
  private layer = this.dnd.dragLayer();

  /** @ignore */
  collect$ = this.layer.listen(monitor => ({
    initialOffset: monitor.getInitialSourceClientOffset() as Offset,
    currentOffset: monitor.getSourceClientOffset(),
  }));

  /** @ignore */
  style$ = this.collect$.pipe(
    map(c => {
      const { initialOffset, currentOffset } = c;

      if (!initialOffset || !currentOffset) {
        return {
          display: 'none',
        };
      }

      const { x, y } = currentOffset;

      const transform = `translate(${x}px, ${y}px)`;
      return {
        transform,
        WebkitTransform: transform,
      };
    })
  );

  /** @ignore */
  ngOnDestroy() {
    this.layer.unsubscribe();
  }
}
