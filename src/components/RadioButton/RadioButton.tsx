import React from "react";
import { StyledRadioButton } from "../styled/RadioButton.styled";

interface Props {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(event: React.FocusEvent<HTMLInputElement, Element>): void;
}

function RadioButton(props: Props) {
  const { id, label, name, value, onBlur, onChange } = props;
  return (
    <StyledRadioButton>
      <input type="radio" id={id} name={name} value={value} onBlur={onBlur} onChange={onChange} />
      <label htmlFor={id}>
        <div>
          <div className="circle">
            <div />
          </div>
          <div className="name">{label}</div>
        </div>
      </label>
    </StyledRadioButton>
  );
}

export default RadioButton;
