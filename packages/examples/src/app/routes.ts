import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'chessboard' },
  {
    path: 'bins',
    pathMatch: 'full',
    loadChildren: () => import('./bins/module').then(m => m.BinsModule),
  },
  {
    path: 'basic-sortable',
    pathMatch: 'full',
    loadChildren: () => import('./basic-sortable/module').then(m => m.BasicSortableModule),
  },
  {
    path: 'chessboard',
    pathMatch: 'full',
    loadChildren: () => import('./chessboard/module').then(m => m.ChessboardModule),
  },
  {
    path: 'calendar',
    pathMatch: 'full',
    loadChildren: () => import('./calendar/module').then(m => m.CalendarModule),
  },
  {
    path: 'touch',
    pathMatch: 'full',
    loadChildren: () => import('./touch/module').then(m => m.TouchModule),
  },
  {
    path: 'drilldown',
    pathMatch: 'full',
    loadChildren: () => import('./drilldown/module').then(m => m.DrilldownModule),
  },
  {
    path: 'drag-layer',
    children: [
      {
        path: 'simple',
        pathMatch: 'full',
        loadChildren: () => import('./drag-layer/module').then(m => m.DragLayerModule),
      },
      {
        path: 'xy-pad',
        pathMatch: 'full',
        loadChildren: () => import('./xy-pad/module').then(m => m.XyPadModule),
      },
    ],
  },
  {
    path: 'nested',
    children: [
      {
        path: 'sources',
        pathMatch: 'full',
        loadChildren: () => import('./nested/sources/module').then(m => m.NestedSourcesModule),
      },
      {
        path: 'targets',
        pathMatch: 'full',
        loadChildren: () => import('./nested/targets/module').then(m => m.NestedTargetsModule),
      },
    ],
  },
  {
    path: 'html5',
    children: [
      {
        path: 'handles-previews',
        pathMatch: 'full',
        loadChildren: () =>
          import('./html5/handles-previews/module').then(m => m.HandlesPreviewsModule),
      },
      {
        path: 'drop-effects',
        pathMatch: 'full',
        loadChildren: () => import('./html5/drop-effects/module').then(m => m.DropEffectsModule),
      },
      {
        path: 'native-types',
        pathMatch: 'full',
        loadChildren: () => import('./html5/native-types/module').then(m => m.NativeTypesModule),
      },
    ],
  },
  {
    path: 'sortable',
    children: [
      {
        path: 'kanban',
        pathMatch: 'full',
        loadChildren: () => import('./sortable/kanban/module').then(m => m.KanbanModule),
      },
      {
        path: 'simple',
        pathMatch: 'full',
        loadChildren: () => import('./sortable/simple/module').then(m => m.SimpleModule),
      },
      {
        path: 'simple-kanban',
        pathMatch: 'full',
        loadChildren: () => import('./sortable/simple-kanban/module').then(m => m.KanbanModule),
      },
      {
        path: 'quiz',
        pathMatch: 'full',
        loadChildren: () => import('./sortable/quiz/module').then(m => m.QuizModule),
      },
      {
        path: 'keyboard',
        pathMatch: 'full',
        loadChildren: () => import('./sortable/keyboard/module').then(m => m.KeyboardModule),
      },
      {
        path: 'fixed-height',
        pathMatch: 'full',
        loadChildren: () => import('./sortable/fixed-height/module').then(m => m.FixedHeightModule),
      },
    ],
  },
];
