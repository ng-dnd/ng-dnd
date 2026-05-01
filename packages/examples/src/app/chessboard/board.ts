import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BoardSquare } from './board-square';
import { GameService } from './game.service';
import { Knight } from './knight';

@Component({
  selector: 'app-board',
  template: `
    <div class="board">
      @if (knightPosition$ | async; as kp) {
        @for (i of sixtyFour; track i) {
          @if (xy(i); as pos) {
            <app-board-square [position]="pos">
              @if (pos.x === kp.x && pos.y === kp.y) {
                <app-knight />
              }
            </app-board-square>
          }
        }
      }
    </div>
  `,
  styles: `
    .board {
      width: 100%;
      height: 100%;
      border: 1px solid black;
      display: grid;
      grid-template-columns: repeat(8, 12.5%);
      grid-template-rows: repeat(8, 12.5%);
    }
  `,
  imports: [BoardSquare, Knight, AsyncPipe],
})
export class Board {
  private game = inject(GameService);

  sixtyFour = new Array(64).fill(0).map((_, i) => i);

  knightPosition$ = this.game.knightPosition$;

  xy(i: number) {
    return {
      x: i % 8,
      y: Math.floor(i / 8),
    };
  }
}
