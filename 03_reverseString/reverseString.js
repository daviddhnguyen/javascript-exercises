const reverseString = function(text) {
    stringLength = text.length-1;

    let reverseText = '';
    for (i = stringLength; i >= 0; i--) {
        reverseText = reverseText.concat(text.charAt(i));
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;