/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  this.pingTime = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.pingTime.push(t);
  //   let res = 1;
  for (let index = this.pingTime.length - 2; index >= 0; index--) {
    if (this.pingTime[index] < t - 3000) {
      this.pingTime = this.pingTime.splice(index + 1);
      break;
    }
  }
  return this.pingTime.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
var recentCounter = new RecentCounter();
var res1 = recentCounter.ping(1); // requests = [1]，范围是 [-2999,1]，返回 1
var res2 = recentCounter.ping(100); // requests = [1, 100]，范围是 [-2900,100]，返回 2
var res3 = recentCounter.ping(3001); // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
var res4 = recentCounter.ping(3002); // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
console.log(recentCounter);
console.log(res1, res2, res3, res4);
