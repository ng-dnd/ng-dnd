import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MathQuestion } from './Question';

@Component({
  selector: 'app-math-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <label>
          Question:
          <input class="title" placeholder="Add a card" formControlName="question" />
        </label>
      </div>
      <div>
        <label>
          Answer:
          <input class="amount" type="number" formControlName="answer" />
        </label>
      </div>
      <div>
        @if (form.dirty) {
          <input type="submit" value="Save question" />
        }
      </div>
    </form>
  `,
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class MathFormComponent implements OnChanges {
  @Input() data!: MathQuestion;
  @Output() edit = new EventEmitter<MathQuestion>();

  form!: FormGroup;

  ngOnChanges() {
    this.form = new FormGroup({
      question: new FormControl(this.data.question),
      answer: new FormControl(this.data.answer),
    });
  }

  onSubmit() {
    this.edit.emit(
      new MathQuestion(
        this.data.id,
        this.form.get('question')?.value as string,
        this.form.get('answer')?.value as number
      )
    );
  }
}
