class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  function reverseDoublyLinkedList(head) {
    if (!head) {
      return null;
    }
  
    let current = head;
    let temp = null;
  
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
  
    if (temp) {
      head = temp.prev;
    }
  
    return head;
  }
  