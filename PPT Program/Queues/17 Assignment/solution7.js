class FrontMiddleBackQueue {
    constructor() {
        this.front = [];
        this.back = [];
    }

    pushFront(val) {
        this.front.push(val);
        this.rebalance();
    }

    pushMiddle(val) {
        const mid = this.length() >> 1;
        if (this.front.length <= this.back.length) {
            this.front.splice(mid, 0, val);
        } else {
            this.back.splice(mid, 0, val);
        }
        this.rebalance();
    }

    pushBack(val) {
        this.back.push(val);
        this.rebalance();
    }

    popFront() {
        if (this.isEmpty()) {
            return -1;
        }
        if (this.front.length === 0) {
            this.front = this.back.reverse();
            this.back = [];
        }
        return this.front.shift();
    }

    popMiddle() {
        if (this.isEmpty()) {
            return -1;
        }
        if (this.front.length === this.back.length) {
            return this.front.pop();
        } else {
            return this.back.shift();
        }
    }

    popBack() {
        if (this.isEmpty()) {
            return -1;
        }
        if (this.back.length === 0) {
            this.back = this.front.reverse();
            this.front = [];
        }
        return this.back.pop();
    }

    length() {
        return this.front.length + this.back.length;
    }

    isEmpty() {
        return this.length() === 0;
    }

    rebalance() {
        if (this.front.length > this.back.length + 1) {
            this.back.unshift(this.front.pop());
        } else if (this.back.length > this.front.length) {
            this.front.push(this.back.shift());
        }
    }
}
const q = new FrontMiddleBackQueue();
q.pushFront(1);
q.pushBack(2);
q.pushMiddle(3);
q.pushMiddle(4);
console.log(q.popFront()); // Output: 1
console.log(q.popMiddle()); // Output: 3
console.log(q.popMiddle()); // Output: 4
console.log(q.popBack()); // Output: 2
console.log(q.popFront()); // Output: -1
