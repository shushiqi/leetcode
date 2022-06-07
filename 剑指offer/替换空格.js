// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let arr = s.split("")
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element == " ") {
            arr[index] = "%20"
        }
    }
    return arr.join("")


};
// 使用js的API
var replaceSpace2 = function(s) {
    return s.replaceAll(" ", "%20")
};