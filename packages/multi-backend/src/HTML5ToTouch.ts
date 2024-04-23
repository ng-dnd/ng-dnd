import { DragDropManager } from 'dnd-core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import {
  MouseTransition,
  TouchTransition,
  MultiBackend,
  MultiBackendOptions,
} from 'dnd-multi-backend';

export const HTML5ToTouch: MultiBackendOptions = {
  backends: [
    {
      id: 'html5',
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: 'touch',
      backend: TouchBackend,
      options: {
        enableMouseEvents: false,
      },
      preview: true,
      transition: TouchTransition,
    },
  ],
};

export function DefaultMultiBackend(manager: DragDropManager, context: any) {
  return MultiBackend(manager, context, HTML5ToTouch);
}
