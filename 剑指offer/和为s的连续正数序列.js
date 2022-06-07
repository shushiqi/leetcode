// https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let res = [];
  for (let index = 1; index < (target - 1) / 2; index++) {
    let a = index,
      temp = [a];
    while (a <= (target - 1) / 2) {
      sum = temp.reduce(function (prev, cur, index, array) {
        return prev + cur;
      });
      if (sum == target) {
        res.push(temp);
        break;
      }
      a++;
      temp.push(a);
    }
  }
  return res;
};
console.log(findContinuousSequence(154));
