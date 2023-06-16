function findNearestSmallerNumbers(n, a) {
    let stack = [];
    let result = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
            stack.pop();
        }
        
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }

        stack.push(a[i]);
    }

    return result;
}

console.log(findNearestSmallerNumbers(3, [1, 6, 2])); 
console.log(findNearestSmallerNumbers(6, [1, 5, 0, 3, 4, 5])); 
