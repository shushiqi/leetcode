/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) {
    if (map.has(target - nums[index])) {
      return [index, map.get(target - nums[index])];
    }
    map.set(nums[index], index);
  }
};
// @lc code=end
