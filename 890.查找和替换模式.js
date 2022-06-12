/*
 * @lc app=leetcode.cn id=890 lang=javascript
 *
 * [890] 查找和替换模式
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const res = [];
  for (let i = 0; i < words.length; i++) {
    let map = new Map();
    let item = unique(words[i]);
    let p = unique(pattern);
    if (item.length != p.length) {
      continue;
    }
    for (let index = 0; index < p.length; index++) {
      if (!map.has(item[index])) {
        map.set(item[index], p[index]);
      }
    }
    for (let index = 0; index < words[i].length; index++) {
      if (map.get(words[i][index]) != pattern[index]) {
        break;
      }
      if (
        index == words[i].length - 1 &&
        map.get(words[i][index]) == pattern[index]
      ) {
        res.push(words[i]);
      }
    }
  }
  return res;
};

function unique(s) {
  return [...new Set(s.split(""))].join("");
}
// @lc code=end
console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"],  "abb"))
