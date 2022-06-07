/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  const strsBU = strs.slice(1);
  for (let index = 0; index < strs[0].length; index++) {
    const element = strs[0][index];
    const m = strsBU.filter((item) => {
      return item[index] == element;
    });

    if (m.length == strsBU.length) {
      prefix += element;
    } else {
      return prefix;
    }
  }
  return prefix;
};
// @lc code=end
