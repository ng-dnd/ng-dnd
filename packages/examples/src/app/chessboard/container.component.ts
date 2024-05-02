import { Component } from '@angular/core';
import { BoardComponent } from './board.component';
import { ExampleLinkComponent } from '@app/utility/example-link.component';

@Component({
  selector: 'app-chess-container',
  template: `
    <app-example-link path="chessboard"></app-example-link>

    <p>Welcome to <code>&#64;ng-dnd</code>.</p>
    <p>
      This is a re-implementation of the original, classic
      <a href="https://react-dnd.github.io/react-dnd/examples/tutorial">react-dnd demo</a>.
    </p>
    <p>
      The whole tutorial has been re-written so you can
      <a href="https://ng-dnd.github.io/ng-dnd/additional-documentation/chess-tutorial.html">follow along</a>
      and build this yourself.
    </p>

    <div class="max-container">
      <div class="square-outer">
        <div class="square-inner">
          <app-board></app-board>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep * {
        box-sizing: border-box;
      }
      .max-container {
        max-width: 560px;
      }
      .square-outer {
        height: 0;
        padding-bottom: 100%;
        position: relative;
        overflow: hidden;
      }
      .square-inner {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 100%;
      }
    `,
  ],
  standalone: true,
  imports: [ExampleLinkComponent, BoardComponent],
})
export class ContainerComponent {}
