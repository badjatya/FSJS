// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const printPrimeNumbers = () => {
    const start = 0;
    const end = 100;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
};

printPrimeNumbers();
