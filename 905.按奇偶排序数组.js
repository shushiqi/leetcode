/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const res = [];
  while (nums.length) {
    const element = nums.shift();
    element % 2 == 0 ? res.unshift(element) : res.push(element);
  }
  return res
};
// @lc code=end
