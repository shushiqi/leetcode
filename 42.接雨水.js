/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let L = 0,
    R = 0;
  let res = 0;
  for (let index = 1; index < height.length - 1; index++) {
    const element = height[index];
    // 判断左边最高
    if (height[index - 1] > L) {
      L = height[index - 1];
    }

    // 判断右边最高
    R = 0;
    for (let i = index + 1; i < height.length; i++) {
      if (R < height[i]) {
        R = height[i];
      }
    }
    const min = Math.min(L, R);
    if (min > element) {
      res += min - element;
    }
  }
  return res;
};
// @lc code=end
