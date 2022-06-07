/*
 * @lc app=leetcode.cn id=436 lang=javascript
 *
 * [436] 寻找右区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  if (intervals.length <= 1) {
    return [-1];
  }
  let map = new Map();
  let max = intervals[0][0];
  const res = [];
  for (let i = 0; i < intervals.length; i++) {
    max = Math.max(max, intervals[i][0]);
    if (!map.has(intervals[i][0])) {
      map.set(intervals[i][0], i);
    }
  }

  for (let i = 0; i < intervals.length; i++) {
    let element = intervals[i][1];
    let flag = 0;
    while (element <= max) {
      if (map.has(element)) {
        res.push(map.get(element));
        flag = 1;
        break;
      }
      element++;
    }
    if (!flag) {
      res.push(-1);
    }
  }
  return res;
};
console.log(
  findRightInterval([
    [3, 4],
    [2, 3],
    [1, 2],
  ])
);
// @lc code=end
