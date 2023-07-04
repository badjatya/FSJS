class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printBottomView(root) {
  if (!root) {
    return;
  }

  const map = {};
  const queue = [];
  queue.push({ node: root, hd: 0 });

  while (queue.length > 0) {
    const { node, hd } = queue.shift();

    map[hd] = node;

    if (node.left) {
      queue.push({ node: node.left, hd: hd - 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }

  for (const hd in map) {
    console.log(map[hd].data);
  }
}

const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

printBottomView(root);
