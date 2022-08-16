/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (n < target) {
      return nums[n];
    } else {
      return n;
    }
  }
};

// Test Case
const nums = [1, 3, 5, 6];
const target = 2;
