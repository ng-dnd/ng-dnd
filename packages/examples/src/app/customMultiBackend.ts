import {
  HTML5Backend,
  MouseTransition,
  MultiBackendOptions,
  TouchBackend,
  TouchBackendOptions,
  TouchTransition,
} from '@ng-dnd/multi-backend';

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
