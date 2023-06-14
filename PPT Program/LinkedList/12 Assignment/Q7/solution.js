class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

function insertAlternate(head1, head2) {
  let curr1 = head1;
  let curr2 = head2;

  while (curr1 && curr2) {
    let temp1 = curr1.next;
    let temp2 = curr2.next;

    curr1.next = curr2;
    curr2.next = temp1;

    curr1 = temp1;
    curr2 = temp2;
  }

  head2 = null; // Empty the second list

  return head1;
}
  