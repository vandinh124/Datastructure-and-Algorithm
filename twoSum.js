function twoSum(nums, target) {
    if (nums.length <=1){
        return;
    }
    for (var i = 0; i < nums.length; i++){
        var temp = target - nums[i];
        var tempIndex = nums.indexOf(temp)
        if (tempIndex){
            return [i, tempIndex]
        }
    }
};

console.log(twoSum([1,3], 4))