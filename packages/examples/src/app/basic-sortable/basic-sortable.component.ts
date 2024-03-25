import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { CardComponent, CardInnerDirective } from './card.component';

interface Card {
  id: number;
  text: string;
}

@Component({
  selector: 'basic-sortable',
  templateUrl: './basic-sortable.component.html',
  styles: [
    `
      .sorted {
        width: 100%;
        max-width: 400px;
      }
    `,
  ],
  standalone: true,
  imports: [
    DndMultiBackendModule,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    CardComponent,
    CardInnerDirective,
  ],
})
export class BasicSortableComponent {
  cards: Card[] = [
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text: 'Write a glorious Medium post to promote it (note that this element is taller, and far more important, than the others)',
    },
    {
      id: 6,
      text: 'Sit back and relax',
    },
  ];

  origCards: Card[] = this.cards;

  findCard(id: number) {
    return this.cards.find(c => c.id === id)!;
  }

  beginDrag() {
    this.origCards = this.cards.slice(0);
  }

  endDrag(goodEdit: boolean) {
    if (!goodEdit) {
      this.cards = this.origCards;
    }
  }

  moveCard([dragIndex, hoverIndex]: [number, number]) {
    const dragCard = this.cards[dragIndex];
    this.cards.splice(dragIndex, 1);
    this.cards.splice(hoverIndex, 0, dragCard);
  }

  tracker(_index: number, card: Card) {
    return card.id;
  }
}
