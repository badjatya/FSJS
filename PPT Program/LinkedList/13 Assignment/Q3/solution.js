class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseKNodes(head, k) {
    if (!head || k <= 1) {
      return head;
    }
  
    let current = head;
    let prev = null;
  
    let count = 0;
    while (current && count < k) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
      count++;
    }
  
    if (current) {
      head.next = reverseKNodes(current, k);
    }
  
    return prev;
  }
  