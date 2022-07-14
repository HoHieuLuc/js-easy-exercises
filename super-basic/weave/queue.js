// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
    }

    remove() {
        return this.data.shift();
    }

    peek() {
        return this.data[0];
    }
}

module.exports = Queue;
