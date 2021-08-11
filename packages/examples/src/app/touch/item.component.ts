import { Component, Input } from "@angular/core";
import { NgDndService } from "@ng-dnd/core";

@Component({
  selector: 'touch-draggable-item',
  template: `
    <div [dragSource]="itemSource">
        <touch-item [color]="color"></touch-item>
    </div>
    `,
  styles: [`
    div { display: inline; width: auto; }
  `]
})
export class DraggableItemComponent {
  @Input() color: string;
  itemSource = this.skyhook.dragSource("ITEM", {
    beginDrag: () => ({ color: this.color })
  });
  constructor(private skyhook: NgDndService) { }
}

@Component({
  selector: 'touch-item',
  template: `<div class="firefox-bug" [style.background]="color || 'red'"></div>`,
  styles: [`
    div { width: 400px; height: 300px; margin: 16px; }
    `]
})
export class ItemComponent {
  @Input() color: string;
}
