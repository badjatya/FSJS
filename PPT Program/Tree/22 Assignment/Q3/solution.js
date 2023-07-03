class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printRootToLeafPaths(root) {
  if (!root) {
    return;
  }

  const stack = [];
  stack.push({ node: root, path: "" });

  while (stack.length > 0) {
    const { node, path } = stack.pop();

    const currentPath = path + node.data;

    if (!node.left && !node.right) {
      console.log(currentPath);
    }

    if (node.right) {
      stack.push({ node: node.right, path: currentPath + "->" });
    }

    if (node.left) {
      stack.push({ node: node.left, path: currentPath + "->" });
    }
  }
}

const root = new Node(6);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.right = new Node(4);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

printRootToLeafPaths(root);
