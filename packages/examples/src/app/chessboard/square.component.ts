import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-square',
  template: `
    <div [ngStyle]="getStyle()">
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
  imports: [NgStyle],
})
export class SquareComponent {
  @Input() black = false;

  getStyle() {
    return this.black
      ? { backgroundColor: 'black', color: 'white' }
      : { backgroundColor: 'white', color: 'black' };
  }
}
