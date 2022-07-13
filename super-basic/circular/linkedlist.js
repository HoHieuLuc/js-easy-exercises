class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(values = []) {
        this.head = null;

        for (let value of values) {
            this.insertLast(value);
        }
    }

    clear() {

    }

    size() {

    }

    getAt(index) {

    }

    insertAt(data, index) {

    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {

    }

    removeAt(index) {

    }

    getFirst() {

    }

    insertFirst(data) {
      
    }

    getLast() {

    }

    insertLast(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }

    forEach(fn) {
        
    }

    *[Symbol.iterator]() {

    }
}

module.exports = { Node, LinkedList };
