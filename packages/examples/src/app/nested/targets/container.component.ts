import { Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { BoxComponent } from './box.component';
import { DustbinComponent } from './dustbin.component';

@Component({
  selector: 'app-nested-targets',
  template: `
    <app-example-link path="nested/targets"></app-example-link>

    <app-nested-targets-box></app-nested-targets-box>

    <div class="nested-targets-wrapper">
      <app-nested-targets-dustbin [greedy]="true">
        <app-nested-targets-dustbin [greedy]="true">
          <app-nested-targets-dustbin [greedy]="true"></app-nested-targets-dustbin>
        </app-nested-targets-dustbin>
      </app-nested-targets-dustbin>

      <app-nested-targets-dustbin>
        <app-nested-targets-dustbin>
          <app-nested-targets-dustbin></app-nested-targets-dustbin>
        </app-nested-targets-dustbin>
      </app-nested-targets-dustbin>
    </div>
  `,
  styles: [
    `
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
  ],
  standalone: true,
  imports: [ExampleLinkComponent, BoxComponent, DustbinComponent],
})
export class ContainerComponent {}
