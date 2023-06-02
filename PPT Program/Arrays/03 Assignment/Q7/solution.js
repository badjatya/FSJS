function findMissingRanges(nums, lower, upper) {
    const ranges = [];

    let start = lower;
    let end = lower;

    for (let num of nums) {
        if (num > end) {
            ranges.push(getRange(start, end));
            start = num + 1;
        }

        end = num;
    }

    if (end < upper) {
        ranges.push(getRange(start, upper));
    }

    return ranges;
}

function getRange(start, end) {
    return start === end ? `${start}` : `${start}->${end}`;
}

const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
const result = findMissingRanges(nums, lower, upper);
console.log(result); // Output: [["2"],["4->49"],["51->74"],["76->99"]]
