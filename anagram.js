function anagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let lookup = {};
    for (let i = 0; i< str1.length; i++){
        let letter = str1[i];
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < str2.length; i++){
        let letter = str2[i];
        //can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    
    return true;
}

// function anagram(str1, str2) {  
//     let arr1 = JSON.stringify(Array.from(text1).sort())  
//     let arr2 = JSON.stringify(Array.from(text2).sort())  
  
//     return arr1 === arr2
  
//   } 

console.log(anagram("vandinh", "dinhvan"))