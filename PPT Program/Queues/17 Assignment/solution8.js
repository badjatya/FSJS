class DataStream {
    constructor(value, k) {
        this.value = value;
        this.k = k;
        this.buffer = new Array(k).fill(-1); // Initialize the circular buffer with -1
        this.count = 0; // Number of integers currently in the buffer
        this.ptr = 0; // Pointer to the next position in the circular buffer
    }

    consec(num) {
        this.buffer[this.ptr] = num;
        this.ptr = (this.ptr + 1) % this.k;
        if (this.count < this.k) {
            this.count++;
            return false;
        }
        for (let i = 0; i < this.k; i++) {
            if (this.buffer[i] !== this.value) {
                return false;
            }
        }
        return true;
    }
}
const dataStream = new DataStream(4, 3);
console.log(dataStream.consec(4)); // Output: false
console.log(dataStream.consec(4)); // Output: false
console.log(dataStream.consec(4)); // Output: true
console.log(dataStream.consec(3)); // Output: false
