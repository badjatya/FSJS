class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function oddEvenLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let oddHead = head;
  let evenHead = head.next;
  let odd = oddHead;
  let even = evenHead;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return oddHead;
}
