function roundOneDecimal(num) {
  return Math.round(num *10)/10
}

const convertToCelsius = function(tempInF) {
  return roundOneDecimal((tempInF-32)*(5/9));
};

const convertToFahrenheit = function(tempInC) {
  return roundOneDecimal(tempInC*(9/5)+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
