class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function constructTree(inorder, preorder) {
  if (!inorder.length || !preorder.length) {
    return null;
  }

  const rootData = preorder[0];
  const root = new Node(rootData);

  const rootIndex = inorder.indexOf(rootData);

  const inorderLeft = inorder.slice(0, rootIndex);
  const inorderRight = inorder.slice(rootIndex + 1);

  const preorderLeft = preorder.slice(1, rootIndex + 1);
  const preorderRight = preorder.slice(rootIndex + 1);

  root.left = constructTree(inorderLeft, preorderLeft);
  root.right = constructTree(inorderRight, preorderRight);

  return root;
}

function comparePostorder(root, postorder, index) {
  if (!root && index === postorder.length) {
    return true;
  }

  if (!root || index === postorder.length) {
    return false;
  }

  if (
    comparePostorder(root.left, postorder, index) &&
    comparePostorder(root.right, postorder, index) &&
    root.data === postorder[index]
  ) {
    return true;
  }

  return false;
}

function checkSameTree(inorder, preorder, postorder) {
  const root = constructTree(inorder, preorder);
  return comparePostorder(root, postorder, 0);
}

const inorder = [4, 2, 5, 1, 3];
const preorder = [1, 2, 4, 5, 3];
const postorder = [4, 5, 2, 3, 1];

console.log(checkSameTree(inorder, preorder, postorder)); // Output: true

const inorder2 = [4, 2, 5, 1, 3];
const preorder2 = [1, 5, 4, 2, 3];
const postorder2 = [4, 1, 2, 3, 5];

console.log(checkSameTree(inorder2, preorder2, postorder2)); // Output: false
