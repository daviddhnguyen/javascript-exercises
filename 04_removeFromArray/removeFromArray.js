const removeFromArray = function(array) {
    const argsLength = arguments.length;
    
    let newArray = array;

    for (i = 1; i < argsLength; i++) {
        console.log(arguments[i]);
        newArray = newArray.filter((element) => element !== arguments[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;