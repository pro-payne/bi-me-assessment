import styled from "styled-components";

export const StyledRadioButton = styled.div`
  max-width: 115px;
  height: 50px;
  position: relative;
  user-select: none;

  label {
    display: flex;
    border: 1px solid #dcd7d7;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    cursor: pointer;

    > div {
      display: flex;
      align-items: center;
      padding: 0px 15px;
      width: 100%;
      height: 100%;
    }
  }

  .circle {
    height: 25px;
    width: 25px;
    border: 1px solid #dcd7d7;
    border-radius: 50%;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: #fff;
    }
  }

  input {
    margin: 0;
    opacity: 0;
    background-color: transparent;
    position: absolute;
    visibility: hidden;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &:checked + label {
      border-color: #00b5e1;
      background-color: rgb(0 181 225 / 8%);
      .circle {
        border-color: #00b5e1;
        background-color: #00b5e1;
        box-shadow: 0px 4px 9px rgb(2 139 172 / 71%);
      }
    }
  }
`;
