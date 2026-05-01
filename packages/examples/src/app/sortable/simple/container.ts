import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Simple } from './simple';
import { ExampleLink } from '@app/utility/example-link';

@Component({
  selector: 'simple-sortable-container',
  template: `
    <app-example-link path="sortable/simple" />

    <p>
      This example is like the 'Basic Sortable', except you don't have to write a complicated hover
      function. You can focus on the model data.
    </p>

    <app-simple-sortable />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExampleLink, Simple],
})
export class Container {}
