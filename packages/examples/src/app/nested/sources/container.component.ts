import { Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { BlueOrYellowComponent } from './blue-or-yellow.component';
import { Colors } from './colors';
import { TargetBoxComponent } from './target.component';

@Component({
  selector: 'app-sources',
  template: `
    <app-example-link path="nested/sources" />
    <div class="nested-sources-wrapper">
      <app-blue-or-yellow [color]="Colors.BLUE">
        <app-blue-or-yellow [color]="Colors.YELLOW">
          <app-blue-or-yellow [color]="Colors.YELLOW" />
          <app-blue-or-yellow [color]="Colors.BLUE" />
        </app-blue-or-yellow>
        <app-blue-or-yellow [color]="Colors.BLUE">
          <app-blue-or-yellow [color]="Colors.YELLOW" />
        </app-blue-or-yellow>
      </app-blue-or-yellow>
      <app-nested-source-targetbox />
    </div>
  `,
  styles: `
    .nested-sources-wrapper {
      display: flex;
    }
    .nested-sources-wrapper > * {
      flex: 1;
    }
    .nested-sources-wrapper > *:not(:last-child) {
      margin-right: 20px;
    }
  `,
  imports: [ExampleLinkComponent, BlueOrYellowComponent, TargetBoxComponent],
})
export class ContainerComponent {
  Colors = Colors;
}
