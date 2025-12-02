const reverseString = function(word) {
    let reverse = "";
    let i = word.length;

    while (i >= 0){
        reverse += word.charAt(i);
        i--;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
