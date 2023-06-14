class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const detectLoop = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};

// Function to create a linked list with a loop
const createLinkedListWithLoop = function(nodes, position) {
    if (nodes === 0) return null;

    const head = new Node(1);
    let current = head;

    let loopNode = null;

    for (let i = 2; i <= nodes; i++) {
        current.next = new Node(i);
        current = current.next;

        if (i === position) {
            loopNode = current;
        }
    }

    current.next = loopNode; // Creating the loop

    return head;
};

// Test case 1
const nodes1 = 3;
const position1 = 2;
const linkedList1 = createLinkedListWithLoop(nodes1, position1);
const result1 = detectLoop(linkedList1);
console.log(result1); // Output: true

// Test case 2
const nodes2 = 4;
const position2 = 0;
const linkedList2 = createLinkedListWithLoop(nodes2, position2);
const result2 = detectLoop(linkedList2);
console.log(result2); // Output: false
