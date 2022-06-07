/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// let haystack = "aaaaa", needle = "bba"
let haystack = "aaaaa",
    needle = "bba"
var strStr = function(haystack, needle) {
    if (!needle) return 0
    let firstStr = needle.charAt(0)
    console.log('firstStr: ', firstStr);
    console.time("111");
    for (let index = 0; index < (haystack.length - needle.length) > 0 ? (haystack.length - needle.length) : 1; index++) {
        console.timeEnd("111");


        if (haystack.charAt(index) == firstStr) {
            for (let i = 0; i < needle.length; i++) {
                if (haystack.charAt(index + i) != needle.charAt(i)) {
                    break
                }
                if (haystack.charAt(index + i) == needle.charAt(i) && i == needle.length - 1) {
                    return index
                }

            }
        }

    }
    return -1
};
console.log(strStr(haystack, needle));