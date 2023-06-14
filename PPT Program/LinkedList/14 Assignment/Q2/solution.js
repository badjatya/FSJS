class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function addOne(head) {
  let curr = reverseList(head);
  let carry = 1;

  while (curr) {
    let sum = curr.data + carry;
    carry = Math.floor(sum / 10);
    curr.data = sum % 10;

    if (carry === 0) {
      break;
    }

    if (!curr.next) {
      curr.next = new Node(0);
    }

    curr = curr.next;
  }

  return reverseList(head);
}

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
