import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DndModule } from '@ng-dnd/core';
import { DndSortableRenderer } from '@ng-dnd/sortable';
import { MathQuestion, Question } from './Question';
import { MathFormComponent } from './math-form.component';

@Component({
  selector: 'quiz-section',
  template: `
    <div
      class="section"
      [class.section--placeholder]="render?.isDragging$ | async"
      [class.section--preview]="preview"
      [dragPreview]="render?.source!"
    >
      <span class="section-handle" [dragSource]="render?.source!" [noHTML5Preview]="true">
        &#9776;
      </span>

      <div class="section-content">
        @switch (question.formType) {
          @case ('Math') {
            <app-math-form [data]="getMathQuestion()" (edit)="edit.emit($event)" />
          }
          @case ('Name') {
            <div>Student enters their name/student id</div>
          }
        }
      </div>
    </div>
  `,
  styleUrl: './section.component.scss',
  imports: [DndModule, MathFormComponent, AsyncPipe],
})
export class SectionComponent {
  render = inject<DndSortableRenderer<Question>>(DndSortableRenderer, { optional: true });

  @Input() question!: Question;
  @Input() preview = false;
  @Output() edit = new EventEmitter();
  getMathQuestion() {
    return this.question as MathQuestion;
  }
}
