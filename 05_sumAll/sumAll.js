const sumAll = function(num1,num2) {
    if (typeof num1 !== typeof num2 || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    const bigNum = Math.max(num1, num2);
    const smallNum = Math.min(num1, num2);
    let sum = 0;

    for (i = smallNum; i <= bigNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
