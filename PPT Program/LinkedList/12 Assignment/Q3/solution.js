class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const getNthFromEnd = function(head, n) {
    if (head === null) {
        return -1;
    }

    let slow = head;
    let fast = head;

    for (let i = 0; i < n; i++) {
        if (fast === null) {
            return -1;
        }
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow.data;
};

const createLinkedList = function(arr) {
    if (arr.length === 0) return null;

    const head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const linkedList1 = createLinkedList(arr1);
const n1 = 2;
const result1 = getNthFromEnd(linkedList1, n1);
console.log(result1);

const arr2 = [10, 5, 100, 5];
const linkedList2 = createLinkedList(arr2);
const n2 = 5;
const result2 = getNthFromEnd(linkedList2, n2);
console.log(result2);
