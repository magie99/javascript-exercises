function fibonacci(x){
    Number(x)
    let previous = 1;
    let result = 1;
    let temp;
    if(x === NaN || x < 0){
        return "OOPS"
    }
    else if(x == 0){
        return 0;
    }
    else{
        for(i = 2; i < x; i++){
            temp = result;
            result += previous;
            previous = temp;
        }
        console.log(result);
        return result;
        }
};

// Do not edit below this line
module.exports = fibonacci;
