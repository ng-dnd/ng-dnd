import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div [style]="getStyle()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host,
      div {
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
      }
    `,
  ],
  standalone: true,
})
export class SquareComponent {
  @Input() black = false;

  getStyle() {
    return this.black
      ? { backgroundColor: 'black', color: 'white' }
      : { backgroundColor: 'white', color: 'black' };
  }
}
