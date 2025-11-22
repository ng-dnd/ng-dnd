import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducer';
import { _overallHash, _unstableHash } from './store/selectors';

@Component({
  selector: 'rxsort-summary',
  template: `
    <p>
      Hash of the unstable list: <code>{{ unstable$ | async }}</code>
      <br />
      Hash of the stable list: <code>{{ stable$ | async }}</code>
    </p>
  `,
  imports: [AsyncPipe],
})
export class SummaryComponent {
  private store = inject<Store<State>>(Store);

  unstable$ = this.store.select(_unstableHash);
  stable$ = this.store.select(_overallHash);
}
