class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.random = null;
    }
  }
  
  function copySpecialLinkedList(head) {
    if (!head) {
      return null;
    }
  
    // Step 1: Create a copy of each node and insert it next to the original node
    let curr = head;
    while (curr) {
      let copy = new Node(curr.data);
      copy.next = curr.next;
      curr.next = copy;
      curr = copy.next;
    }
  
    // Step 2: Assign random pointers to the copied nodes
    curr = head;
    while (curr) {
      if (curr.random) {
        curr.next.random = curr.random.next;
      }
      curr = curr.next.next;
    }
  
    // Step 3: Separate the original and copied nodes into two separate lists
    let original = head;
    let copy = head.next;
    let newHead = copy;
  
    while (original) {
      original.next = original.next.next;
      copy.next = copy.next ? copy.next.next : null;
      original = original.next;
      copy = copy.next;
    }
  
    return newHead;
  }
  