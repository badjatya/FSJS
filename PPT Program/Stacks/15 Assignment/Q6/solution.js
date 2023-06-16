class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    evaluatePostfixExpression(expression) {
        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];

            if (this.isOperator(char)) {
                const operand2 = this.pop();
                const operand1 = this.pop();
                const result = this.evaluateExpression(operand1, operand2, char);
                this.push(result);
            } else {
                this.push(parseInt(char));
            }
        }

        return this.pop();
    }

    isOperator(char) {
        const operators = ['+', '-', '*', '/'];
        return operators.includes(char);
    }

    evaluateExpression(operand1, operand2, operator) {
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
            default:
                return 0;
        }
    }
}

const stack = new Stack();
const expression1 = "231*+9-";
const result1 = stack.evaluatePostfixExpression(expression1);

console.log(result1); 

const expression2 = "123+*8-";
const result2 = stack.evaluatePostfixExpression(expression2);

console.log(result2);
