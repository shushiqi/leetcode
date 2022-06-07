/*
 * @lc app=leetcode.cn id=1823 lang=javascript
 *
 * [1823] 找出游戏的获胜者
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const arr = new Array(n).fill(0);
  const arr1 = arr.map((item, index) => (item = index + 1));
  let start = 0;
  while (arr1.length > 1) {
    let index = (k % arr1.length) + start - 1;
    if (index >= arr1.length) {
      index = index % arr1.length;
    }
    if (index < 0) {
      index = arr1.length + index;
    }
    arr1.splice(index, 1);
    start = index;
  }
  return arr1[0];
};
// @lc code=end
console.log(findTheWinner(5, 3));
