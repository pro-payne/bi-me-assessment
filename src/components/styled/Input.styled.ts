import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  min-height: 94px;

  .reversed {
    flex-direction: column-reverse;
    display: flex;
  }

  label {
    color: #858587;
    font-size: 18px;
    display: block;
    margin-bottom: 6px;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid #858587;
    font-weight: 500;
    height: 30px;
    font-size: 17px;

    &:focus {
      border-bottom-color: #467ee7;
      background-color: #fff;
    }
    &:focus ~ label {
      color: #467ee7;
    }
  }

  &.has-error {
    input {
      border-bottom-color: red;

      &:focus ~ label {
        color: red;
      }
    }

    label {
      color: red;
    }
  }
`;
