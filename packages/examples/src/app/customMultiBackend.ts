import { MouseTransition } from '@ng-dnd/multi-backend';
import { BackendTransition, TouchTransition } from 'dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { TouchBackendOptions } from 'react-dnd-touch-backend';

const backends: BackendTransition[] = [
  {
    backend: HTML5Backend,
    transition: MouseTransition,
  },
  {
    backend: TouchBackend,
    options: {
      enableMouseEvents: false,
      ignoreContextMenu: true,
      delayTouchStart: 200, // milliseconds
    } as TouchBackendOptions,
    transition: TouchTransition,
    preview: true,
  }
];

export const CustomTransitions = { backends };
