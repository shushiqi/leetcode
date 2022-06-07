/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  let ret = nums.length;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] >= target) {
      ret = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ret;
};
// @lc code=end
var searchInsert2 = function (nums, target) {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == target) {
      return index;
    }
    if (nums[index] < target && target < nums[index + 1]) {
      return index + 1;
    }
  }
};
