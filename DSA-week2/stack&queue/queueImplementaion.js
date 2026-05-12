// Using Array


class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }

        return this.items.shift()
    }

    front() {
        if (this.isEmpty()) {
            return null
        }

        return this.items[0]
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

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()

console.log("Front:", queue.front())

console.log("Removed:", queue.dequeue())

queue.print()






// Using Object



class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.rearIndex = 0
    }

    enqueue(element) {
        this.items[this.rearIndex] = element
        this.rearIndex++
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }

        const item = this.items[this.frontIndex]

        delete this.items[this.frontIndex]

        this.frontIndex++

        return item
    }

    front() {
        return this.items[this.frontIndex]
    }

    isEmpty() {
        return this.rearIndex - this.frontIndex === 0
    }

    size() {
        return this.rearIndex - this.frontIndex
    }

    print() {
        console.log(this.items)
    }
}





// Using linkedList


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value) {
        const node = new Node(value)

        if (!this.front) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = node
        }

        this.size++
    }

    dequeue() {
        if (!this.front) {
            return null
        }

        const removed = this.front

        this.front = this.front.next

        if (!this.front) {
            this.rear = null
        }

        this.size--

        return removed.value
    }

    peek() {
        return this.front ? this.front.value : null
    }

    print() {
        let curr = this.front

        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
    }
}






// circularQueue



class CircularQueue {
    constructor(capacity) {
        this.item = new Array(capacity);
        this.capacity = capacity;
        this.currentlength = 0;
        this.rear = -1;
        this.front = 0;
    }

    isFull() {
        return this.currentlength === this.capacity;
    }

    isEmpty() {
        return this.currentlength === 0;
    }

    enqueue(element)
           {
	        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.item[this.rear] = element;
        this.currentlength += 1;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const items = this.item[this.front];
        this.item[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        this.currentlength -= 1;
        return items;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.item[this.front];
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
        } else {
            let str = "";
            let i = this.front;
            let count = 0;
            while (count < this.currentlength) {
                str += this.item[i] + " ";
                i = (i + 1) % this.capacity;
                count++;
            }
            console.log(str.trim());
        }
    }
}

const queue = new CircularQueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();  // Output: 10 20 30 40



