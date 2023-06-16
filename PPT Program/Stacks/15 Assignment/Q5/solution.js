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

    reverseString(inputString) {
        let reversedString = '';

        for (let i = 0; i < inputString.length; i++) {
            this.push(inputString[i]);
        }

        while (!this.isEmpty()) {
            reversedString += this.pop();
        }

        return reversedString;
    }
}

const stack = new Stack();
const inputString = "GeeksforGeeks";
const reversedString = stack.reverseString(inputString);

console.log(reversedString);
