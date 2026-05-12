// Recursive Validation Code



class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {

    constructor() {
        this.root = null
    }

    insert(value) {

        const newNode = new Node(value)

        if (!this.root) {

            this.root = newNode

        } else {

            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {

        if (newNode.value < root.value) {

            if (!root.left) {

                root.left = newNode

            } else {

                this.insertNode(root.left, newNode)
            }

        } else {

            if (!root.right) {

                root.right = newNode

            } else {

                this.insertNode(root.right, newNode)
            }
        }
    }

    isBST(root, min = -Infinity, max = Infinity) {

        if (root === null) {
            return true
        }

        // Check BST condition
        if (root.value <= min || root.value >= max) {
            return false
        }

        return (
            this.isBST(root.left, min, root.value) &&
            this.isBST(root.right, root.value, max)
        )
    }
}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.isBST(bst.root))










// Alternative Method (Inorder Traversal)


// isBST(root) {

//     let arr = []

//     function inorder(node) {

//         if (node) {

//             inorder(node.left)

//             arr.push(node.value)

//             inorder(node.right)
//         }
//     }

//     inorder(root)

//     for (let i = 1; i < arr.length; i++) {

//         if (arr[i] <= arr[i - 1]) {
//             return false
//         }
//     }

//     return true
// }