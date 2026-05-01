import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleLink } from '@app/utility/example-link';
import { Cube } from './cube';
import { snapToGrid } from './custom-drag-layer/snapToGrid';
import { DragContainer } from './drag-container/drag-container';

@Component({
  selector: 'xy-drag-layer-container',
  template: `
    <app-example-link path="xy-pad" />
    <div class="flex">
      <div>
        <xy-drag-container
          [x]="x"
          [y]="y"
          [snapToGrid]="snapToGrid"
          [incrementPx]="pixels"
          (endDrag)="dragEnded()"
          (moved)="latestLocation = $event"
        />
        <p>
          <label><input type="checkbox" [(ngModel)]="snapToGrid" /> Snap to grid </label>
        </p>
        <p>
          <label><input type="number" [(ngModel)]="pixels" /> Pixels per gridline </label>
        </p>
      </div>
      <div class="pad">
        <xy-cube [transform]="cubeTransform" [x]="x" [y]="y" (endDrag)="dragEnded()" />
      </div>
    </div>
  `,
  styles: `
    .flex {
      display: flex;
      flex-wrap: wrap;
    }
    .pad {
      padding: 80px;
    }
  `,
  imports: [
    ExampleLink,
    DragContainer,
    ReactiveFormsModule,
    FormsModule,
    Cube,
  ],
})
export class Container {
  x = 225;
  y = 225;

  latestLocation = { x: this.x, y: this.y };

  _snapToGrid = false;
  get snapToGrid() {
    return this._snapToGrid;
  }
  set snapToGrid(stg) {
    this._snapToGrid = stg;
    if (stg) {
      this.snapOnce();
    }
  }
  _pixels = 25;
  get pixels() {
    return this._pixels;
  }
  set pixels(px: number) {
    if (px > 2) {
      this._pixels = px;
      this.snapOnce();
    }
  }

  snapOnce() {
    const snapped = snapToGrid(this.pixels)({ x: this.x, y: this.y });
    this.x = snapped.x || 0;
    this.y = snapped.y || 0;
    this.latestLocation = snapped;
  }

  dragEnded() {
    this.x = this.latestLocation.x;
    this.y = this.latestLocation.y;
  }

  get cubeTransform() {
    const translateZ = -100;
    const rotateX = (-(this.latestLocation.y - 200) / 200) * 180;
    const rotateY = ((this.latestLocation.x - 200) / 200) * 180;
    return `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
}
