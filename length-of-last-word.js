//给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。
// 返回字符串中最后一个单词的长度。
// 单词 是指仅由字母组成、 不包含任何空格字符的最大子字符串。
//输入：s = "Hello World"
// 输出： 5
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strArr = s.split("")
    for (let index = strArr.length - 1; index >= 0; index--) {
        if (strArr[index] != " ") {
            for (let i = index; i >= 0; i--) {
                if (strArr[i] == " ") {
                    return index - i
                }
                if (i == 0) {
                    return index - i + 1
                }

            }
        }
    }
};
console.log(lengthOfLastWord("Hello World"))