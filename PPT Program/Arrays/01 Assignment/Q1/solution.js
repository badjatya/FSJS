// Optimized solution

const twoSum = (numbers, target) => {
    const complementMap = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];

        if (complementMap.has(complement)) {
            return [complementMap.get(complement), i];
        }

        complementMap.set(numbers[i], i);
    }

    return [];
};

// Corner case: Empty array
console.log(twoSum([], 9)); // []

// Corner case: Single element array
console.log(twoSum([9], 9)); // []

// Corner case: No pair summing up to the target
console.log(twoSum([2, 7, 11, 15], 8)); // []

// Corner case: Multiple valid pairs
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
