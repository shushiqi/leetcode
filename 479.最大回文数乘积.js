/*
 * @lc app=leetcode.cn id=479 lang=javascript
 *
 * [479] 最大回文数乘积
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var largestPalindrome = function(n) {
    if (n === 1) {
        return 9;
    }
    const upper = 10 ** n - 1;
    for (let left = upper; left > upper / 10; left--) {
        let right = String(left).split('').reverse().join('');
        let p = BigInt(String(left) + right)    //得到回文数
        let x = BigInt(upper);
        while (x * x >= p) {
            if (p % x === BigInt(0)) { // x 是 p 的因子
                return p % BigInt(1337);
            }
            x--;
        }
    }
};

// @lc code=end
console.log(largestPalindrome(4));