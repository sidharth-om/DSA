// Divide:

// If the array has one or zero elements, return it (already sorted).

// Otherwise, split the array into two halves (left and right).

// Recursively sort both halves using Merge Sort.

// Merge the two sorted halves into a single sorted array.


function mergeSort(arr) {

    if (arr.length < 2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)

    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {

    let sorted = []

    while (left.length && right.length) {

        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }

    return [...sorted, ...left, ...right]
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]))