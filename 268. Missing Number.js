/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let noMissingNumsSum = 0;
  let missingNumsSum = 0;

  for (let i = 0; i < nums.length + 1; i++) {
    noMissingNumsSum += i;
  }

  for (let i = 0; i < nums.length; i++) {
    missingNumsSum += nums[i];
  }

  let missingNumberResult = noMissingNumsSum - missingNumsSum;

  return missingNumberResult;
};
