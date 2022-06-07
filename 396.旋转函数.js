/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  let f = 0;
  for (let index = 0; index < nums.length; index++) {
    f += nums[index] * index;
  }
  let res = f;
  for (let index = nums.length - 1; index > 0; index--) {
    f += sum -  nums.length * nums[index];
    res = Math.max(res, f);
  }
  return res;
};
// @lc code=end
