const mySqrt = function(x) {
    let left = 0;
    let right = Math.floor(x / 2) + 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        
        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
};

const x = 4;
const result = mySqrt(x);
console.log(result);
