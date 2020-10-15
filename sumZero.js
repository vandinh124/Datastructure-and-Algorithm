// function sumZero(arr){
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right){
//         let sum = arr[left] + arr[right];
//         if (sum === 0){
//             return [arr[left], arr[right]];
//         }else if (sum > 0){
//             right--;
//         }else {
//             left++;
//         }
//     }
// }
function sumZero(arr){
    for (let i = 0; i<arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(sumZero([2, 4, 5, 1, -2, -3, -4]))