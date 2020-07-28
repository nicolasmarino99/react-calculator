import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  switch (operation) {
    case '+':
      return num1.plus(num2);
    case '-':
      return num1.minus(num2);
    case 'X':
      return num1.times(num2);
    case '÷':
      if (num2 === 0) { return '∞'; }
      return num1.div(num2);
    case '%':
      return num1.mod(num2);
    default:
      return 0;
  }
};

export default operate;
