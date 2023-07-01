class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = this.next = null;
    }
  }
  
function connectNodesAtSameLevel(root) {
  if (root === null) return;

  let levelStart = root;

  while (levelStart !== null) {
    let current = levelStart;
    let dummyNode = new TreeNode(-1);
    let prev = dummyNode;

    while (current !== null) {
      if (current.left !== null) {
        prev.next = current.left;
        prev = current.left;
      }

      if (current.right !== null) {
        prev.next = current.right;
        prev = current.right;
      }

      current = current.next;
    }

    levelStart = dummyNode.next;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

connectNodesAtSameLevel(root);

let current = root;
let result = '';

while (current !== null) {
  let levelStart = current;
  while (levelStart !== null) {
    result += levelStart.val + ' → ';
    levelStart = levelStart.next;
  }
  result += '-1\n';
  current = current.left;
}

console.log(result);
