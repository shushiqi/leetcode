/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  if (nums.length <= 1) {
    return 0;
  }
  let res;
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  res = max - min > 2 * k ? max - min - 2 * k : 0;
  return res
};
// @lc code=end
