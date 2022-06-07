// https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
