import { Component } from '@angular/core';
import { SpotComponent } from '../spot.component';

@Component({
  selector: 'xy-box-drag-preview',
  template: `
    <div class="phresh">
      <xy-box [compensate]="false" />
    </div>
  `,
  styles: `
    :host {
      display: inline-block;
    }
    @keyframes animatedBackground {
      from {
        background: rgba(64, 160, 150, 0.8);
      }
      to {
        background: rgba(64, 160, 150, 0.2);
      }
    }
    .phresh {
      /*transform: rotate(-10deg);*/
      overflow: auto;
      margin-left: -32px;
      margin-top: -32px;
      padding: 16px;
      border-radius: 32px;
      animation-name: animatedBackground;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate;
    }
  `,
  standalone: true,
  imports: [SpotComponent],
})
export class BoxDragPreviewComponent {}
