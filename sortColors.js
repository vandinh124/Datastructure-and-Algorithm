var sortColors = function(nums) {
    let leftIdx = 0;
    let rightIdx = nums.length -1 ;
    let current = 0;
    
    while (current <= rightIdx){
        if (nums[current] == 1){
            current ++;
        } else if (nums[current] == 2){
            [nums[current], nums[rightIdx]] = [nums[rightIdx], nums[current]]
            rightIdx--;
        } else if (nums[current] == 0){
            [nums[current], nums[leftIdx]] = [nums[leftIdx], nums[current]]
            current++;
            leftIdx++
        }
    }
    
    return nums;
};