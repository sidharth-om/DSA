// Using array


class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.print()

console.log("Top:", stack.peek())

console.log("Removed:", stack.pop())

stack.print()




// Using linkedList


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    push(value) {
        const node = new Node(value)

        node.next = this.top
        this.top = node

        this.size++
    }

    pop() {
        if (!this.top) {
            return null
        }

        const removed = this.top
        this.top = this.top.next

        this.size--

        return removed.value
    }

    peek() {
        return this.top ? this.top.value : null
    }

    print() {
        let curr = this.top

        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
    }
}