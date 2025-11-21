import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MathQuestion, Question, QuestionTypes } from './Question';

interface Section {
  question: Question;
  input: FormGroup;
}

const equalsValidator: (x: any) => ValidatorFn = x => c => {
  return c.value === x ? null : { incorrect: true };
};

@Component({
  selector: 'app-printout',
  template: `
    <div class="printout-page">
      @for (section of sections; track section) {
        <div class="printout-elem">
          @switch (section.question.formType) {
            @case ('Math') {
              <div>
                <h4>{{ getQuestion(section) }}</h4>
                <form [formGroup]="section.input">
                  <input formControlName="answer" type="number" />
                  @if (section.input.get('answer'); as answer) {
                    <div class="alert alert-danger">
                      @if (
                        answer.invalid &&
                        (answer.touched || answer.dirty) &&
                        answer.errors?.incorrect
                      ) {
                        <div>That's not quite right.</div>
                      }
                      @if (answer.valid) {
                        <div>Correct!</div>
                      }
                    </div>
                  }
                </form>
              </div>
            }
            @case ('Name') {
              <div>
                <h4>Enter your Name and Student Id</h4>
                <form [formGroup]="section.input">
                  <label>Name <input formControlName="name" /></label>
                  <label>Student ID <input formControlName="studentId" /></label>
                  @if (section.input.get('studentId'); as studentId) {
                    <div class="alert alert-danger">
                      @if (
                        studentId.invalid &&
                        (studentId.touched || studentId.dirty) &&
                        studentId.errors?.pattern
                      ) {
                        <div>Please enter a student ID in the form 's1234'.</div>
                      }
                    </div>
                  }
                </form>
              </div>
            }
          }
        </div>
      }
    </div>
  `,
  styles: `
    .ng-valid:not(form) {
      border-left: 5px solid #42a948; /* green */
    }
    .ng-invalid:not(form) {
      border-left: 5px solid #a94442; /* red */
    }
  `,
  imports: [ReactiveFormsModule],
})
export class PrintoutComponent {
  sections: Section[] = [];
  @Input() set formElements(forms: Question[]) {
    this.sections = forms.map(q => {
      return {
        question: q,
        input: this.getFormGroup(q),
      };
    });
  }

  getFormGroup(question: Question) {
    switch (question.formType) {
      case QuestionTypes.Math: {
        return new FormGroup({
          answer: new FormControl(null, [Validators.required, equalsValidator(question.answer)]),
        });
      }
      case QuestionTypes.Name: {
        return new FormGroup({
          name: new FormControl(null, [Validators.required]),
          studentId: new FormControl(null, [Validators.required, Validators.pattern(/^s\d{4}$/)]),
        });
      }
    }
  }

  getQuestion(section: Section) {
    return (section.question as MathQuestion).question;
  }
}
