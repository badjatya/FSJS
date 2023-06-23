function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // Sort intervals based on start time
    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = merged[merged.length - 1];
        const nextInterval = intervals[i];

        if (currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            merged.push(nextInterval);
        }
    }

    return merged;
}
const intervals1 = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];
const result1 = mergeIntervals(intervals1);
console.log(result1);
// Output: [[1, 6], [8, 10], [15, 18]]

const intervals2 = [
    [1, 4],
    [4, 5],
];
const result2 = mergeIntervals(intervals2);
console.log(result2);
// Output: [[1, 5]]
