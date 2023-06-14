class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseAlternateKNodes(head, k, shouldReverse) {
    if (!head || k <= 1) {
      return head;
    }
  
    let current = head;
    let prev = null;
    let nextNode = null;
  
    let count = 0;
    while (current && count < k) {
      nextNode = current.next;
      
      if (shouldReverse) {
        current.next = prev;
      }
  
      prev = current;
      current = nextNode;
      count++;
    }
  
    if (shouldReverse) {
      head.next = reverseAlternateKNodes(nextNode, k, !shouldReverse);
      return prev;
    } else {
      head.next = reverseAlternateKNodes(nextNode, k, !shouldReverse);
      return head;
    }
  }
  