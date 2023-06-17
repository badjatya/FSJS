const ListNode = (val) => {
    this.val = val;
    this.next = null;
};

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1,
        q = l2,
        current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        const x = p !== null ? p.val : 0;
        const y = q !== null ? q.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let result = addTwoNumbers(l1, l2);
console.log(result);
// Output: ListNode { val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } } }
