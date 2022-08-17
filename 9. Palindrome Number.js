/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const numToString = x.toString();
  const reverseString = numToString.split('').reverse().join('');
  const reversedStringToInt = parseInt(reverseString);

  if (reverseString[-1] === '-') false;

  if (x === reversedStringToInt) true;
  else false;
};
