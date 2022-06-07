// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num.length > 1) {
        let res = 0
        for (let index = 0; index < num.length; index++) {
            res = res + num

        }
    }
    return num
};