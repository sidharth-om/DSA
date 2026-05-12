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

    findClosest(target) {

        let current = this.root

        let closest = current.value

        while (current) {

            // Update closest
            if (
                Math.abs(target - current.value) <
                Math.abs(target - closest)
            ) {
                closest = current.value
            }

            // Move left or right
            if (target < current.value) {

                current = current.left

            } else if (target > current.value) {

                current = current.right

            } else {

                return current.value
            }
        }

        return closest
    }
}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(12)
bst.insert(20)

console.log(bst.findClosest(13))






// Recursive Version



// findClosest(root, target, closest = root.value) {

//     if (!root) {
//         return closest
//     }

//     if (
//         Math.abs(target - root.value) <
//         Math.abs(target - closest)
//     ) {
//         closest = root.value
//     }

//     if (target < root.value) {

//         return this.findClosest(root.left, target, closest)

//     } else if (target > root.value) {

//         return this.findClosest(root.right, target, closest)

//     } else {

//         return root.value
//     }
// }