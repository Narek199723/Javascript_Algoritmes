// !  What is a tree?
// * A data structure that consists of nodes in a parent/child relationship

// *  Binary Tree has to have not more than 2 children, it can have 0 or 1 or 2 children not more

// *  Binary Search trees are special case of a binary tree. Except having not more than 2 children binary search trees are sorted in a particular way they are kept in order.So BST(Binary Search Trees) are used to store the data that can be compared that is sortable. It could be kind any of data usually strings,numbers.

// ^ How BST work
// * Every parent node has at most two children
// * Every node to the left of a parent node is always less than the patient
// * Every node to the right of a parent node is always greater than the parent

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) {
                    return undefined;
                }
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(num) {
        if (this.root === null) {
            return false;
        }
        if (num === this.root) {
            console.log("This is the number: ", num);
        }
        let current = this.root;
        let found = false;

        while (current && !found) {
            if (num < current.value) {
                current = current.left;
            } else if (num > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(3);
tree.insert(2);
tree.insert(20);
tree.insert(21);
tree.insert(1);
console.log(tree);

tree.find(1);
console.log(tree.find(1));
console.log(tree.find(133));
