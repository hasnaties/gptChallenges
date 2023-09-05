/* 
Implement a function to determine if a string has balanced parentheses. For example, 
    "((()))" is balanced, but "(()" is not.
    But not for case sensitive strings
*/

const isBalanced = (str) => {

  const openingParenthesis = str.match(/\(/g);
  const closingParenthesis = str.match(/\)/g);
  
  if (!openingParenthesis || !closingParenthesis) {
    return false
  }

  return (openingParenthesis.length === closingParenthesis.length ? true : false);
};

module.exports = isBalanced;