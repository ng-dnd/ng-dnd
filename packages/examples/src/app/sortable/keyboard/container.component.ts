import { Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { SimpleComponent } from './simple.component';
import { SummaryComponent } from './summary.component';

@Component({
  selector: 'rxsort-container',
  template: `
    <app-example-link path="sortable/keyboard" />
    <p>
      This one uses an <code>&#64;ngrx/store</code> with Immutable.js data. This is very convenient,
      since Immutable.js has its own 'insert' and 'remove' operations.
    </p>

    <p>It also is a demo for</p>
    <ul>
      <li>
        Sorting overlaid on bare HTML table rows using the <code>dndSortable</code> directive,
        without intermediate DOM nodes.
      </li>
      <li>
        Keyboard driven sorting, using <code>angular2-mousetrap</code>. Try using the arrow keys and
        enter to lift/put down.
      </li>
      <li>
        Selectors based on the 'unstable' / 'in-flight' rendered list, and the 'stable' / 'saved'
        one.
      </li>
    </ul>

    <rxsort-summary />
    <div class="sep"></div>
    <rxsort-sortable />
  `,
  styles: `
    .sep {
      border-bottom: 1px solid #999;
      margin-bottom: 8px;
      max-width: 700px;
    }
  `,
  standalone: true,
  imports: [ExampleLinkComponent, SummaryComponent, SimpleComponent],
})
export class ContainerComponent {}
