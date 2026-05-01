import { Component, Input } from '@angular/core';

export interface SpotModel {
  id: number;
  x: number;
  y: number;
  fromCube?: boolean;
}

@Component({
  selector: 'xy-spot',
  template: `
    <div class="spot" [class.compensate]="compensate"></div>
  `,
  styles: `
    .spot {
      background: #33e8d5;
      box-shadow: 0 0 8px #33e8d5;
      cursor: move;
      padding: 16px;
      border-radius: 16px;
    }
    .compensate {
      margin-left: -16px;
      margin-top: -16px;
    }
  `,
})
export class Spot {
  @Input() compensate = false;
}
