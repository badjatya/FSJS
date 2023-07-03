// Binary Tree Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to flip the binary tree clockwise
function flipBinaryTree(root) {
    // Base case: if the root is null or it is a leaf node
    if (root === null || (root.left === null && root.right === null)) {
        return root;
    }

    // Recursively flip the left and right subtrees
    let flippedLeft = flipBinaryTree(root.left);
    let flippedRight = flipBinaryTree(root.right);

    // Flip the current root node
    root.left = flippedRight;
    root.right = flippedLeft;

    return root;
}

// Function to print the flipped binary tree using inorder traversal
function printFlippedBinaryTree(root) {
    if (root) {
        printFlippedBinaryTree(root.left);
        console.log(root.data);
        printFlippedBinaryTree(root.right);
    }
}

// Create a sample Binary Tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Original Binary Tree:");
printFlippedBinaryTree(root);

// Flip the binary tree clockwise
const flippedRoot = flipBinaryTree(root);

console.log("Flipped Binary Tree:");
printFlippedBinaryTree(flippedRoot);
