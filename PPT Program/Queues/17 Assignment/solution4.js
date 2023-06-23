class RecentCounter {
    constructor() {
        this.queue = [];
    }

    ping(t) {
        this.queue.push(t); // Add the new request to the queue

        while (this.queue[0] < t - 3000) {
            // Remove requests outside the time frame
            this.queue.shift();
        }

        return this.queue.length; // Return the number of requests within the time frame
    }
}

// Example usage:
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1)); // Output: 1
console.log(recentCounter.ping(100)); // Output: 2
console.log(recentCounter.ping(3001)); // Output: 3
console.log(recentCounter.ping(3002)); // Output: 3
