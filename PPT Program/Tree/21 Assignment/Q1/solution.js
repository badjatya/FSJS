class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function binaryTreeToBST(root) {
  const inorder = [];

  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    inorder.push(node.val);
    inorderTraversal(node.right);
  }

  function convertToBST(node) {
    if (node === null) return;

    convertToBST(node.left);
    node.val = inorder.shift();
    convertToBST(node.right);
  }

  inorderTraversal(root);
  convertToBST(root);

  return root;
}

const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(4);

const bstRoot = binaryTreeToBST(root);


