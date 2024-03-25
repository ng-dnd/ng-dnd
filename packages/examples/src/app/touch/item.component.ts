import { Component, Input } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';

@Component({
  selector: 'touch-item',
  template: `<div class="firefox-bug" [style.background]="color || 'red'"></div>`,
  styles: [
    `
      div {
        width: 400px;
        height: 300px;
        margin: 16px;
      }
    `,
  ],
  standalone: true,
})
export class ItemComponent {
  @Input() color = '';
}

@Component({
  selector: 'touch-draggable-item',
  template: `
    <div [dragSource]="itemSource">
      <touch-item [color]="color"></touch-item>
    </div>
  `,
  styles: [
    `
      div {
        display: inline;
        width: auto;
      }
    `,
  ],
  standalone: true,
  imports: [DndModule, ItemComponent],
})
export class DraggableItemComponent {
  @Input() color = '';
  itemSource = this.dnd.dragSource('ITEM', {
    beginDrag: () => ({ color: this.color }),
  });
  constructor(private dnd: DndService) {}
}
