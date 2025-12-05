const removeFromArray = function(array, ...remove){ 
    let newArray = [];
    array.forEach(element => {
        if (!remove.includes(element)){
            newArray.push(element)
        }
    });
    console.log(newArray)
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
