

function compressedString(message) {
    // Write your code here
    let compressedStr = '';
    // let curCount = 1;
    
    for (let i = 0; i < message.length; i++){
        let cur = message[i];
        let curCount = 1;
        // while (message[i+1]===cur){
        //     curCount ++;
        //     i++;
        // }
        if(cur === message[i+1]){
            curCount++;
        }else {
            compressedStr += cur + curCount;
            curCount = 1;
        }
        // if(curCount>1) {
        //     compressedStr += cur + curCount;
        // }else{
        //     compressedStr += cur;
        // }
        
    }   

    return compressedStr.length < message.length ? compressedStr : message

}

console.log(compressedString('aabcccccaaa'))
console.log(compressedString('aa'))
console.log(compressedString('aaAAaa'))
console.log(compressedString('a'))
console.log(compressedString('aaa'))
console.log(compressedString('aaabbb'))
console.log(compressedString('aaabccc'))