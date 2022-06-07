/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
  this.nums = [];
  this.indices = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.indices.has(val)) {
    return false;
  }
  const index = this.nums.length;
  this.nums.push(val);
  this.indices.set(val, index);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.indices.has(val)) {
    return false;
  }
  const index = this.indices.get(val);
  this.nums[index] = this.nums[this.nums.length - 1];
  this.indices.set(this.nums[index], index);
  this.nums.pop();
  this.indices.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomNum = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomNum];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
