// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    let total = arr[0] * productOfArray(arr.slice(1));
    return total;
    
}

console.log(productOfArray([1,2,3]))