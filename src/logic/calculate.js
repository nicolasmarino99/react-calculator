import operate from "./operate";

const calculate = (calculateObj, button) => {
    const {total, next, operation} = calculateObj

    switch (button) {
        case 'AC':
            return {
                total: 0,
                next: null,
                operation: null,
            }
        case '+/-':
            if (next) {
                return {
                    total: 0,
                    next: next*-1,
                    operation: null,
                }
            } else {
                return {
                    total: total*-1,
                    next,
                    operation: null,
                }
            }
        case '%':
        case '÷':
        case 'X':
        case '-':
        case '+':
        case '.':
        case '=':
            return {
                total: operate(total, next, operation),
                next: 0,
                operation: null,
            }
        case '.':
            
        default:
            break;
    }
};

export default calculate;