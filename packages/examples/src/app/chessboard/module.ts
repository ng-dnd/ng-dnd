import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DndModule } from '@ng-dnd/core';

import { GameService } from './game.service';
import { KnightComponent } from './knight.component';
import { SquareComponent } from './square.component';
import { BoardComponent } from './board.component';
import { ContainerComponent } from './container.component';
import { BoardSquareComponent } from './board-square.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    KnightComponent,
    SquareComponent,
    BoardComponent,
    ContainerComponent,
    BoardSquareComponent,
  ],
  providers: [GameService],
})
export class ChessboardModule {}
