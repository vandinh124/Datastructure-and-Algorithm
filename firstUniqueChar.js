//Given a string, find the first non-repeating character in it
// and return it's index. If it doesnt exist, return -1

//s = 'leetcode' --> return 0
//s = 'loveleetcode' --> return 2

function firstUniqueChar(s){
    const characterCount = {} // {v: 0, a: 1, d: 2}
    for (var i = 0; i < s.length; i++){
        const char = s[i];
        characterCount[char] = characterCount[char] + 1 || 1;
    }

    for (var i = 0; i < s.length; i++){
        const char = s[i];
        if (characterCount[char] === 1){
            return i
        }
    }
    return -1;
}

console.log(firstUniqueChar('loveleetcode'))