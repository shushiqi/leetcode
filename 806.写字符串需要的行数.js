/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let lines = 1,
    count = 0;
  for (let index = 0; index < s.length; index++) {
    const sCode = s[index].charCodeAt() - 97;
    count += widths[sCode];
    if (count > 100) {
      count = widths[sCode];
      lines++;
    }
  }
  return [lines, count];
};
var numberOfLines2 = function (widths, s) {
  let lines = 1,
    count = 0;
    
  return [lines, count];
};
// @lc code=end
