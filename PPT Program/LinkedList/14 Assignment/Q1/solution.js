class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (slow !== fast) {
    return head;
  }

  slow = head;

  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = null;

  return head;
}
