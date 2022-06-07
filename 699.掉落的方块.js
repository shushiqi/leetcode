/*
 * @lc app=leetcode.cn id=699 lang=javascript
 *
 * [699] 掉落的方块
 */

// @lc code=start
/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  const res = [];
  for (let i = 0; i < positions.length; i++) {
    let height = positions[i][1];
    for (let j = 0; j < i; j++) {
      if (
        (positions[i][0] >= positions[j][0] &&
          positions[i][0] < positions[j][0] + positions[j][1]) ||
        (positions[i][0] + positions[i][1] > positions[j][0] &&
          positions[i][0] + positions[i][1] <=
            positions[j][0] + positions[j][1])
      ) {
        height = Math.max(res[i], res[j] + positions[i][1]);
      }
    }
    res.push(height);
  }
  for (let i = 1; i < res.length; i++) {
    res[i] = Math.max(res[i], res[i - 1]);
  }
  return res;
};
console.log(
  fallingSquares([
    [9, 1],
    [6, 5],
    [6, 7],
  ])
);
// @lc code=end
