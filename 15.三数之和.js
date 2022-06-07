/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => {
    a - b;
  });
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if(i > 0 && nums[i] === nums[i-1]) continue;
    let L = i + 1,
      R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([i, L, R]);
        while (L < R && nums[L] === nums[L + 1]) L++; // 去重
        while (L < R && nums[R] === nums[R - 1]) R--; // 去重
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
  }
  return ans;
};
// @lc code=end
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
