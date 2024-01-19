const repeatString = function(text,numOfRepeats) {
    let repeatingText = ''
    if (numOfRepeats < 0) {
        return 'ERROR';
    }

    for (i = 0; i < numOfRepeats; i++) {
      repeatingText = repeatingText.concat(text);
    }
    return repeatingText;
};

// Do not edit below this line
module.exports = repeatString;
