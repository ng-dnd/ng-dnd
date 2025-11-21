import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { activatorDropTarget } from './activatorDropTarget';
import { ItemTypes } from './itemTypes';
import { TreeService } from './tree.service';

@Component({
  selector: 'drilldown-folder',
  template: `
    @if (keys.length === 0) {
      <ul [class.has-children]="anyChildren$ | async">
        @for (c of children$ | async; track tracker($index, c)) {
          <drilldown-folder [keys]="keys.concat([c])" />
        }
      </ul>
    } @else {
      <li
        [class.root]="keys.length === 0"
        [class.is-open]="isOpen$ | async"
        [class.is-over]="isOver$ | async"
        [class.has-children]="anyChildren$ | async"
      >
        <!-- TODO: use button -->
        <div [dropTarget]="target" (click)="toggle()" aria-hidden="true">
          @if (anyChildren$ | async) {
            <b>{{ ownKey }} ...</b>
          } @else {
            {{ ownKey }}
          }
        </div>
        @if (isOpen$ | async) {
          <ul [class.root]="keys.length === 0" [class.has-children]="anyChildren$ | async">
            @for (c of children$ | async; track tracker($index, c)) {
              <drilldown-folder [keys]="keys.concat([c])" />
            }
          </ul>
        }
      </li>
    }
  `,
  styleUrl: './folder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DndModule, AsyncPipe],
})
export class FolderComponent implements OnInit, OnDestroy {
  @Input() keys: string[] = [];

  get ownKey() {
    if (this.keys.length === 0) {
      return '<root>';
    }
    return this.keys[this.keys.length - 1];
  }

  children$!: Observable<string[]>;
  anyChildren$!: Observable<boolean>;
  isOpen$!: Observable<boolean>;

  // note, we are using a wrapped version of dnd.dropTarget.
  // this one will observe the 'hover' callback for us, and use Rx
  // to wait 600ms before firing onActivate, with appropriate cancellation
  // if you provide your own hover: () => callback, it will also be run.
  // the returned object is the same DropTargetConnection, which you should
  // connect to the DOM, and then unsubscribe() from later.
  target = activatorDropTarget(this.dnd, ItemTypes.EMAIL, 600, {
    onActivate: a => {
      this.tree.openTransient(this.keys);
      // this.cdr.detectChanges();
    },
    drop: monitor => {
      this.tree.drop(this.keys);
    },
  });

  isOver$ = this.target.listen(m => m.isOver() && m.canDrop());

  constructor(
    public tree: TreeService,
    private dnd: DndService
  ) {}

  ngOnInit() {
    this.children$ = this.tree.getChildren(this.keys);
    this.anyChildren$ = this.children$.pipe(map(cs => cs && cs.length > 0));
    this.isOpen$ = this.tree.isOpen(this.keys);
  }

  tracker(_: number, c: string) {
    return c;
  }

  toggle() {
    this.tree.toggle(this.keys);
  }

  ngOnDestroy() {
    this.target.unsubscribe();
  }
}
