//input [0, 1, 0, 3, 12]
//output [1, 3, 12, 0, 0]
//Move 0 to the end without making a copy of the array

function moveZeros(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i]===0){
            arr.splice(i,1);
            arr.push(0)
        }
    }
    return arr;
}

console.log(moveZeros([0,1,0,3,12]))