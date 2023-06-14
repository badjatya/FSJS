class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeZeroSumSublists(head) {
  if (!head) {
    return null;
  }

  const dummy = new ListNode(0);
  dummy.next = head;
  let curr = dummy;
  let sum = 0;
  const prefixSums = new Map();

  while (curr) {
    sum += curr.val;

    if (prefixSums.has(sum)) {
      let prev = prefixSums.get(sum).next;
      let tempSum = sum;

      while (prev !== curr) {
        tempSum += prev.val;
        prefixSums.delete(tempSum);
        prev = prev.next;
      }

      prefixSums.get(sum).next = curr.next;
    } else {
      prefixSums.set(sum, curr);
    }

    curr = curr.next;
  }

  return dummy.next;
}
