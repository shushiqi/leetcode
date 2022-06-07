// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = []
    for (let index = 0; index < numRows; index++) {
        let ret = new Array(index + 1).fill(1)
        for (let i = 1; i < ret.length - 1; i++) {
            ret[i] = arr[index - 1][i - 1] + arr[index - 1][i]
        }
        arr.push(ret)
    }
    return arr
};