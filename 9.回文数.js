/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const s = "" + x;
  let len = Math.floor(s.length / 2);
  while (len >= 0) {
    if (s[len] != s[s.length - len - 1]) return false;
    len--;
  }
  return true;
};
// @lc code=end

