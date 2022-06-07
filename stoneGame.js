/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    let arr = []
    for (let index = 0; index < stones.length; index++) {
        const element = stones[index];
        console.log((sum(arr) + element));
        if ((sum(arr) + element) % 3 == 0) {
            return false
        }
        arr.push(element)
    }
};

function sum(arr) {  
    if (arr.length == 0) return 0
    return arr.reduce(function(prev, curr, idx, arr) {     return prev + curr;   });
}

console.log(stoneGameIX([5, 1, 2, 4, 3]));