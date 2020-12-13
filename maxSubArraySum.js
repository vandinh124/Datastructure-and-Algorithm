function maxSubArraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i<num; i++){
        maxSum += arr[i];
    }
    console.log("maxsum", maxSum)
    tempSum = maxSum;
    
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        console.log("i-num", arr[i-num])
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

// function maxSubArraySum(arr, num){
//     if (num > arr.length){
//         return null;
//     }
//     var max = -Infinity;
//     for (let i=0; i< arr.length - num + 1; i++){
//         temp = 0;
//         for (let j = 0; j < num; j++){
//             temp += arr[i+j];
//         }
//         if (temp > max){
//             max = temp;
//         }
//     }
//     return max;
// }

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))