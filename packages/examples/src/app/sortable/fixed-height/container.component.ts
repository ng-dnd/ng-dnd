import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { FixedHeightComponent } from './fixed-height.component';

@Component({
  selector: 'simple-sortable-container',
  template: `
    <app-example-link path="sortable/fixed-height" />

    <p>
      If you know all the elements have the same height, then you can swap out the hover algorithm
      for one that reorders as soon as you hover on another element. It won't work with variable
      height elements.
    </p>
    <p>
      Simply add <code>hoverTrigger="fixed"</code> to a <code>&lt;dnd-sortable-list&gt;</code> or
      <code>dndSortable</code>
    </p>

    <app-fixed-sortable />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExampleLinkComponent, FixedHeightComponent],
})
export class ContainerComponent {}
