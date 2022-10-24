/**
 * Dynamic operators
 * @returns
 */
function compareOperator(initialValue: any, operator: string, postValue: any) {
  switch (operator) {
    case ">":
      return initialValue > postValue;
    case "<":
      return initialValue < postValue;
    case ">=":
      return initialValue >= postValue;
    case "<=":
      return initialValue <= postValue;
    case "==":
      // eslint-disable-next-line eqeqeq
      return initialValue == postValue;
    case "!=":
      // eslint-disable-next-line eqeqeq
      return initialValue != postValue;
    case "===":
      return initialValue === postValue;
    case "!==":
      return initialValue !== postValue;
  }
}

export default compareOperator;
