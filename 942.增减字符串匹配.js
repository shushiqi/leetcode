/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const res = []
    let DNum = s.length , INum = 0
    for (let i = 0; i < s.length+1; i++) {
        if (s[i] == "I") {
            res.push(INum)
            INum++
        } else {
            res.push(DNum)
            DNum--
        }
    }
    return res
};
// @lc code=end

