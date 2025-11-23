import { Identifier } from 'dnd-core';

/** String, symbol, or an array of either. Used on drop targets. */
export type TypeOrTypeArray = Identifier | Identifier[];

/** Just a plain, reusable xy coordinate type. */
export interface Offset {
  /** x coordinate */
  x: number;
  /** y coordinate */
  y: number;
}
