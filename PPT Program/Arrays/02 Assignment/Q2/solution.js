function eatCandies(candyType) {
    const counts = new Map();
    for (const candy of candyType) {
        counts.set(candy, counts.get(candy) || 0) + 1;
    }
    let maxCount = 0;
    for (const [candy, count] of counts.entries()) {
        if (count >= candyType.length / 2) {
            maxCount++;
        }
    }
    return maxCount;
}

const candyType = [1, 1, 2, 2, 3, 3];
const numCandies = eatCandies(candyType);
console.log(numCandies); // 3
