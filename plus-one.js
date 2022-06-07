// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外， 这个整数不会以零开头。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1
    for (let index = digits.length - 1; index >= 0; index--) {
        if (digits[index] == 10) {
            if (index != 0) {
                digits[index] = 0
                digits[index - 1] = digits[index - 1] + 1
            } else {
                digits[index] = 0
                digits.unshift(1)
            }
        }
    }
    return digits
};
let nums = [4, 2, 9]
console.log(plusOne(nums));