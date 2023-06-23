const findTheWinner = (n, k) => {
    // Create an array representing the friends in the circle
    const friends = Array.from({ length: n }, (_, i) => i + 1);

    let current = 0; // Start at the 1st friend

    while (friends.length > 1) {
        current = (current + k - 1) % friends.length; // Count k friends in the clockwise direction

        friends.splice(current, 1); // Remove the friend who loses
    }

    return friends[0]; // Return the winner
};

// Example usage:
console.log(findTheWinner(5, 2)); // Output: 3
console.log(findTheWinner(6, 5)); // Output: 1
