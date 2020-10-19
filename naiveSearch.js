// long str "oebvanosevan" : short str "van" //2
function naiveSearch(longStr, shortStr){
    var count = 0;
    for (var i = 0; i< longStr.length; i++){
        for (var j = 0; j < shortStr.length; j++){
            if (shortStr[j] !== longStr[i+j]) break;
            if (j === shortStr.length - 1) count++;

        }
    }
    return count;
}

console.log(naiveSearch("sdfvandvanafvan", "dinh"))