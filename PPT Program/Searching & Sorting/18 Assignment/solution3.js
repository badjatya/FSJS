function firstBadVersion(n) {
    let left = 1;
    let right = n;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
const badVersion1 = 4;
const n1 = 5;
const result1 = firstBadVersion(n1);
console.log(result1);
// Output: 4

const badVersion2 = 1;
const n2 = 1;
const result2 = firstBadVersion(n2);
console.log(result2);
// Output: 1
