/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const num = n.toString(2);
  let max = 0;
  let index = -1;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element == "1") {
      if (index>=0) {
        max = Math.max(max, i - index);
      }
      index = i;
    }
  }
  return max;
};
// @lc code=end
console.log(binaryGap(22));
