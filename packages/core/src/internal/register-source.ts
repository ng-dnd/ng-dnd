import { DragDropManager, DragSource, SourceType } from 'dnd-core';

export default function registerSource(
  type: SourceType,
  source: DragSource,
  manager: DragDropManager
) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, source);

  function unregisterSource() {
    registry.removeSource(sourceId);
  }

  return {
    handlerId: sourceId,
    unregister: unregisterSource,
  };
}
