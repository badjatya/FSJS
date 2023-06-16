function findNextGreaterElements(N, arr) {
    let stack = [];
    let result = [];

    for (let i = N - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        
        if (stack.length === 0) {
            result.unshift(-1);
        } else {
            result.unshift(stack[stack.length - 1]);
        }

        stack.push(arr[i]);
    }

    return result;
}

console.log(findNextGreaterElements(4, [1, 3, 2, 4])); 
console.log(findNextGreaterElements(5, [6, 8, 0, 1, 3])); 
