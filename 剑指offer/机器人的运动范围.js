// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  const dfs = function (i, j) {
    if (
      i >= m ||
      j >= n ||
      movingCountHelpler(i, j) > k ||
      visited[i][j] == 1
    ) {
      return 0;
    }
    visited[i][j] = 1;
    return 1 + dfs(i + 1, j) + dfs(i, j + 1);
  };
  return dfs(0, 0);
};

function movingCountHelpler(x, y) {
  let num = 0;
  while (x > 0) {
    num += x % 10;
    x /= 10;
  }
  while (y > 0) {
    num += y % 10;
    y /= 10;
  }
  return parseInt(num);
}

console.log(movingCount(11, 8, 16));
