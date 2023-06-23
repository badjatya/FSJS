class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap();

    // Push the first node of each linked list into the min heap
    for (const list of lists) {
        if (list) {
            minHeap.push(list);
        }
    }

    const dummy = new ListNode();
    let curr = dummy;

    while (!minHeap.isEmpty()) {
        const node = minHeap.pop();
        curr.next = node;
        curr = curr.next;

        if (node.next) {
            minHeap.push(node.next);
        }
    }

    curr.next = null;

    return dummy.next;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const lastIdx = this.heap.length - 1;
        this.swap(0, lastIdx);
        const popped = this.heap.pop();
        this.heapifyDown(0);

        return popped;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp(idx) {
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx].val > this.heap[idx].val) {
                this.swap(parentIdx, idx);
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    heapifyDown(idx) {
        const lastIdx = this.heap.length - 1;

        while (true) {
            let smallestIdx = idx;
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;

            if (
                leftChildIdx <= lastIdx &&
                this.heap[leftChildIdx].val < this.heap[smallestIdx].val
            ) {
                smallestIdx = leftChildIdx;
            }

            if (
                rightChildIdx <= lastIdx &&
                this.heap[rightChildIdx].val < this.heap[smallestIdx].val
            ) {
                smallestIdx = rightChildIdx;
            }

            if (smallestIdx !== idx) {
                this.swap(smallestIdx, idx);
                idx = smallestIdx;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

function createLinkedList(arr) {
    const dummy = new ListNode();
    let curr = dummy;
    for (const val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

function LinkedListToArray(head) {
    const arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}

// Example 1
const lists1 = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6]),
];
console.log(LinkedListToArray(mergeKLists(lists1))); // Output: [1, 1, 2, 3, 4, 4, 5, 6]

// Example 2
const lists2 = [];
console.log(LinkedListToArray(mergeKLists(lists2))); // Output: []

// Example 3
const lists3 = [[]];
console.log(LinkedListToArray(mergeKLists(lists3))); // Output: []
