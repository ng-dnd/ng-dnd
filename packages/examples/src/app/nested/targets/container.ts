import { Component } from '@angular/core';
import { ExampleLink } from '@app/utility/example-link';
import { Box } from './box';
import { Dustbin } from './dustbin';

@Component({
  selector: 'app-nested-targets',
  template: `
    <app-example-link path="nested/targets" />

    <app-nested-targets-box />

    <div class="nested-targets-wrapper">
      <app-nested-targets-dustbin [greedy]="true">
        <app-nested-targets-dustbin [greedy]="true">
          <app-nested-targets-dustbin [greedy]="true" />
        </app-nested-targets-dustbin>
      </app-nested-targets-dustbin>

      <app-nested-targets-dustbin>
        <app-nested-targets-dustbin>
          <app-nested-targets-dustbin />
        </app-nested-targets-dustbin>
      </app-nested-targets-dustbin>
    </div>
  `,
  styles: `
    .nested-targets-wrapper {
      display: flex;
    }
    .nested-targets-wrapper > * {
      flex: 1;
    }
    .nested-targets-wrapper > *:not(:last-child) {
      margin-right: 10px;
    }
  `,
  imports: [ExampleLink, Box, Dustbin],
})
export class Container {}
