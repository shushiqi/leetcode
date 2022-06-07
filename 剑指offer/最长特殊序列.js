// https://leetcode-cn.com/problems/longest-uncommon-subsequence-i/
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  return a !== b ? Math.max(a.length, b.length) : -1;
};
let a = "abcd",
  b = "acd";
console.log(findLUSlength(a, b));
