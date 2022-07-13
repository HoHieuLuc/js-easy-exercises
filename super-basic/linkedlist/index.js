// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let size = 0;
        let currentNode = this.head;
        while (currentNode) {
            size++;
            currentNode = currentNode.next;
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }

    insertLast(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            counter++;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.removeFirst();
            return;
        }

        let previousNode = this.getAt(index - 1);
        if (!previousNode || !previousNode.next) {
            return;
        }
        previousNode.next = previousNode.next.next;
    }

    insertAt(data, index) {
        if (!this.head || index === 0) {
            this.insertFirst(data);
            return;
        }

        const newNode = new Node(data);
        let previousNode = this.getAt(index - 1) || this.getLast();
        const nextNode = previousNode.next;
        // previousNode -> newNode -> nextNode
        previousNode.next = newNode;
        newNode.next = nextNode;
    }

    forEach(callback) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            callback(currentNode, index);
            currentNode = currentNode.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let currentNode = this.head;
        while (currentNode) {
            yield currentNode;
            currentNode = currentNode.next;
        }
    }
}

module.exports = { Node, LinkedList };
