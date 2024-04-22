import { MouseTransition } from '@ng-dnd/multi-backend';
import { MultiBackendOptions, TouchTransition } from 'dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend, TouchBackendOptions } from 'react-dnd-touch-backend';

export const CustomTransitions: MultiBackendOptions = {
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
        ignoreContextMenu: true,
        delayTouchStart: 200, // milliseconds
      } as TouchBackendOptions,
      transition: TouchTransition,
      preview: true,
    },
  ],
};
