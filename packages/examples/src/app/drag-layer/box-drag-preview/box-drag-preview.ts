import { Component, OnInit, Input } from '@angular/core';
import { Box } from '../box';

@Component({
  selector: 'app-box-drag-preview',
  template: `
    <div class="phresh">
      <app-box [title]="title" />
    </div>
  `,
  styles: `
    :host {
      display: inline-block;
    }
    @keyframes animatedBackground {
      from {
        background: yellow;
      }
      to {
        background: white;
      }
    }
    .phresh {
      background: white;
      transform: rotate(-10deg);
      overflow: hidden;
      animation-name: animatedBackground;
      animation-duration: 0.7s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate;
    }
  `,
  imports: [Box],
})
export class BoxDragPreview implements OnInit {
  @Input() title: any;

  constructor() {}

  ngOnInit() {}
}
