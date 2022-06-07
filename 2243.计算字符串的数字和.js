/*
 * @lc app=leetcode.cn id=2243 lang=javascript
 *
 * [2243] 计算字符串的数字和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var digitSum = function (s, k) {
    let str = s
    while (str.length > k) {
        let cur = 0
        const arr = []
        for (let i = 0; i < str.length; i++) {
            if (i==0||i % k != 0) {
                console.log('str[i]: ', i,str[i], typeof str[i],Number(str[i]),typeof Number(str[i]));
                cur += Number(str[i])
                console.log('cur: ', cur,typeof cur);
            } else {
                arr.push(cur)
                console.log('arr: ', arr);
                cur = ""
            }
        }
        str = arr.join("")
    }
    return str
};
  // @lc code=end
  console.log(digitSum("11111222223",3));