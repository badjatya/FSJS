function calculateTreeDepth(preorder) {
    let depth = 0;
    let stack = [];

    for (let i = 0; i < preorder.length; i++) {
        if (preorder[i] === "n") {
            stack.push("n");
        } else if (preorder[i] === "l") {
            let currentDepth = stack.length;
            depth = Math.max(depth, currentDepth);
        } else {
            throw new Error("Invalid preorder input");
        }
    }

    return depth;
}
let preorder = "nnlllnnlll";
let treeDepth = calculateTreeDepth(preorder);
console.log("Depth:", treeDepth);
