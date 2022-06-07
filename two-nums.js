/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        for (let i = index + 1; i < nums.length; i++) {

            if (nums[index] + nums[i] == target) {
                return [index, i]
            }
        }
    }
    return null
};

// 使用map
function twoSum2(nums, target) {
    let map = new Map()
    for (let index = 0; index < nums.length; index++) {

        let x = target - nums[index]
        if (map.has(x)) {
            return [map.get(x), index]
        }
        map.set(nums[index], index)

    }
}