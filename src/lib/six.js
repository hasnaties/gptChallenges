const getFactorial = (number) => {
  if (number === 1 || number === 0) {
    return 1;
  } else {
    return (number * getFactorial(number - 1));
  }
};

module.exports = getFactorial