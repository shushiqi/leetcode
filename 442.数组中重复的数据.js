/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const res = [];
  let tmp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    tmp = tmp ^ nums[i];
    console.log('tmp: ', tmp);
  }
  return tmp
};
// @lc code=end
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
