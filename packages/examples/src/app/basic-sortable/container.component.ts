import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { BasicSortableComponent } from './basic-sortable.component';

@Component({
  selector: 'basic-sortable-container',
  template: `
    <app-example-link path="basic-sortable" />

    <p>You can make a sortable by:</p>

    <ul>
      <li>giving each card a <code>DragSource</code> and a <code>DropTarget</code>;</li>

      <li>
        determining when you are hovering on the upper or lower half of a neighbouring card using
        <code>monitor.getClientOffset()</code>;
      </li>

      <li>
        working out when a reordering is necessary by comparing the index with the item in flight's
        index;
      </li>

      <li>
        bubbling up reordering events, and also beginDrag, endDrag and drop events to a component
        that controls re-rendering the list; and
      </li>

      <li>storing a clone of your list to revert to on endDrag, or commit to on drop</li>
    </ul>

    <p>
      If that sounds like too much effort, this pattern is made easy and reusable in
      <code>&#64;ng-dnd/sortable</code>. You can do it without introducing a new component, too.
    </p>

    <p>
      You can compare the source code of this example to equivalent using that abstraction,
      <a [routerLink]="['/sortable', 'simple']">Simple list</a>.
    </p>

    <basic-sortable />
  `,
  standalone: true,
  imports: [RouterLink, ExampleLinkComponent, BasicSortableComponent],
})
export class ContainerComponent {}
