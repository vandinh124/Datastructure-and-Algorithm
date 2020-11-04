// input: [1, 2, 3]  || [4, 3, 2, 1]
//output: [1, 2, 4]  || [4, 3, 2, 2]

function plusOne(digits){
    for ( var i = digits.length - 1; i >= 0; i--){
        if (digits[i] < 9){
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i]=0;
        }
    }
    digits.unshift(1);
    return digits
}

console.log(plusOne([4,9,9]))
