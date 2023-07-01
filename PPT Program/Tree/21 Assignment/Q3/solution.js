class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class DoublyLinkedListNode {
  constructor(val) {
    this.val = val;
    this.prev = this.next = null;
  }
}

function convertToDoublyLinkedList(root) {
  if (root === null) return null;

  let prev = null;
  let head = null;

  function inorderTraversal(node) {
    if (node === null) return;

    inorderTraversal(node.left);

    const currentNode = new DoublyLinkedListNode(node.val);
    if (prev !== null) {
      prev.next = currentNode;
      currentNode.prev = prev;
    } else {
      head = currentNode;
    }

    prev = currentNode;

    inorderTraversal(node.right);
  }

  inorderTraversal(root);

  return head;
}

// Test case
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(35);

const doublyLinkedListHead = convertToDoublyLinkedList(root);

// Print the doubly linked list
let current = doublyLinkedListHead;
let result = '';
while (current !== null) {
  result += current.val + ' ';
  current = current.next;
}
console.log(result); // Output: 5 10 30 20 35
