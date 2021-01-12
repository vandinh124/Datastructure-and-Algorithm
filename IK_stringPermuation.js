var letterCasePermutation = function(S) {
    let res = [];
    
    const helper = (S, slate, index) => {
        if(slate.length === S.length) {
            res.push(slate)
            return;
        }
        if(isNaN(S[index])) {
		
            helper(S, slate + S[index].toUpperCase(), index+1)
            helper(S, slate + S[index].toLowerCase(), index+1)
            return;
        }
        helper(S, slate + S[index], index+1)
    }
    helper(S, "", 0)
    return res
};
letterCasePermutation("a1b2")