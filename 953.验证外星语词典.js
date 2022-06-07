/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let map = new Map();
  for (let index = 0; index < order.length; index++) {
    map.set(order[index], index + 1);
  }
  for (let index = 0; index < words.length - 1; index++) {
    let n = Math.max(words[index].length, words[index + 1].length);
    for (let i = 0; i < n; i++) {
      let a = map.get(words[index][i]) || 0;
      let b = map.get(words[index + 1][i]) || 0;
      if (a == b) {
        continue;
      } else if (a < b) {
        break;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
console.log(
  isAlienSorted(["fxasxpc", "dfbdrifhp", "nwzgs"], "zkgwaverfimqxbnctdplsjyohu")
);
