// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
// 数组中某些数字是重复的， 但不知道有几个数字重复了， 也不知道每个数字重复了几次。 
// 请找出数组中任意一个重复的数字。
/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */
// 使用Set
var findRepeatNumber = function(nums) {
    let set = new Set()
    for (let index = 0; index < nums.length; index++) {
        let size = set.size
        set.add(nums[index])
        if (set.size == size) {
            return nums[index]
        }
    }
};
// 排序后比较
var findRepeatNumber2 = function(nums) {
    nums.sort((prev, next) => {
        return prev - next
    })
    for (let index = 0; index < nums.length - 1; index++) {
        const element = nums[index];
        if (element == nums[index + 1]) {
            return element
        }
    }
};