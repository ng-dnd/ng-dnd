import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './constants';
import { horseImage } from './horseImage';

@Component({
  selector: 'app-knight',
  template: `<span [dragSource]="knightSource" [class.dragging]="isDragging$ | async">♘</span>`,
  styleUrl: './knight.component.scss',
  imports: [DndModule, AsyncPipe],
})
export class KnightComponent implements OnInit, OnDestroy {
  private dnd = inject(DndService);

  knightSource = this.dnd.dragSource(ItemTypes.KNIGHT, {
    beginDrag: () => ({}),
  });

  isDragging$ = this.knightSource.listen(m => m.isDragging());

  ngOnInit() {
    const img = new Image();
    img.src = horseImage;
    img.onload = () => this.knightSource.connectDragPreview(img);
  }

  ngOnDestroy() {
    this.knightSource.unsubscribe();
  }
}
