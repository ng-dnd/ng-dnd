import { Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { BinComponent } from './bin.component';
import { TrashPileComponent } from './trash-pile.component';
import { TrashComponent } from './trash.component';

@Component({
  template: `
    <app-example-link path="bins" />

    <p>This example demonstrates:</p>
    <ul>
      <li>Making components conditionally draggable</li>
      <li>Making targets conditionally available for drops</li>
      <li>How drop targets can accept different item types</li>
    </ul>

    <dnd-preview>
      <ng-template let-type let-item="item">
        <app-trash [type]="type" [inFlight]="true" />
      </ng-template>
    </dnd-preview>

    <div class="bins">
      <app-trash-pile type="PAPER" />
      <app-trash-pile type="ENVELOPE" />
      <app-trash-pile type="PARCEL" />
    </div>
    <div class="bins">
      <app-bin name="recycle" [accepts]="['PAPER', 'ENVELOPE']" />
      <app-bin name="mailbox" [accepts]="['PARCEL', 'ENVELOPE']" />
    </div>
  `,
  styles: `
    .bins {
      margin-top: 20px;
      display: flex;
    }
    .bins > * {
      flex: 1;
      min-width: 100px;
    }
    .bins > *:not(:last-child) {
      margin-right: 4px;
    }
  `,
  standalone: true,
  imports: [
    DndMultiBackendModule,
    ExampleLinkComponent,
    TrashComponent,
    TrashPileComponent,
    BinComponent,
  ],
})
export class ContainerComponent {}
