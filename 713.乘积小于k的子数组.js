/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    let flag = 0;
    if (nums[index] < k) {
      count++;
    } 
    flag = nums[index];
    for (let i = index + 1; i < nums.length; i++) {
      flag = flag * nums[i];
      if (flag < k) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};
// @lc code=end
const arr = [57,44,92,28,66,60,37,33,52,38,29,76,8,75,22];
console.log(numSubarrayProductLessThanK(arr, 18));
