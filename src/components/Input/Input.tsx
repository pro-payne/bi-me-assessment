import React from "react";
import { StyledInput } from "../styled/Input.styled";
import { StyledError } from "../styled/Layout.styled";

interface Props {
  name: string;
  id: string;
  label: string;
  placeholder: string;
  type: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(event: React.FocusEvent<HTMLInputElement, Element>): void;
  value: string;
  hasError: string | boolean | undefined;
}

function Input(props: Props) {
  const {
    name,
    id,
    label,
    placeholder,
    type,
    onChange,
    onBlur,
    value,
    hasError,
  } = props;
  return (
    <StyledInput className={hasError ? "has-error" : ""}>
      <div className="reversed">
        <input
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        <label>{label}</label>
      </div>
      {hasError && <StyledError>{hasError}</StyledError>}
    </StyledInput>
  );
}

export default Input;
