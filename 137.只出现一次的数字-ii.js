/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/** 
 * @param {number[]} nums   
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for(let i = 0; i < 32; i++) {
        let count = 0;
        for(let j = 0; j < nums.length; j++) {
            if((nums[j] >> i) & 1) {
                count++;
            }
        }
        if(count % 3 !== 0) {
            res |= (1 << i);
        }
    }
    return res;
};
// @lc code=end

