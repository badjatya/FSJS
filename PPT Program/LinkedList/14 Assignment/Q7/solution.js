class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function nextGreaterNodes(head) {
  if (!head) {
    return [];
  }

  const stack = [];
  const result = [];
  let curr = head;
  let index = 0;

  while (curr) {
    while (stack.length > 0 && stack[stack.length - 1].val < curr.val) {
      const prevIndex = stack.pop().index;
      result[prevIndex] = curr.val;
    }

    stack.push({ val: curr.val, index });
    result[index] = 0;
    index++;
    curr = curr.next;
  }

  return result;
}
