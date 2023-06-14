class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
function mergeSortedLists(a, b) {
  if (!a) {
    return b;
  }
  if (!b) {
    return a;
  }

  let dummy = new Node(0);
  let current = dummy;

  while (a && b) {
    if (a.value <= b.value) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }

  if (a) {
    current.next = a;
  }
  if (b) {
    current.next = b;
  }

  return dummy.next;
}
