class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    shift() {
        return this.data.shift();
    }

    getFirst() {
        return this.data[0];
    }
}

module.exports = Stack;
