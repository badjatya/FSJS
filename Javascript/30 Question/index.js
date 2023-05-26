// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function calculator(num1, num2, operator) {
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        return "Invalid operator";
    }

    return result;
}

const number1 = 10;
const number2 = 5;
const operation = "+";

const result = calculator(number1, number2, operation);
console.log("Result:", result);
