import { Component, OnInit, Input } from '@angular/core';
import { BoxComponent } from '../box.component';

@Component({
  selector: 'app-box-drag-preview',
  template: `
    <div class="phresh">
      <app-box [title]="title"></app-box>
    </div>
  `,
  styles: [
    `
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
  ],
  standalone: true,
  imports: [BoxComponent],
})
export class BoxDragPreviewComponent implements OnInit {
  @Input() title: any;

  constructor() {}

  ngOnInit() {}
}
