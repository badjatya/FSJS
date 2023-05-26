// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

const middleIndex = Math.floor(sortedAges.length / 2);
const medianAge =
    sortedAges.length % 2 === 0
        ? (sortedAges[middleIndex] + sortedAges[middleIndex - 1]) / 2
        : sortedAges[middleIndex];

const sum = sortedAges.reduce((acc, age) => acc + age, 0);
const averageAge = sum / sortedAges.length;

const ageRange = maxAge - minAge;

const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", sortedAges);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Age Range:", ageRange);
console.log("Difference (Min - Average):", diffMinAvg);
console.log("Difference (Max - Average):", diffMaxAvg);
