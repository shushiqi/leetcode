// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0,
    max = nums.length - 1;
  while (min < max && max - min > 1) {
    let mid = Math.ceil((min + max) / 2);

    if (nums[min] == target) return min;
    if (nums[max] == target) return max;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      max = mid;
    } else {
      min = mid;
    }
  }
  return -1;
};
let nums = [-1, 0, 3, 5, 9, 12],
  target = -1;
