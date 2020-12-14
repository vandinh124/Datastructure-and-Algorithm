function fib(n, memo=[]){
    if (memo[n] !== undefined) return memo[n];
    if(n <=2 ) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    // console.log(memo)
    // console.log(res)
    memo[n] = res;
    return res;
}

// function fib(n, memo=[undefined, 1, 1]){
//     if (memo[n] !== undefined) return memo[n];
//     //if(n <=2 ) return 1; replace the base case memo=[undefined, 1, 1]
//     var res = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = res;
//     return res;
// }

console.log(fib(10))