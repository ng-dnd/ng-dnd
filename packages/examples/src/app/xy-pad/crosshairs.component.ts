import { Component, Input } from '@angular/core';

@Component({
  selector: 'xy-crosshairs',
  template: `
    <div
      class="crosshair horizontal"
      [class.swap-ends]="x < 70"
      [class.flip]="y > height - 30"
      [style.top.px]="y - 1"
      [style.width.px]="width"
    >
      <span class="label">{{ math.round(y) }}</span>
    </div>
    <div
      class="crosshair vertical"
      [class.swap-ends]="y < 70"
      [class.flip]="x > width - 40"
      [style.left.px]="x - 1"
      [style.height.px]="height"
    >
      <span class="label">{{ math.round(x) }}</span>
    </div>
  `,
  styleUrl: './crosshairs.component.scss',
  standalone: true,
})
export class CrosshairsComponent {
  math = Math;
  @Input() x!: number;
  @Input() y!: number;
  @Input() width = 400;
  @Input() height = 400;
}
