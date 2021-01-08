// 2 pointers from left & right
function GroupTheNumber(arr){
    var leftPointer = 0;
    var rightPointer = arr.length - 1;
    while (leftPointer < rightPointer){
        if (arr[leftPointer] % 2 == 0){
            leftPointer++;
        } else if (arr[rightPointer] % 2 != 0){
            rightPointer--;
        }else {
            [arr[leftPointer] ,arr[rightPointer]] = [arr[rightPointer] ,arr[leftPointer]]
            leftPointer++;
            rightPointer--
        }
    }
    
    return arr;
}

function GroupTheNumber1(arr){
    let evenIdx = 0;
    let currentIdx = 0;

    while (currentIdx < arr.length){
        if (arr[currentIdx] % 2 == 1){
            currentIdx++
        }else {
            [arr[currentIdx], arr[evenIdx]] = [arr[evenIdx], arr[currentIdx]]
            currentIdx++
            evenIdx++
        }
    }

    return arr;
}



console.log(GroupTheNumber1([4,9,5,2,9,5,7,10]))