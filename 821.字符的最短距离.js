/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let L = 0,
    R = 0;
  const ret = new Array(s.length);
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element == c) {
      ret[index] = 0;
    } else {
      L = index - 1 >= 0 ? index - 1 : index;
      R = index + 1 < s.length ? index + 1 : index;
      while (L >= 0 && R < s.length) {
        if (s[L] == c) {
          ret[index] = Math.abs(index - L);
          break;
        }
        if (s[R] == c) {
          ret[index] = Math.abs(R - index);
          break;
        }
        L - 1 >= 0 ? L-- : "";
        R + 1 < s.length ? R++ : "";
        if (index == 0) {
        }
      }
    }
  }
  return ret;
};
// @lc code=end
