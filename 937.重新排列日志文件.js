/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letterLog = [];
  const numberLog = [];
  for (let index = 0; index < logs.length; index++) {
    const element = logs[index];
    if (isLetterLogs(element)) {
      letterLog.push(element);
    } else {
      numberLog.push(element);
    }
  }
  letterLog.sort(letterSort);
  return letterLog.concat(numberLog);
};

function letterSort(str1, str2) {
  let log1 = str1.split(" ").slice(1).join();
  let log2 = str2.split(" ").slice(1).join();
  if (log1 == log2) {
    log1 = str1.split(" ").slice(0, 1)[0];
    log2 = str2.split(" ").slice(0, 1)[0];
  }
  for (let index = 0; index < Math.min(log1.length, log2.length); index++) {
    if (log1.charCodeAt(index) < log2.charCodeAt(index)) {
      return -1;
    } else if (log1.charCodeAt(index) > log2.charCodeAt(index)) {
      return 1;
    }
  }
  return -1
}

function isLetterLogs(str) {
  let logArr = str.split(" ").slice(1, 2);
  return 97 <= logArr[0].charCodeAt(0) && logArr[0].charCodeAt(0) <= 122;
}
// @lc code=end
console.log(
  reorderLogFiles([
    "dig1 8 1 5 1",
    "let1 art zero can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero",
  ])
);
