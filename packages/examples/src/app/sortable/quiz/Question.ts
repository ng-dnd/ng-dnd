import { immerable } from 'immer';

export enum QuestionTypes {
  Math = "Math",
  Name = "Name",
}

export class MathQuestion {
  constructor(
    public id: any,
    public question: string,
    public answer: number
  ) { }
  static readonly templateDescription = "Math question";
  readonly [immerable] = true;
  readonly formType = QuestionTypes.Math;
  readonly templateDescription = MathQuestion.templateDescription;
}

export class NameQuestion {
  constructor(
    public id: any
  ) { }
  static readonly templateDescription = "Name and student ID";
  readonly [immerable] = true;
  readonly formType = QuestionTypes.Name;
  readonly templateDescription = NameQuestion.templateDescription;
}

export type Question = MathQuestion | NameQuestion;
