function heapSort(arr) {

    let n = arr.length

    // BUILD MAX HEAP
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }

    // EXTRACT ELEMENTS
    for (let i = n - 1; i > 0; i--) {

        // Swap root with last
        [arr[0], arr[i]] = [arr[i], arr[0]]

        // Heapify reduced heap
        heapify(arr, i, 0)
    }

    return arr
}

function heapify(arr, n, i) {

    let largest = i

    let left = 2 * i + 1

    let right = 2 * i + 2

    // Left child larger
    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }

    // Right child larger
    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }

    // Swap if needed
    if (largest !== i) {

        [arr[i], arr[largest]] =
        [arr[largest], arr[i]]

        // Heapify affected subtree
        heapify(arr, n, largest)
    }
}

const arr = [4, 10, 3, 5, 1]

console.log(heapSort(arr))