class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function printLeftView(root) {
    if (!root) {
        return;
    }

    let queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            // Print the first node of each level (leftmost node)
            if (i === 0) {
                console.log(currentNode.val);
            }

            // Add the left and right child of the current node to the queue
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }
}
// Create the binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Print the left view of the binary tree
console.log("Left View of the Binary Tree:");
printLeftView(root);
