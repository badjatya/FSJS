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

    reverse() {
        if (!this.isEmpty()) {
            const temp = this.pop();
            this.reverse();
            this.insertAtBottom(temp);
        }
    }

    insertAtBottom(element) {
        if (this.isEmpty()) {
            this.push(element);
        } else {
            const temp = this.pop();
            this.insertAtBottom(element);
            this.push(temp);
        }
    }

    print() {
        console.log(this.stack);
    }
}


const stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(7);
stack.push(6);

console.log("Original stack:");
stack.print();

console.log("Reversed stack:");
stack.reverse();
stack.print();
