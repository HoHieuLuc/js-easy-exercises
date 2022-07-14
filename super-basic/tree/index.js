// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
        
    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        const indexOfData = this.children.findIndex(child => child.data === data);
        if (indexOfData === -1) {
            return;
        }
        this.children.splice(indexOfData, 1);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        // transverse the tree breadth first
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            queue.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        // transverse the tree depth first
        const stack = [this.root];
        while (stack.length) {
            const node = stack.shift();
            stack.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = { Tree, Node };
