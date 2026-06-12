// Start from the first element.

// Find the smallest element in the remaining unsorted part of the array.

// Swap it with the first element of the unsorted part.

// Move to the next element and repeat the process.

// Continue until the entire array is sorted.


function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        // Swap
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}

console.log(selectionSort([64, 25, 12, 22, 11]))