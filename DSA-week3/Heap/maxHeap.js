class MaxHeap {

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

            if (this.heap[parentIndex] < this.heap[index]) {

                [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]]

                index = parentIndex

            } else {

                break
            }
        }
    }

    // REMOVE MAX
    remove() {

        if (this.heap.length === 0) {
            return null
        }

        if (this.heap.length === 1) {
            return this.heap.pop()
        }

        const max = this.heap[0]

        this.heap[0] = this.heap.pop()

        this.heapifyDown(0)

        return max
    }

    heapifyDown(index) {

        let largest = index

        let left = 2 * index + 1

        let right = 2 * index + 2

        if (
            left < this.heap.length &&
            this.heap[left] > this.heap[largest]
        ) {
            largest = left
        }

        if (
            right < this.heap.length &&
            this.heap[right] > this.heap[largest]
        ) {
            largest = right
        }

        if (largest !== index) {

            [this.heap[index], this.heap[largest]] =
            [this.heap[largest], this.heap[index]]

            this.heapifyDown(largest)
        }
    }

    display() {
        console.log(this.heap)
    }
}

const heap = new MaxHeap()

heap.insert(10)
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(50)

heap.display()

console.log("Removed:", heap.remove())

heap.display()