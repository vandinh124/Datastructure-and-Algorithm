// function charCount(str){
//     //make object to return at end
//     var result={};
//     //loop over string, for each character
//     for (var char of str){
//         var char = char.toLowerCase();
//         //if character is something else (space, period, etc.) Dont do anything
//         if (/[a-z0-9]/.test(char)){
//                     //if the char is a number/letter AND is a key in object, add 1 to count
//             result[char] = ++result[char] || 1
//         }
//     }
//     return result;
// }
    function charCount(str){
        var result={};
        for (var char of str){
           if (isAlphaNumberic(char)){
               char = char.toLowerCase();
               result[char] = ++result[char] || 1;
           }
        }
        return result;
    }

    function isAlphaNumberic(char){
        var code = char.charCodeAt(0);
        if (!(code > 47 && code<58) && //numberic (0-9)
            !(code > 64 && code<91) && //upper alpha (A-Z)
            !(code > 96 && code<123)) { //lower alpha (a-z)
                return false;
            } 
        return true;
    }


console.log(charCount("Van dinh"))