import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { NgLetDirective } from '@app/utility/ngLet.directive';
import { BoxComponent } from './box.component';
import { FolderComponent } from './folder.component';
import { TreeService } from './tree.service';

@Component({
  selector: 'drilldown-container',
  template: `
    <app-example-link path="drilldown" />
    <p>
      Hover over a folder to temporarily drill down. Click normally on a folder to open or close it.
    </p>
    <p>
      This example uses a wrapper around <code>DndService#dropTarget</code>, that listens to
      dnd-core hover events and fires a callback when you have hovered long enough. This is a clean
      pattern for extending <code>&#64;ng-dnd/core</code> in a reusable way.
    </p>
    <p *ngLet="lastDrop$ | async as keys">
      Last dropped on <code> {{ keys ? keys.join(' > ') : '(never)' }} </code>
    </p>
    <p>
      <drilldown-source (beginDrag)="beginDrag()" (endDrag)="endDrag()" />
    </p>
    <drilldown-folder [keys]="[]" />
  `,
  styles: `
    :host {
      display: block;
      min-height: 600px;
    }
  `,
  imports: [ExampleLinkComponent, NgLetDirective, BoxComponent, FolderComponent, AsyncPipe],
})
export class ContainerComponent {
  lastDrop$ = this.tree.select(s => s.lastDrop);

  constructor(private tree: TreeService) {}

  beginDrag() {
    this.tree.beginDrag();
  }

  endDrag() {
    this.tree.endDrag();
  }
}
