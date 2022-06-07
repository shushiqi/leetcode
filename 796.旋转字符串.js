/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let len = s.length;
  if (len != goal.length) return false;
  while (len > 0) {
    if (s == goal) {
      return true;
    }
     s = s.slice(1) + s.slice(0, 1);
    len--;
  }
  return false
};

// @lc code=end
