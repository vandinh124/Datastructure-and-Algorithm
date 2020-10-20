// //ES2015 (swap)
// function bubleSort(arr){
//     const swap = (arr, idx1, idx2)=> {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     for (var i = arr.length; i > 0; i--){
//         for (var j = 0; j < i-1; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 //swap
//                 swap(arr, j, j+1)
//             }
//         }
//     }
//     return arr;
// } 
 
//  ES5 
function bubleSort(arr){
    for (var i = arr.length; i > 0; i--){
        for (var j = 0; j < i-1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
//  ES5 optimized with noSwaps (if the arr is nearly sorted)
// function bubleSort(arr){
//     var noSwaps;
//     for (var i = arr.length; i > 0; i--){
//         noSwaps = true; //
//         for (var j = 0; j < i-1; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 //swap
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 noSwaps = false;
//             }
//         }
//         if(noSwaps) break;
//     }
//     return arr;
// }

console.log(bubleSort([37, 45, 29, 8]))