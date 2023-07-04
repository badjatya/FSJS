class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printRightView(root) {
  if (!root) {
    return;
  }

  const queue = [];
  queue.push({ node: root, level: 0 });

  let currentLevel = -1;

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (level > currentLevel) {
      console.log(node.data);
      currentLevel = level;
    }

    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.right = new Node(8);

printRightView(root);
