interface QuestionDataInterface {
  code: string;
  text: string;
  type: string;
}

export type BoolQuestionInterface = QuestionDataInterface & {
  trueLabel: string;
  falseLabel: string;
  controlType: string;
};

export type TextQuestionInterface = QuestionDataInterface & {
  placeholder: string;
  conditions: {
    question: string;
    operator: string;
    value: string;
  }[];
};

export type QuestionInterface = BoolQuestionInterface & TextQuestionInterface;
