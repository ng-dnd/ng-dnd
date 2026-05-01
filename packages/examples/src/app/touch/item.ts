import { Component, Input, inject } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';

@Component({
  selector: 'touch-item',
  template: `<div class="firefox-bug" [style.background]="color || 'red'"></div>`,
  styles: `
    div {
      width: 400px;
      height: 300px;
      margin: 16px;
    }
  `,
})
export class Item {
  @Input() color = '';
}

@Component({
  selector: 'touch-draggable-item',
  template: `
    <div [dragSource]="itemSource">
      <touch-item [color]="color" />
    </div>
  `,
  styles: `
    div {
      display: inline;
      width: auto;
    }
  `,
  imports: [DndModule, Item],
})
export class DraggableItem {
  private dnd = inject(DndService);

  @Input() color = '';
  itemSource = this.dnd.dragSource('ITEM', {
    beginDrag: () => ({ color: this.color }),
  });
}
