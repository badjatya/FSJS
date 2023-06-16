function deleteMiddleElement(stack) {
    if (stack.length === 0) {
      return;
    }
  
    const midIndex = Math.floor(stack.length / 2);
  
    deleteMiddleUtil(stack, midIndex);
  }
  
  function deleteMiddleUtil(stack, midIndex) {
    if (midIndex === 0) {
      stack.pop();
      return;
    }
  
    const temp = stack.pop();
  
    deleteMiddleUtil(stack, midIndex - 1);
  
    stack.push(temp);
  }

const stack1 = [1, 2, 3, 4, 5];
deleteMiddleElement(stack1);
console.log(stack1); 

const stack2 = [1, 2, 3, 4, 5, 6];
deleteMiddleElement(stack2);
console.log(stack2); 
  