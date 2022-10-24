import React from "react";
import { StyledButton } from "../styled/Button.styled";

interface Props {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
}

function Button(props: Props) {
  const { type, children, disabled } = props;

  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  disabled: false,
};

export default Button;
