class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    // INSERT
    insert(value) {

        const newNode = new Node(value)

        if (this.isEmpty()) {

            this.root = newNode

        } else {

            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {

        if (newNode.value < root.value) {

            if (root.left === null) {

                root.left = newNode

            } else {

                this.insertNode(root.left, newNode)
            }

        } else {

            if (root.right === null) {

                root.right = newNode

            } else {

                this.insertNode(root.right, newNode)
            }
        }
    }

    // SEARCH
    search(root, value) {

        if (!root) {
            return false
        }

        if (root.value === value) {
            return true
        }

        if (value < root.value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    // PREORDER
    preorder(root) {

        if (root) {

            console.log(root.value)

            this.preorder(root.left)

            this.preorder(root.right)
        }
    }

    // INORDER
    inorder(root) {

        if (root) {

            this.inorder(root.left)

            console.log(root.value)

            this.inorder(root.right)
        }
    }

    // POSTORDER
    postorder(root) {

        if (root) {

            this.postorder(root.left)

            this.postorder(root.right)

            console.log(root.value)
        }
    }

    // LEVEL ORDER
    levelOrder() {

        let queue = []

        queue.push(this.root)

        while (queue.length) {

            let curr = queue.shift()

            console.log(curr.value)

            if (curr.left) {
                queue.push(curr.left)
            }

            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    // MIN
    min(root) {

        if (!root.left) {
            return root.value
        }

        return this.min(root.left)
    }

    // MAX
    max(root) {

        if (!root.right) {
            return root.value
        }

        return this.max(root.right)
    }

    // DELETE
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {

        if (root === null) {
            return root
        }

        if (value < root.value) {

            root.left = this.deleteNode(root.left, value)

        } else if (value > root.value) {

            root.right = this.deleteNode(root.right, value)

        } else {

            // NO CHILD
            if (!root.left && !root.right) {
                return null
            }

            // ONE CHILD
            if (!root.left) {
                return root.right
            }

            if (!root.right) {
                return root.left
            }

            // TWO CHILDREN
            root.value = this.min(root.right)

            root.right = this.deleteNode(root.right, root.value)
        }

        return root
    }

    // HEIGHT
    height(root) {

        if (root === null) {
            return -1
        }

        let leftHeight = this.height(root.left)

        let rightHeight = this.height(root.right)

        return Math.max(leftHeight, rightHeight) + 1
    }

    // THIRD LARGEST
    thirdLargest() {

        let count = 0

        let result = null

        function reverseInorder(node) {

            if (!node || count >= 3) {
                return
            }

            reverseInorder(node.right)

            count++

            if (count === 3) {
                result = node.value
                return
            }

            reverseInorder(node.left)
        }

        reverseInorder(this.root)

        return result
    }
}

// CREATE BST
const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(12)
bst.insert(20)

// TRAVERSALS
console.log("PREORDER")
bst.preorder(bst.root)

console.log("INORDER")
bst.inorder(bst.root)

console.log("POSTORDER")
bst.postorder(bst.root)

console.log("LEVEL ORDER")
bst.levelOrder()

// MIN & MAX
console.log("MIN:", bst.min(bst.root))
console.log("MAX:", bst.max(bst.root))

// HEIGHT
console.log("HEIGHT:", bst.height(bst.root))

// THIRD LARGEST
console.log("THIRD LARGEST:", bst.thirdLargest())

// DELETE
bst.delete(15)

console.log("AFTER DELETE")
bst.inorder(bst.root)