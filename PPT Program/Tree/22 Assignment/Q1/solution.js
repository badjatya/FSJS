// Binary Tree Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Helper function to perform inorder traversal of the binary tree
function inorder(root) {
    if (root) {
        inorder(root.left);
        console.log(root.data);
        inorder(root.right);
    }
}

// Function to convert Binary Tree to Doubly Linked List
function convertToDLL(root) {
    if (!root) return null;

    // Initialize previous pointer as null
    let prev = null;

    // Convert left subtree
    let left = convertToDLL(root.left);

    // If left subtree is not empty, link the rightmost node of left subtree with the root
    if (left) {
        while (left.right) {
            left = left.right;
        }
        left.right = root;
        root.left = left;
    }

    // Convert right subtree
    let right = convertToDLL(root.right);

    // If right subtree is not empty, link the leftmost node of right subtree with the root
    if (right) {
        while (right.left) {
            right = right.left;
        }
        right.left = root;
        root.right = right;
    }

    // Return the head of the Doubly Linked List
    return left ? left : root;
}

// Create a sample Binary Tree
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(30);

// Convert Binary Tree to Doubly Linked List
const head = convertToDLL(root);

// Traverse the Doubly Linked List
let current = head;
while (current) {
    console.log(current.data);
    current = current.right;
}
