class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in the queue";
      }
      return this.items[0];
    }
  
    size() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseKElements(queue, k) {
    if (queue.isEmpty() || k <= 0 || k > queue.size()) {
      return queue;
    }
  
    const stack = [];
  
    for (let i = 0; i < k; i++) {
      stack.push(queue.dequeue());
    }
  
    while (stack.length > 0) {
      queue.enqueue(stack.pop());
    }
  
    for (let i = 0; i < queue.size() - k; i++) {
      queue.enqueue(queue.dequeue());
    }
  
    return queue;
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  
  console.log("Original Queue:", queue.items);
  
  const k = 3;
  const reversedQueue = reverseKElements(queue, k);
  
  console.log("Reversed Queue:", reversedQueue.items);
  