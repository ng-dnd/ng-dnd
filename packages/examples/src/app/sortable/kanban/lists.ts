import * as faker from 'faker';
import { Card, Cards } from './card';

export interface KanbanListModel {
  id: number;
  title: string;
  cards: Cards;
}

export type KanbanBoardModel = readonly KanbanListModel[];
// We're using NgRx, so we have to do immutable-only list operations.

// you could use this helper library, but if you're really gunning for @ngrx,
// then you might want Immutable.js instead
// import { default as update } from 'immutability-helper';

// splice is an awkward API that doesn't return the result, it returns an array of deleted elements
// this is better and stops you making that mistake
function withMutations<T>(ts: readonly T[], update: (ts: T[]) => void): readonly T[] {
  // shallow clone
  const lists = ts.slice(0) as T[];
  update(lists);
  return lists as readonly T[];
}

function updateCards(board: KanbanBoardModel, listId: number, f: (cards: Card[]) => void) {
  const fromListIdx = board.findIndex(b => b.id === listId);
  if (fromListIdx === -1) {
    return board;
  }
  const list = {
    ...board[fromListIdx],
    cards: withMutations(board[fromListIdx].cards, f),
  };
  return withMutations(board, ls => {
    ls.splice(fromListIdx, 1, list);
  });
}

export function insertList(board: KanbanBoardModel, list: KanbanListModel, index: number) {
  return withMutations(board, ls => {
    ls.splice(index, 0, list);
  });
}

export function removeList(board: KanbanBoardModel, index: number) {
  return withMutations(board, ls => {
    ls.splice(index, 1);
  });
}

export function removeCard(board: KanbanBoardModel, listId: number, index: number) {
  return updateCards(board, listId, cards => {
    cards.splice(index, 1);
  });
}

export function insertCard(board: KanbanBoardModel, card: Card, listId: number, index: number) {
  return updateCards(board, listId, cards => {
    cards.splice(index, 0, card);
  });
}

export const initialBoard: KanbanBoardModel = [
  {
    id: 0,
    title: 'To Do',
    cards: [
      { id: 1, title: faker.lorem.sentence() },
      { id: 2, title: faker.lorem.sentence() },
      { id: 3, title: faker.lorem.sentence() },
      { id: 4, title: faker.lorem.sentence() },
      {
        id: 5,
        title:
          'This card is a bigger than the other ones. ' +
          faker.lorem.sentence() +
          ' ' +
          faker.lorem.sentence(),
      },
    ],
  },
  {
    id: 1,
    title: 'Doing',
    cards: [
      { id: 6, title: faker.company.bs() },
      { id: 7, title: faker.company.bs() },
      { id: 8, title: faker.company.bs() },
      { id: 9, title: faker.company.bs() },
      { id: 10, title: faker.company.bs() },
    ],
  },
  {
    id: 2,
    title: 'Done',
    cards: [
      { id: 11, title: faker.name.jobTitle() },
      { id: 12, title: faker.name.jobTitle() },
      { id: 13, title: faker.name.jobTitle() },
      { id: 14, title: faker.name.jobTitle() },
      { id: 15, title: faker.name.jobTitle() },
    ],
  },
];
