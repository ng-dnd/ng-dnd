import { AsyncPipe } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { map } from 'rxjs/operators';
import { ItemTypes } from './constants';
import { Coord } from './coord';
import { GameService } from './game.service';
import { SquareComponent } from './square.component';

@Component({
  selector: 'app-board-square',
  template: `
    <div class="wrapper" [dropTarget]="target">
      <app-square [black]="black">
        <ng-content />
      </app-square>
      @if (showOverlay$ | async) {
        <div class="overlay" [style]="overlayStyle$ | async"></div>
      }
    </div>
  `,
  styles: `
    .wrapper {
      position: relative;
      height: 100%;
    }
  `,
  imports: [DndModule, SquareComponent, AsyncPipe],
})
export class BoardSquareComponent implements OnDestroy {
  @Input() position!: Coord;

  get black() {
    const { x, y } = this.position;
    return (x + y) % 2 === 1;
  }

  // This is the core of the dragging logic!
  target = this.dnd.dropTarget(ItemTypes.KNIGHT, {
    canDrop: monitor => {
      return this.game.canMoveKnight(this.position);
    },
    drop: monitor => {
      this.game.moveKnight(this.position);
    },
  });

  collected$ = this.target.listen(m => ({
    canDrop: m.canDrop(),
    isOver: m.isOver(),
  }));

  showOverlay$ = this.collected$.pipe(map(c => c.isOver || c.canDrop));

  overlayStyle$ = this.collected$.pipe(
    map(coll => {
      const { canDrop, isOver } = coll;
      let bg = 'rgba(0,0,0,0)';
      if (canDrop && isOver) {
        bg = 'green';
      } else if (canDrop && !isOver) {
        bg = 'yellow';
      } else if (!canDrop && isOver) {
        bg = 'red';
      }
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: bg,
      };
    })
  );

  constructor(
    private dnd: DndService,
    private game: GameService
  ) {}

  ngOnDestroy() {
    this.target.unsubscribe();
  }
}
