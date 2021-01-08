
    // y = x % 10 = 123 % 10 = 3
    // x = x - y = 123 - 3 = 120 / 10 = 12 
    // result = result*10 + y
   
    // y = x % 10 = 12 % 10 = 2
    // result = (result *10) + y
    // x = x - y = 12 - 2 = 10 / 10 = 1
    
    // y = x % 10 = 1 % 10 = 1   
    // result = result *10 + y
    // x = x -y = 1 - 1 = 0 / 10 = 0
    
    function reversedInteger(x){
        let m = Math.abs(x);
        let result = 0;
        while (m > 0){
            let remainder = m % 10;
            m = (m - remainder) / 10;
            result = result * 10 + remainder;
        }
        return x < 0 ? result * -1 : result;
    }

    console.log(reversedInteger(-150))