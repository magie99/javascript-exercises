const palindromes = function (input) {
    let array = [...input];
    array = array.filter(char => {
        return /[a-zA-Z0-9]/.test(char);
    });
    console.log(array);
    let n = array.length - 1;
    for (let i = 0; i < n;){
        if (array[i].toLowerCase() != array[n].toLowerCase()){
            return false;
        }
        i++;
        n--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
