import { DropTarget } from 'dnd-core';
import { DropTargetSpec } from '../drop-target-specification';
import { DropTargetMonitor } from '../target-monitor';

export class Target implements DropTarget {
  constructor(
    private spec: DropTargetSpec,
    private monitor: DropTargetMonitor
  ) {
    this.monitor = monitor;
  }

  withChangeDetection<T>(fn: () => T): T {
    const x = fn();
    return x;
  }

  receiveMonitor(monitor: any) {
    this.monitor = monitor;
  }

  canDrop() {
    if (!this.spec.canDrop) {
      return true;
    }

    // Don't run isDragging in the zone. Should be a pure function of `this`.
    return this.spec.canDrop(this.monitor);
  }

  hover() {
    if (!this.spec.hover) {
      return;
    }
    this.withChangeDetection(() => {
      this.spec.hover?.(this.monitor);
    });
  }

  drop() {
    if (!this.spec.drop) {
      return undefined;
    }

    return this.withChangeDetection(() => {
      return this.spec.drop?.(this.monitor);
    });
  }
}

export function createTargetFactory(spec: DropTargetSpec) {
  return function createTarget(monitor: any): DropTarget {
    return new Target(spec, monitor);
  };
}
