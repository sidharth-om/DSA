class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const root = new Node(10)

root.left = new Node(20)
root.right = new Node(30)

root.left.left = new Node(40)

console.log(root)