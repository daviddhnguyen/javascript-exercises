const palindromes = function(text) {
    const punctuation = /[\.,?!]/g;
    let newText = text.replace(punctuation, '');
    newText = newText.replaceAll(' ', '');
    newText = newText.toLowerCase();
    
    let reverseText = '';
    
    for (let i = newText.length-1; i >= 0; i--) {
      reverseText = reverseText.concat(newText[i]);
    };
    
    return newText === reverseText;
  };

// Do not edit below this line
module.exports = palindromes;
