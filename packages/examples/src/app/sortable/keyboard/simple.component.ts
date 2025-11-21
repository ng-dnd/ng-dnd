import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DndModule } from '@ng-dnd/core';
import { DndSortableModule, NgRxSortable } from '@ng-dnd/sortable';
import { Store } from '@ngrx/store';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { Blob } from './store/blob';
import {
  ActionTypes,
  DropSelected,
  LiftSelected,
  MoveSelectedDown,
  MoveSelectedUp,
  SelectBlob,
} from './store/reducer';
import { _lifted, _render, _selected } from './store/selectors';

@Component({
  selector: 'rxsort-sortable',
  styleUrl: './simple.component.scss',
  template: `
    <table dndSortable class="list" [spec]="rxSpec" #sortable="dndSortable">
      <thead>
        <tr>
          <th>Hash</th>
          <th>Filename</th>
        </tr>
      </thead>
      <tbody>
        @for (blob of sortable.children$ | async; track blob; let i = $index) {
          <tr
            [dndSortableRender]="sortable.contextFor(blob, i)"
            #render="dndSortableRender"
            [dragSource]="render.source"
            [class.blob--placeholder]="render.isDragging$ | async"
            [class.blob--selected]="blob.id === (selected$ | async)"
            [class.blob--lifted]="blob.id === (lifted$ | async)"
            (click)="click(blob)"
          >
            <td class="hash">
              <code>{{ blob.hash }}</code>
            </td>
            <td>{{ blob.content }}</td>
          </tr>
        }
      </tbody>
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DndModule, DndSortableModule, AsyncPipe],
})
export class SimpleComponent {
  rxSpec = new NgRxSortable<Blob>(this.store, ActionTypes.SORT, {
    type: 'BLOB',
    trackBy: x => x.id,
    getList: _ => this.store.select(_render as any),
  });

  selected$ = this.store.select(_selected as any);
  lifted$ = this.store.select(_lifted as any);

  constructor(
    private store: Store<unknown>,
    private hotkeys: HotkeysService
  ) {
    this.hotkeys.add(
      new Hotkey(
        'enter',
        _event => {
          this.store.dispatch(new LiftSelected());
          return false;
        },
        [],
        'Lift up or put down selected item'
      )
    );
    this.hotkeys.add(
      new Hotkey(
        'up',
        _event => {
          this.store.dispatch(new MoveSelectedUp());
          return false;
        },
        [],
        'Move selection or lifted item up'
      )
    );
    this.hotkeys.add(
      new Hotkey(
        'down',
        _event => {
          this.store.dispatch(new MoveSelectedDown());
          return false;
        },
        [],
        'Move selection or lifted item down'
      )
    );
    this.hotkeys.add(
      new Hotkey(
        'esc',
        _event => {
          this.store.dispatch(new DropSelected());
          return false;
        },
        [],
        'Put down lifted item'
      )
    );
  }

  click(blob: Blob) {
    this.store.dispatch(new SelectBlob(blob.id));
  }
}
