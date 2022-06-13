/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let expected = [...heights].sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i <= heights.length; i++) {
    if (heights[i] != expected[i]) {
      count++;
    }
  }
  return count;
};
// @lc code=end
console.log(heightChecker([1, 1, 4, 2, 1, 3]));

// 官方解法
var heightChecker = function (heights) {
  const m = parseInt(_.max(heights));
  const cnt = new Array(m + 1).fill(0);
  for (const h of heights) {
    ++cnt[h];
  }

  let idx = 0,
    ans = 0;
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= cnt[i]; ++j) {
      if (heights[idx] !== i) {
        ++ans;
      }
      ++idx;
    }
  }
  return ans;
};
