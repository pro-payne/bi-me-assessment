import styled from "styled-components";

export const StyledLayout = styled.div`
  background-color: #eee;
  padding: 40px 15px;

  h1 {
    /* font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; */
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
  }
  > div {
    background-color: #fff;
    margin: 0 auto;
    max-width: 900px;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    > div {
      padding: 40px;
      min-height: 200px;

      .fields {
        margin-bottom: 30px;
      }
    }
  }
`;

export const StyledDynamic = styled.div`
  min-height: 94px;

  p {
    margin-top: 0;
    color: #858587;
    font-size: 18px;
  }
  .radio-buttons {
    display: flex;
    column-gap: 25px;
  }

  &.has-error {
    p {
      color: red;
    }
  }
`;

export const StyledError = styled.div`
  color: red;
  padding-top: 10px;
  font-size: 15px;
`;
