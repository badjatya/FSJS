function maxSubarraySumCircular(nums) {
    const maxSum = kadane(nums);
    const circularMaxSum = sum(nums) + kadaneInverted(nums);

    if (circularMaxSum === 0) {
        // If the circular sum is 0, it means all elements are negative.
        // In this case, return the maximum element as the result.
        return Math.max(...nums);
    }

    return Math.max(maxSum, circularMaxSum);
}

// Kadane's algorithm to find the maximum subarray sum in a linear array
function kadane(arr) {
    let maxSoFar = 0;
    let maxEndingHere = 0;

    for (let i = 0; i < arr.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + arr[i], 0);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Kadane's algorithm to find the minimum subarray sum in an inverted array
function kadaneInverted(arr) {
    let minSoFar = 0;
    let minEndingHere = 0;

    for (let i = 0; i < arr.length; i++) {
        minEndingHere = Math.min(minEndingHere + arr[i], 0);
        minSoFar = Math.min(minSoFar, minEndingHere);
    }

    return minSoFar;
}

// Helper function to calculate the sum of an array
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Example usage:
console.log(maxSubarraySumCircular([1, -2, 3, -2])); // Output: 3
console.log(maxSubarraySumCircular([5, -3, 5])); // Output: 10
