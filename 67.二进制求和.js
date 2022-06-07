/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const res = [];
  let flag = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || flag) {
    const aNum = Number(a[i]) ? Number(a[i]) : 0;
    const bNum = Number(b[j]) ? Number(b[j]) : 0;
    let sum = aNum + bNum + flag;
    if (sum == 3) {
      sum = 1;
      flag = 1;
    } else if (sum == 2) {
      sum = 0;
      flag = 1;
    } else {
      flag = 0;
    }
    res.unshift(sum);
    i--;
    j--;
  }
  return res.join("");
};
// @lc code=end
console.log(addBinary("11", "1"));
