/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let xy = 0,
    yz = 0,
    zx = 0;
  for (let i = 0; i < grid.length; i++) {
    const element = grid[i];
    let yzHeight = 0,
      zxHeight = 0;
    for (let j = 0; j < element.length; j++) {
      xy += grid[i][j] > 0 ? 1 : 0;
      yzHeight = Math.max(yzHeight, grid[j][i]);
      zxHeight = Math.max(zxHeight, grid[i][j]);
    }
    yz += yzHeight;
    zx += zxHeight;
  }
  return xy + yz + zx;
};
// @lc code=end
