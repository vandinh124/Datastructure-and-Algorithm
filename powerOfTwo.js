// input 1          || 16       || 218
// oupt: true       || true     || false
//explain 2^1 = 1   || 2^4 = 16

function powerOfTwo(n){
    let i = 1;
    while (i<n){
        i *= 2;
    }
    return i === n
}

console.log(powerOfTwo(218))