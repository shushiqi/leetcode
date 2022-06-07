/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // for (let index = 0; index < nums.length; index++) {
    //     const element = nums[index];
    //    for (let i = index+1; i < nums.length; i++) {
    //      if(nums[i] == element){
    //          console.log(nums, index ,i);
    //          nums.splice(i,1)
    //      }
    //    }
    // }
    // return nums
    const list = Array.from(new Set(nums))
    nums.splice(list.length, nums.length - list.length)
    list.forEach((el, i) => {
        nums[i] = el
    })
    return nums.length
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums));