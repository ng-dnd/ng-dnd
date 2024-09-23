import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleComponent } from './simple.component';
import { ExampleLinkComponent } from '@app/utility/example-link.component';

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
  standalone: true,
  imports: [ExampleLinkComponent, SimpleComponent],
})
export class ContainerComponent {}
