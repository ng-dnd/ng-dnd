import { DragSource, DragSourceSpec, DropTarget, DropTargetSpec } from '@ng-dnd/core';
import { Identifier } from 'dnd-core';

export type Types = Identifier | Identifier[];

export type DragSourceFactory<Item, DropResult = unknown, SpecAdditions = unknown> = (
  types: Identifier,
  spec: DragSourceSpec<Item> & SpecAdditions
) => DragSource<Item, DropResult>;

export type DragSourceDecorator<Item, DropResult = unknown, O = unknown, I = unknown> = (
  fac: DragSourceFactory<Item, DropResult, I>
) => DragSourceFactory<Item, DropResult, O>;

export type DropTargetFactory<SpecAdditions = unknown> = (
  types: Types,
  spec: DropTargetSpec & SpecAdditions
) => DropTarget;

export type DropTargetDecorator<O = unknown, I = unknown> = (
  fac: DropTargetFactory<I>
) => DropTargetFactory<O>;
