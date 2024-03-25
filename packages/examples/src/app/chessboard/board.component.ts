import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BoardSquareComponent } from './board-square.component';
import { GameService } from './game.service';
import { KnightComponent } from './knight.component';

@Component({
  selector: 'app-board',
  template: `
    <div class="board">
      <ng-container *ngIf="knightPosition$ | async as kp">
        <div *ngFor="let i of sixtyFour">
          <app-board-square *ngIf="xy(i) as pos" [position]="pos">
            <app-knight *ngIf="pos.x === kp.x && pos.y === kp.y"></app-knight>
          </app-board-square>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .board {
        width: 100%;
        height: 100%;
        border: 1px solid black;
        display: grid;
        grid-template-columns: repeat(8, 12.5%);
        grid-template-rows: repeat(8, 12.5%);
      }
    `,
  ],
  standalone: true,
  imports: [NgIf, NgFor, BoardSquareComponent, KnightComponent, AsyncPipe],
})
export class BoardComponent {
  sixtyFour = new Array(64).fill(0).map((_, i) => i);

  knightPosition$ = this.game.knightPosition$;

  constructor(private game: GameService) {}

  xy(i: number) {
    return {
      x: i % 8,
      y: Math.floor(i / 8),
    };
  }
}
