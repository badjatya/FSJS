// Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty.

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();

stack.push("item1");
stack.push("item2");
stack.push("item3");

console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
