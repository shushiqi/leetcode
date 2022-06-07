/*
 * @lc app=leetcode.cn id=780 lang=javascript
 *
 * [780] 到达终点
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
 var reachingPoints = function(sx, sy, tx, ty) {
    while(tx > sx && ty > sy) {
        if(tx > ty)
            tx %= ty
        else
            ty %= tx
    }
    return (tx == sx && ty >= sy && (ty - sy) % sx == 0) || (ty == sy && tx >= sx && (tx - sx) % sy == 0)
};

// @lc code=end
console.log(reachingPoints(1, 1, 1000000000, 1));
