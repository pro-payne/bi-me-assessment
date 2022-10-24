import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #00b5e1;
  width: 125px;
  color: #fff;
  border: 1px solid #00b5e1;
  border-radius: 10px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: rgb(0, 156, 192);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
