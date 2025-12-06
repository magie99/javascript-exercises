const sumAll = function(x, y) {
    if (!(Number.isInteger(x) && Math.sign(x) == 1) || !(Number.isInteger(y) && Math.sign(y) == 1)){
        return "ERROR";
    }
    let start;
    let end;
    let diff;
    let sum;
    let step;

    if (x < y){
        start = x;
        end = y;
    }
    else if (x > y){
        start = y;
        end = x;
    }

    diff = end -start;
    sum = start;
    step = start + 1;

    for (let i = diff; i > 0; i--){
        sum += step;
        step ++;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
