import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'chessboard' },
  {
    path: 'bins',
    loadChildren: () => import('./bins/routes').then(m => m.routes),
  },
  {
    path: 'basic-sortable',
    loadChildren: () => import('./basic-sortable/routes').then(m => m.routes),
  },
  {
    path: 'chessboard',
    loadChildren: () => import('./chessboard/routes').then(m => m.routes),
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/routes').then(m => m.routes),
  },
  {
    path: 'touch',
    loadChildren: () => import('./touch/routes').then(m => m.routes),
  },
  {
    path: 'drilldown',
    loadChildren: () => import('./drilldown/routes').then(m => m.routes),
  },
  {
    path: 'drag-layer',
    children: [
      {
        path: 'simple',
        loadChildren: () => import('./drag-layer/routes').then(m => m.routes),
      },
      {
        path: 'xy-pad',
        loadChildren: () => import('./xy-pad/routes').then(m => m.routes),
      },
    ],
  },
  {
    path: 'nested',
    children: [
      {
        path: 'sources',
        loadChildren: () => import('./nested/sources/routes').then(m => m.routes),
      },
      {
        path: 'targets',
        loadChildren: () => import('./nested/targets/routes').then(m => m.routes),
      },
    ],
  },
  {
    path: 'html5',
    children: [
      {
        path: 'handles-previews',
        loadChildren: () => import('./html5/handles-previews/routes').then(m => m.routes),
      },
      {
        path: 'drop-effects',
        loadChildren: () => import('./html5/drop-effects/routes').then(m => m.routes),
      },
      {
        path: 'native-types',
        loadChildren: () => import('./html5/native-types/routes').then(m => m.routes),
      },
    ],
  },
  {
    path: 'sortable',
    children: [
      {
        path: 'kanban',
        loadChildren: () => import('./sortable/kanban/routes').then(m => m.routes),
      },
      {
        path: 'simple',
        loadChildren: () => import('./sortable/simple/routes').then(m => m.routes),
      },
      {
        path: 'simple-kanban',
        loadChildren: () => import('./sortable/simple-kanban/routes').then(m => m.routes),
      },
      {
        path: 'quiz',
        loadChildren: () => import('./sortable/quiz/routes').then(m => m.routes),
      },
      {
        path: 'keyboard',
        loadChildren: () => import('./sortable/keyboard/routes').then(m => m.routes),
      },
      {
        path: 'fixed-height',
        loadChildren: () => import('./sortable/fixed-height/routes').then(m => m.routes),
      },
    ],
  },
];
