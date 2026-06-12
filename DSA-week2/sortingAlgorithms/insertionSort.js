// Start with the second element (index 1) and assume the first element is already sorted.

// Compare the current element with the elements before it.

// Shift the larger elements one position to the right to make space.

// Insert the current element at the correct position.

// Repeat for all elements until the array is sorted.


function insertion(arr) {

    for (let i = 1; i < arr.length; i++) {

        let numberOfInsert = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > numberOfInsert) {

            arr[j + 1] = arr[j]
            j = j - 1
        }

        arr[j + 1] = numberOfInsert
    }

    return arr
}