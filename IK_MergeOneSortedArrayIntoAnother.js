function merge_first_into_second(arr1, arr2) {
    /*
     * Write your code here.
     */

    let arr1Idx = arr1.length - 1;
    let arr2Idx = arr1.length -1;
    let k = arr2.length - 1;

    while (k > 0 ){
        if (arr1[arr1Idx] > arr2[arr2Idx]){
            arr2[k] = arr1[arr1Idx];
            k--;
            arr1Idx--;
            console.log("1", arr2)
            console.log("k", k, "arridx1", arr1Idx, "arridx2", arr2Idx)
        }else {
            arr2[k] = arr2[arr2Idx];
            arr2Idx--;
            k--;
            console.log("2", arr2)
        }
    }
    console.log(arr2)
    return arr2;

}
console.log(merge_first_into_second([13, 21], [13, 13, 0, 0]))
// function merge(arr1, arr2){
//     let results = [];
//     let i = arr1.length -1 ;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length){
//         if (arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j]);
//             j++;
//         }
//     }
//     while ( i< arr1.length){
//         results.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length){
//         results.push(arr2[j]);
//         j++;
//     }
//     return results;
// }



// void merger_first_into_second(vector<int>& arr1, vector<int>& arr2) {
//     int n = arr1.size();
// 	// Start merging from the end. 
// 	int last1 = n - 1;
// 	int last2 = n - 1;
// 	int last = n + n - 1;
// 	// At least one element reamining. 
// 	while (last >= 0)
// 	{
// 		// If no elements remaining in arr1.
// 		if (last1 < 0)
// 		{
//             // Think about the case when arr1 = [4, 5, 6] arr2 = [1, 2, 3, 0, 0, 0].
//             // Once last1 = -1, arr2 will be [1, 2, 3, 4, 5, 6]. So, we can stop here.
//             break;
// 		}
// 		// If no elements remaining in arr2.
// 		else if (last2 < 0)
// 		{
// 			arr2[last--] = arr1[last1--];
// 		}
// 		// Priority to larger element, as we are merging from the end. 
// 		else if (arr1[last1] <= arr2[last2])
// 		{
// 			arr2[last--] = arr2[last2--];
// 		}
// 		else
// 		{
// 			arr2[last--] = arr1[last1--];
// 		}
// 	}
// }
