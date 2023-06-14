class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  
function skipMDeleteN(head, M, N) {
  let current = head;

  while (current) {
    let mCount = 1;
    let nCount = 0;

    while (current && mCount < M) {
      current = current.next;
      mCount++;
    }

    if (!current) {
      return head;
    }

    let temp = current.next;

    while (temp && nCount < N) {
      temp = temp.next;
      nCount++;
    }

    current.next = temp;
    current = temp;
  }

  return head;
}
  