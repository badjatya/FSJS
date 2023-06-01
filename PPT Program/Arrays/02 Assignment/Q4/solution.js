function canPlaceFlowers(flowerbed, n) {
    if (flowerbed.length < n) {
        return false;
    }

    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            count++;
        } else {
            count = 0;
        }

        if (count === n) {
            return true;
        }
    }
    return false;
}

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const canPlant = canPlaceFlowers(flowerbed, n);
console.log(canPlant); // true
