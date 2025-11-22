import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div [style]="getStyle()">
      <ng-content />
    </div>
  `,
  styles: `
    div {
      height: 100%;
      text-align: center;
    }
  `,
})
export class SquareComponent {
  @Input() black = false;

  getStyle() {
    return this.black
      ? { backgroundColor: 'black', color: 'white' }
      : { backgroundColor: 'white', color: 'black' };
  }
}
