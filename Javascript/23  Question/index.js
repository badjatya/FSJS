// 23. Write a program to check that the number given by the user is a prime number or not.

const isPrime = (number) => {
    if (number <= 1) {
        console.log(number + " is not a prime number.");
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(number + " is not a prime number.");
            return;
        }
    }

    console.log(number + " is a prime number.");
    return;
};

isPrime(5);
