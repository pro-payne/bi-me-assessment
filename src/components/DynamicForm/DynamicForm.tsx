import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import RadioButton from "../RadioButton/RadioButton";
import { StyledDynamic, StyledError } from "../styled/Layout.styled";
import { QuestionInterface } from "../../interface/data.interface";
import compareOperator from "../../utils/operators";

interface Props {
  data: QuestionInterface[];
}

function DynamicForm(props: Props) {
  const { data: questions } = props;

  const initialValues: Record<string, string> = questions.reduce(
    (accumulator, value) => {
      return { ...accumulator, [value.code]: "" };
    },
    {}
  );

  function dynamicYup(value: QuestionInterface) {
    let whenCondi: string[] = [];

    if (value.conditions) {
      whenCondi = value.conditions.map((v) => v.question);
    }

    if (value.type === "bool") {
      if (value.conditions) {
        return Yup.string().required("Required");
      }

      return Yup.string().required("Required");
    }

    if (value.type === "text") {
      if (value.conditions) {
        return Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(50, "Must be 50 characters or less")
          .when(whenCondi, (inputValue, schema) => {
            const findDep = value.conditions.find((condition) => {
              const deps = (schema as never as { deps: string[] }).deps.find(
                (dep) => {
                  return dep === condition.question;
                }
              );

              if (
                deps &&
                compareOperator(inputValue, condition.operator, condition.value)
              ) {
                return true;
              }

              return false;
            });

            if (findDep) {
              return Yup.string()
                .min(3, "Must be at least 3 characters")
                .max(50, "Must be 50 characters or less")
                .required("Required");
            }

            return schema;
          });
      }

      return Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(50, "Must be 50 characters or less")
        .optional();
    }

    return {};
  }

  const validationSchema = questions.reduce((prevValue, currentValue) => {
    return {
      ...prevValue,
      [currentValue.code]: dynamicYup(currentValue),
    };
  }, {});

  function constructData(
    input: QuestionInterface[],
    values: Record<string, string>
  ) {
    let data: Record<string, string> = {};

    input.forEach((question) => {
      const currentValue = values[question.code];
      let results = currentValue;

      if (question.conditions) {
        let found = false;

        question.conditions.forEach((condition) => {
          const value = values[condition.question];

          if (
            value &&
            compareOperator(value, condition.operator, condition.value)
          ) {
            found = true;
          }
        });

        if (!found) {
          results = "";
        }
      }

      data[question.code] = results;
    });

    return data;
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: (values) => {
      const data = constructData(questions, values);

      alert(JSON.stringify(data));
      window.location.reload();
    },
  });

  function hasConditions(question: QuestionInterface) {
    if (typeof question.conditions === "undefined") {
      return true;
    }

    let results = false;

    question.conditions.forEach((condition) => {
      const value = formik.values[condition.question];

      if (
        value &&
        compareOperator(value, condition.operator, condition.value)
      ) {
        results = true;
      }
    });

    return results;
  }

  function hasError(field: string) {
    if (formik.touched[field] && formik.errors[field]) {
      return true;
    }

    return false;
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {questions.length > 0 && (
          <>
            {questions.map((question, index) => {
              if (question.type === "bool" && hasConditions(question)) {
                return (
                  <StyledDynamic
                    className={`fields ${
                      hasError(question.code) ? "has-error" : ""
                    }`}
                    key={question.code}
                  >
                    <p>{question.text}</p>
                    <div className="radio-buttons">
                      <RadioButton
                        id={`${question.code}-${index.toString()}`}
                        label={question.trueLabel || ""}
                        name={question.code}
                        value="true"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <RadioButton
                        id={`${question.code}-${(index + 1).toString()}`}
                        label={question.falseLabel || ""}
                        name={question.code}
                        value="false"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {hasError(question.code) && (
                      <StyledError>{formik.errors[question.code]}</StyledError>
                    )}
                  </StyledDynamic>
                );
              }

              if (question.type === "text" && hasConditions(question)) {
                return (
                  <div className="fields" key={question.code}>
                    <Input
                      name={question.code}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id={`${question.code}-${index.toString()}`}
                      type={question.type}
                      placeholder={question.placeholder || ""}
                      label={question.text}
                      value={formik.values[question.code]}
                      hasError={
                        hasError(question.code) && formik.errors[question.code]
                      }
                    />
                  </div>
                );
              }

              return (
                <React.Fragment
                  key={`React.Fragment-${index.toString()}`}
                ></React.Fragment>
              );
            })}

            <Button type="submit" disabled={!formik.isValid}>
              Submit
            </Button>
          </>
        )}

        {questions.length === 0 && <h1>No available questions!</h1>}
      </form>
    </>
  );
}

export default DynamicForm;
