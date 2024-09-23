import { Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { NativeTypes } from 'react-dnd-html5-backend';
import { TargetComponent } from './target.component';

@Component({
  selector: 'native-container',
  template: `
    <app-example-link path="html5/native-types" />
    <p>
      When you are using the HTML5 backend, you can accept three native types: files, URLs, and
      text.
    </p>
    <div class="flex">
      <native-target [type]="NativeTypes.FILE">
        <p>Receives a list of native JavaScript File objects.</p>
      </native-target>
      <native-target [type]="NativeTypes.URL">
        <p>Receives a list of URLs as strings.</p>
      </native-target>
      <native-target [type]="NativeTypes.TEXT">
        <p>Receives a string of the text you dropped.</p>
      </native-target>
    </div>
  `,
  styles: `
    .flex {
      display: flex;
      flex-wrap: wrap;
      margin: -8px;
    }
    .flex > * {
      flex: 1;
    }
    .flex > * {
      margin: 8px;
    }
  `,
  standalone: true,
  imports: [ExampleLinkComponent, TargetComponent],
})
export class ContainerComponent {
  NativeTypes = NativeTypes;
}
