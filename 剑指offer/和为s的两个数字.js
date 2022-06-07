// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (nums[l] + nums[r] != target) {
    let sum = nums[l] + nums[r];
    if (sum > target) {
      r--;
    } else {
      l++;
    }
  }
  return [nums[l], nums[r]];
};
let nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
// 解析： 双指针 l,r 分别指向数组两端
// 计算和 sum = nums[l] + nums[r]
// sum > target时， 右指针向左移动
// sum < target时， 左指针向右移动
// 直到 sum = target ,返回此时数组[nums[l], nums[r]];
