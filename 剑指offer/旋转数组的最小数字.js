// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] > numbers[index + 1]) {
      return numbers[index + 1];
    }
  }
  return numbers[0];
};
let nums = [3, 4, 5, 1, 2];
console.log(minArray(nums));
