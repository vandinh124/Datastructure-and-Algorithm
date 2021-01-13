var subsets = function(S) {
    let res = [];
   
   const helper = (S, slate, i) => {
       if(i === S.length) {
           res.push([...slate])
           return;
       }
       
       //Exclude
       helper(S, slate , i+1)
       
       //Include
       slate.push(S[i])
       helper(S, slate, i+1)
       slate.pop()
       
   }
   helper(S, [],  0)
   return res
};

console.log(subsets([1,2,3]))