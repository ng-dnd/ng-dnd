import { Input, Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trash',
  template: `
    <div class="trash pad" [class.empty]="empty" [class.in-flight]="inFlight">
      <span class="type">{{ type }}</span>
    </div>
  `,
  styles: `
    .trash {
      background: #ffccff;
    }
    .empty {
      background: #eee;
    }
    .empty .type {
      visibility: hidden;
    }
    /* when preview is shown on mobile */
    .in-flight {
      width: 100px;
      background-clip: padding-box;
      border: 2px solid rgba(0, 0, 0, 0.1);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TrashComponent {
  @Input() type = '';
  @Input() empty = false;
  @Input() inFlight = false;
}
