class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function findDistance(root, node1, node2) {
  function findLCA(node, key1, key2) {
    if (node === null) return null;

    if (node.val > key1 && node.val > key2) {
      return findLCA(node.left, key1, key2);
    } else if (node.val < key1 && node.val < key2) {
      return findLCA(node.right, key1, key2);
    } else {
      return node;
    }
  }

  function findLevel(node, key, level) {
    if (node === null) return -1;

    if (node.val === key) return level;

    const leftLevel = findLevel(node.left, key, level + 1);
    if (leftLevel !== -1) return leftLevel;

    const rightLevel = findLevel(node.right, key, level + 1);
    return rightLevel;
  }

  function findDistanceBetweenKeys(root, key1, key2) {
    const lca = findLCA(root, key1, key2);
    const level1 = findLevel(lca, key1, 0);
    const level2 = findLevel(lca, key2, 0);

    return level1 + level2;
  }

  return findDistanceBetweenKeys(root, node1, node2);
}

// Test case 1
const root1 = new TreeNode(8);
root1.left = new TreeNode(3);
root1.right = new TreeNode(10);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(6);
root1.left.right.left = new TreeNode(4);
root1.left.right.right = new TreeNode(7);
root1.right.right = new TreeNode(14);
root1.right.right.left = new TreeNode(13);
console.log(findDistance(root1, 6, 14)); // Output: 4

// Test case 2
const root2 = new TreeNode(8);
root2.left = new TreeNode(3);
root2.right = new TreeNode(10);
root2.left.left = new TreeNode(1);
root2.left.right = new TreeNode(6);
root2.left.right.left = new TreeNode(4);
root2.left.right.right = new TreeNode(7);
root2.right.right = new TreeNode(14);
root2.right.right.left = new TreeNode(13);
console.log(findDistance(root2, 3, 4)); // Output: 2
