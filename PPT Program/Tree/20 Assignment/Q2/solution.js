class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function constructBST(levelOrder) {
    if (levelOrder.length === 0) return null;
  
    const root = new TreeNode(levelOrder[0]);
    const queue = [root];
    let i = 1;
  
    while (i < levelOrder.length) {
      const node = queue.shift();
  
      const leftVal = levelOrder[i++];
      if (leftVal !== null) {
        node.left = new TreeNode(leftVal);
        queue.push(node.left);
      }
  
      if (i < levelOrder.length) {
        const rightVal = levelOrder[i++];
        if (rightVal !== null) {
          node.right = new TreeNode(rightVal);
          queue.push(node.right);
        }
      }
    }
  
    return root;
  }
  

const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const root = constructBST(levelOrder);
 
  