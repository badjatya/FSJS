class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  function deleteNodeAtPosition(head, position) {
    if (!head) {
      return null;
    }
  
    let current = head;
    let count = 1;
  
    while (current && count < position) {
      current = current.next;
      count++;
    }
  
    if (!current) {
      return head;
    }
  
    if (current === head) {
      head = current.next;
      if (head) {
        head.prev = null;
      }
    } else {
      current.prev.next = current.next;
      if (current.next) {
        current.next.prev = current.prev;
      }
    }
  
    return head;
  }
  