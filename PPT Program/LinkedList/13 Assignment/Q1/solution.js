class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function createNewList(list1, list2) {
    if (!list1 || !list2) {
      return null;
    }
  
    let head = null;
    let tail = null;
  
    let current1 = list1;
    let current2 = list2;
  
    while (current1 && current2) {
      let newNode = null;
  
      if (current1.value >= current2.value) {
        newNode = new Node(current1.value);
        current1 = current1.next;
      } else {
        newNode = new Node(current2.value);
        current2 = current2.next;
      }
  
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    if (current1) {
      tail.next = current1;
    } else if (current2) {
      tail.next = current2;
    }
  
    return head;
  }
  