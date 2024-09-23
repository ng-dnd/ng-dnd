import { Component, Input } from '@angular/core';
import { Card } from '../specs';

@Component({
  selector: 'kanban-card',
  template: `
    <div class="card" [class.card--preview]="preview" [class.card--placeholder]="placeholder">
      <p>{{ card.title }}</p>
    </div>
  `,
  styleUrl: './kanban-card.component.scss',
  standalone: true,
})
export class KanbanCardComponent {
  @Input() card!: Card;
  @Input() preview = false;
  @Input() placeholder = false;
}
