class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.bottom = null;
  }
}

function flattenLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  head.next = flattenLinkedList(head.next);

  head = merge(head, head.next);

  return head;
}

function merge(a, b) {
  if (!a) return b;
  if (!b) return a;

  let result;

  if (a.data < b.data) {
    result = a;
    result.bottom = merge(a.bottom, b);
  } else {
    result = b;
    result.bottom = merge(a, b.bottom);
  }

  return result;
}
