//algorithm
// Start from the first element of the array.

// Compare adjacent elements:

// If the first element is greater than the second, swap them.

// Otherwise, move to the next pair.

// Repeat this process for the entire array.

// The largest element moves to its correct position at the end.

// Reduce the effective size of the array (ignore the last sorted element).

// Repeat until the entire array is sorted.



bubbleSort

function bubbleSort(arr){
    let swapped

    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){

            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp

                swapped=true
            }
        }
    }while(swapped)

        return arr
}
d
let a=[2,5,1,3,4]

console.log(bubbleSort(a))








