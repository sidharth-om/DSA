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