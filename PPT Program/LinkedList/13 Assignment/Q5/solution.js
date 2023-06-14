class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function deleteLastOccurrence(head, key) {
    if (!head) {
      return null;
    }
  
    let current = head;
    let prev = null;
    let lastOccurrence = null;
    let lastOccurrencePrev = null;
  
    while (current) {
      if (current.value === key) {
        lastOccurrence = current;
        lastOccurrencePrev = prev;
      }
      prev = current;
      current = current.next;
    }
  
    if (lastOccurrence) {
      if (lastOccurrencePrev) {
        lastOccurrencePrev.next = lastOccurrence.next;
      } else {
        head = lastOccurrence.next;
      }
    }
  
    return head;
  }
  