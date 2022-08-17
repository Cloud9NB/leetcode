/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];

  for (const num of prices) {
    if (min > num) {
      min = num;
    } else if (profit < num - min) {
      profit = num - min;
    }
  }

  return profit;
};
