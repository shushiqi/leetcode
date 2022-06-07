/*
 * @lc app=leetcode.cn id=388 lang=javascript
 *
 * [388] 文件的最长绝对路径
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
 var lengthLongestPath = function(input) {
    const record = new Map(), n = input.length
    let ans = 0
    for(let i = 0; i < n; i++) {
        let level = 0, len = 0, isFile = false
        while(i < n && input.charCodeAt(i) == '\t'.charCodeAt(0)) {
            level++
            i++
        }
        while(i < n && input.charCodeAt(i) != '\n'.charCodeAt(0)) {
            if(input.charCodeAt(i++) == '.'.charCodeAt(0))
                isFile = true
            len++
        }
        record.set(level, len)
        if(isFile) {
            let sum = 0
            for(let j = 0; j <= level; j++)
                sum += record.get(j)
            ans = Math.max(ans, sum + level)
        }
    }
    return ans
};
// @lc code=end

