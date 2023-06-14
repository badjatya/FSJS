function removeLoop(head) {
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        break;
      }
    }
  
    if (!fast || !fast.next) {
      return false;
    }
  
    slow = head;
  
    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
  
    fast.next = null;
  
    return true;
  }  