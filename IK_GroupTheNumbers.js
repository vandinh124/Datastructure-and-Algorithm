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

console.log(GroupTheNumber([4,9,5,2,9,5,7,10]))