import operate from './operate';

const calculate = (calculateObj, button) => {
  const {
    total,
    next,
    operation,
    prevCalc,
  } = calculateObj;

  switch (button) {
    case 'AC':
      return {
        prevCalc: false,
        total: null,
        next: null,
        operation: null,
      };
    case '+/-':
      if (next) {
        return {
          prevCalc: false,
          total: 0,
          next: next * -1,
          operation: null,
        };
      }
      return {
        prevCalc: false,
        total: total * -1,
        next,
        operation: null,
      };

    case '%':
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: button,
          prevCalc: false,
        };
      }
      return { total, next: null, operation: button, prevCalc: false };
    case '÷':
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: button,
          prevCalc: false,
        };
      }
      return { total, next: null, operation: button, prevCalc: false };
    case 'X':
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: button,
          prevCalc: false,
        };
      }
      return { total, next: null, operation: button, prevCalc: false };
    case '-':
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: button,
          prevCalc: false,
        };
      }
      return { total, next: null, operation: button, prevCalc: false };
    case '+':
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: button,
          prevCalc: false,
        };
      }
      return { total, next: null, operation: button, prevCalc: false };
    case '.':
      if (next) {
        return { prevCalc: false, total, next: `${next}.`, operation };
      }
      if (total) {
        return { prevCalc: false, total: `${total}.`, next, operation };
      }
      return { total: '.', next, operation };
    case '=':
      return {
        total: operate(total, next, operation),
        prevCalc: true,
        next: null,
        operation: null,
      };
    default:
      if (prevCalc) return { total: button, next, operation, prevCalc: true }
      if (operation) return { total, next: next ? next + button : button, operation };
      return { total: total ? total + button : button, next, operation };
  }
};

export default calculate;
