class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

function str2tree(s) {
  if(s === '') {
      return null;
  }
  let i = 0;
  while(i < s.length && s[i] !== '(') {
      i++;
  }
  let root = new TreeNode(parseInt(s.substring(0,i)));
  let j = i; let count = 0;
  for(; j<s.length; j++) {
      if(s[j] === '(') {
          count++;
      } else if(s[j] === ')') {
          count--;
      }
      if(count === 0) {
          break;
      }
  }
  root.left = str2tree(s.substring(i+1,j));
  root.right = str2tree(s.substring(j+2, s.length-1));
  return root;
};

function inorderTraversal(root) {
  let res = [];
  function traverse(node) {
      if(node === null) {
          return;
      }
      traverse(node.left);
      res.push(node.val);
      traverse(node.right);
  }
  traverse(root);
  return res;
}

let s = "4(2(3)(1))(6(5))";
let root = str2tree(s);
let inorder = inorderTraversal(root);

console.log(inorder); // [3,2,1,4,5,6]