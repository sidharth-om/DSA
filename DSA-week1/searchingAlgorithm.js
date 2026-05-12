// Linear Search
______________
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
    
}
console.log(linearSearch([2,4,5,8,3,11,7],3))

// Binary Search
______________
function BinarySearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1
    
    while(leftIndex<=rightIndex){
        let middileIndex=Math.floor((leftIndex+rightIndex)/2)
        if(arr[middileIndex]==target){
           return middileIndex 
        }
        if(target<arr[middileIndex]){
            rightIndex=middileIndex-1
        }else{
            leftIndex=middileIndex+1
        }
    }return -1
    
}

console.log(BinarySearch([-5,2,4,6,7,9,11,17],9))