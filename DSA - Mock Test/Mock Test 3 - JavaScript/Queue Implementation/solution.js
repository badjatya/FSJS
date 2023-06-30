// Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue();

queue.enqueue("item1");
queue.enqueue("item2");
queue.enqueue("item3");

console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.dequeue());
