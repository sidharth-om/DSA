class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {

        const node = new Node(value)

        if (this.isEmpty()) {

            this.head = this.tail = node

        } else {

            node.next = this.head
            this.head.prev = node
            this.head = node
        }

        this.size++
    }

    append(value) {

        const node = new Node(value)

        if (this.isEmpty()) {

            this.head = this.tail = node

        } else {

            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.size++
    }

    insert(value, index) {

        if (index < 0 || index > this.size) {
            return null
        }

        if (index === 0) {

            this.prepend(value)

        } else if (index === this.size) {

            this.append(value)

        } else {

            const node = new Node(value)

            let curr = this.head

            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }

            const nextNode = curr.next

            curr.next = node
            node.prev = curr

            node.next = nextNode
            nextNode.prev = node

            this.size++
        }
    }

    removeFromFront() {

        if (this.isEmpty()) {
            console.log('list is empty')
            return null
        }

        const value = this.head.value

        if (this.head === this.tail) {

            this.head = this.tail = null

        } else {

            this.head = this.head.next
            this.head.prev = null
        }

        this.size--

        return value
    }

    removeFromEnd() {

        if (this.isEmpty()) {
            console.log('list is empty')
            return null
        }

        const value = this.tail.value

        if (this.head === this.tail) {

            this.head = this.tail = null

        } else {

            this.tail = this.tail.prev
            this.tail.next = null
        }

        this.size--

        return value
    }

    removeByIndex(index) {

        if (index < 0 || index >= this.size) {
            return null
        }

        if (index === 0) {

            return this.removeFromFront()

        } else if (index === this.size - 1) {

            return this.removeFromEnd()

        } else {

            let curr = this.head

            for (let i = 0; i < index; i++) {
                curr = curr.next
            }

            curr.prev.next = curr.next
            curr.next.prev = curr.prev

            this.size--

            return curr.value
        }
    }

    removeByValue(value) {

        if (this.isEmpty()) {
            return null
        }

        let curr = this.head

        while (curr && curr.value !== value) {
            curr = curr.next
        }

        if (!curr) {
            console.log('value not found')
            return null
        }

        if (curr === this.head) {
            return this.removeFromFront()
        }

        if (curr === this.tail) {
            return this.removeFromEnd()
        }

        curr.prev.next = curr.next
        curr.next.prev = curr.prev

        this.size--

        return curr.value
    }

    search(value) {

        let curr = this.head
        let index = 0

        while (curr) {

            if (curr.value === value) {
                return index
            }

            curr = curr.next
            index++
        }

        return -1
    }

    reverse() {

        if (this.isEmpty()) {
            return null
        }

        let curr = this.head
        let temp = null

        while (curr) {

            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp

            curr = curr.prev
        }

        temp = this.head
        this.head = this.tail
        this.tail = temp
    }

    fromArray(arr) {

        if (arr.length === 0) {
            return null
        }

        this.head = null
        this.tail = null
        this.size = 0

        for (let value of arr) {
            this.append(value)
        }
    }

    removeDuplicates() {

        if (this.isEmpty()) {
            return null
        }

        let seen = new Set()
        let curr = this.head

        while (curr) {

            if (seen.has(curr.value)) {

                if (curr === this.tail) {

                    this.tail = curr.prev
                    this.tail.next = null

                } else {

                    curr.prev.next = curr.next
                    curr.next.prev = curr.prev
                }

                this.size--

            } else {

                seen.add(curr.value)
            }

            curr = curr.next
        }
    }

    print() {

        if (this.isEmpty()) {
            console.log('list is empty')
            return
        }

        let curr = this.head
        let listValues = ''

        while (curr) {

            listValues += `${curr.value} `
            curr = curr.next
        }

        console.log(listValues)
    }

    printReverse() {

        if (this.isEmpty()) {
            console.log('list is empty')
            return
        }

        let curr = this.tail
        let listValues = ''

        while (curr) {

            listValues += `${curr.value} `
            curr = curr.prev
        }

        console.log(listValues)
    }
}


const list = new DoublyLinkedList()

list.fromArray([10, 20, 30, 20, 40, 10])

console.log('Original:')
list.print()

console.log('Reverse Print:')
list.printReverse()

console.log('Search 30:', list.search(30))

list.insert(25, 2)

console.log('After Insert:')
list.print()

list.removeByIndex(3)

console.log('After removeByIndex:')
list.print()

list.removeByValue(40)

console.log('After removeByValue:')
list.print()

list.removeDuplicates()

console.log('After removeDuplicates:')
list.print()

list.reverse()

console.log('After Reverse:')
list.print()