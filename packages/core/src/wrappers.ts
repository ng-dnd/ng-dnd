import { DragSourceSpec, DragSource, DropTargetSpec, DropTarget } from '@ng-dnd/core';

export type Types = string | symbol | (string | symbol)[];

export type DragSourceFactory<Item, DropResult = unknown, SpecAdditions = unknown> = (
  types: string | symbol,
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
