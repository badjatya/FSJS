function isLinkedListPalindrome(head) {
    if (!head || !head.next) {
      return true;
    }
  
    let slow = head;
    let fast = head;
    let prev = null;
  
    while (fast && fast.next) {
      fast = fast.next.next;
      let temp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
    }
  
    if (fast) {
      slow = slow.next;
    }
  
    while (slow) {
      if (slow.value !== prev.value) {
        return false;
      }
      slow = slow.next;
      prev = prev.next;
    }
  
    return true;
  }
  