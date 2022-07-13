// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (data < this.data) {
            if (!this.left) {
                this.left = newNode;
            } else {
                this.left.insert(data);
            }
        } else {
            if (!this.right) {
                this.right = newNode;
            } else {
                this.right.insert(data);
            }
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        } else {
            if (this.data < data && this.right) {
                return this.right.contains(data);
            }
            if (this.data >= data && this.left) {
                return this.left.contains(data);
            }
            return null;
        }
    }
}

module.exports = Node;
