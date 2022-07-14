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
}

module.exports = Node;
