// Fibbinocci series


function fibinnocci(n){
    let arr=[0,1,1]
    
    for(let i=3;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr
    
}

console.log(fibinnocci(5))




// Factorial Function


function Factorial(n){
    let result=1
    for(let i=1;i<=n;i++){
        result= result*i
    }
    return result
    
}
console.log(Factorial(7))


// IsPrime 


function isPrime(n){
    if(n<2){
        return false
    }
    let count=1
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
        
    }return true
    
}

console.log(isPrime(5))



// IsPowerOfTwo


function isPowerOfTwo(n){
if(n<1){
return false
}
while(n>1){
if(n%2!==0){
return false
}n=n/2
}return true

}

console.log(isPowerOfTwo(8))


// itsOnBinary


function isPowerOfTwo(n){
    
    if(n<1){
      return false  
    }
    return (n&(n-1))==0
}

console.log(isPowerOfTwo(8))


// Recursion


function multiply(arr){
    if(arr.length<=0){
        return 1
    }else return arr[arr.length-1]*multiply(arr.slice(0,arr.length-1))
}

console.log(multiply([1,2,3,4]))


// Factorial in Recursion


function Factorial(n){
    if(n<=0){
        return 1
    }
    return n*Factorial(n-1)
    
}
console.log(Factorial(5))


// fibinnocci Recursion




// STRING REVERSE IN RECURSIVE FUNCTION


function BackPrint(str){
    if(str.length==0){
        return ""
    }
    return BackPrint(str.slice(1))+str[0]
}

console.log(BackPrint("RigidBorn"))



// Recursive BinarySearch


function recursiveBinary(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){
    if(left>right){
        return -1
    }
    
    let midIndex=Math.floor((left+right)/2)
    
    if(arr[midIndex]===target){
        return midIndex
    }
    
    if(target<arr[midIndex]){
        return search(arr,target,left,midIndex-1)
    }else{
        return search(arr,target,midIndex+1,right)
    }
}

let ar=[1,2,3,4,5,6,7,8]

console.log(recursiveBinary(ar,9))