/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const s = sentence.split(" ");
  const Vowel = ["a", "e", "i", "o", "u"];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    let str = element;
    if (Vowel.indexOf(element[0].toLowerCase()) == -1) {
      str = element.slice(1) + element.slice(0, 1);
    }
    str += "ma";

    str = str.padEnd(str.length + index + 1, "a");
    s[index] = str;
  }
  return s.join(" ");
};

// @lc code=end
