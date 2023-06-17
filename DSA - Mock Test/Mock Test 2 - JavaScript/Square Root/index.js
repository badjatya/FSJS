const mySqrt = (x) => {
    if (x === 0) {
        return 0;
    }

    let left = 1,
        right = x;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (mid * mid > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left - 1;
};

console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
