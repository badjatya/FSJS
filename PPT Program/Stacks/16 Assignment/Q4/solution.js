function checkQueueOrder(queue) {
    const stack = [];
    const sortedQueue = [];
  
    let expectedElement = 1;
  
    while (queue.length > 0) {
      const currentElement = queue.shift();
  
      if (currentElement === expectedElement) {
        sortedQueue.push(currentElement);
        expectedElement++;
      } else if (stack.length > 0 && stack[stack.length - 1] === expectedElement) {
        while (stack.length > 0 && stack[stack.length - 1] === expectedElement) {
          sortedQueue.push(stack.pop());
          expectedElement++;
        }
        sortedQueue.push(currentElement);
        expectedElement++;
      } else {
        stack.push(currentElement);
      }
    }
  
    while (stack.length > 0) {
      sortedQueue.push(stack.pop());
    }
  
    for (let i = 1; i < sortedQueue.length; i++) {
      if (sortedQueue[i] < sortedQueue[i - 1]) {
        return "No";
      }
    }
  
    return "Yes";
  }
  
const queue1 = [5, 1, 2, 3, 4];
console.log(checkQueueOrder(queue1)); 

const queue2 = [5, 1, 2, 6, 3, 4];
console.log(checkQueueOrder(queue2)); 
  