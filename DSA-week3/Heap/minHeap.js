class MinHeap {

    constructor() {
        this.heap = []
    }

    // INSERT
    insert(value) {

        this.heap.push(value)

        this.heapifyUp()
    }

    heapifyUp() {

        let index = this.heap.length - 1

        while (index > 0) {

            let parentIndex = Math.floor((index - 1) / 2)

            if (this.heap[parentIndex] > this.heap[index]) {

                [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]]

                index = parentIndex

            } else {

                break
            }
        }
    }

    // REMOVE MIN
    remove() {

        if (this.heap.length === 0) {
            return null
        }

        if (this.heap.length === 1) {
            return this.heap.pop()
        }

        const min = this.heap[0]

        this.heap[0] = this.heap.pop()

        this.heapifyDown(0)

        return min
    }

    heapifyDown(index) {

        let smallest = index

        let left = 2 * index + 1

        let right = 2 * index + 2

        if (
            left < this.heap.length &&
            this.heap[left] < this.heap[smallest]
        ) {
            smallest = left
        }

        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
            smallest = right
        }

        if (smallest !== index) {

            [this.heap[index], this.heap[smallest]] =
            [this.heap[smallest], this.heap[index]]

            this.heapifyDown(smallest)
        }
    }

    // GET MIN
    peek() {
        return this.heap[0]
    }

    // DISPLAY
    display() {
        console.log(this.heap)
    }
}

const heap = new MinHeap()

heap.insert(50)
heap.insert(40)
heap.insert(30)
heap.insert(20)
heap.insert(10)

heap.display()

console.log("Min:", heap.peek())

console.log("Removed:", heap.remove())

heap.display()