/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (!this.map.has(element)) {
      this.map.set(element, []);
    }
    this.map.get(element).push(index);
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const indexArr = this.map.get(target);
  return indexArr[Math.floor(Math.random() * indexArr.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end
