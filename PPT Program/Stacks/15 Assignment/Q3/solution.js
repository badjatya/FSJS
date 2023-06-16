class Stack {
  constructor() {
      this.q1 = [];
      this.q2 = [];
  }

  push(element) {
      const length = this.q1.length;

      this.q1.push(element);

      for (let i = 0; i < length; i++) {
          this.q1.push(this.q1.shift());
      }
  }

  pop() {
      if (this.q1.length === 0) {
          return -1;
      }

      return this.q1.shift();
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.pop()); 
stack.push(4);
console.log(stack.pop()); 
