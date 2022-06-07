/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  const ipv4 = "IPv4";
  const ipv6 = "IPv6";
  const neither = "Neither";
  if (queryIP.indexOf(".") > 0) {
    const arr = queryIP.split(".");
    for (let index = 0; index < arr.length; index++) {
      const element = Number(arr[index]);
      const reg = /^[0-9]+$/;
      if(arr[index].length == 0){
          return neither
      }
      for (let i = 0; i < arr[index].length; i++) {
          if (!reg.test(arr[index][i])) {
          return neither;
        }
      }
      if (element > 255 || element < 0) {
        return neither;
      }
      if (arr[index].length > 1 && arr[index][0] == "0") {
        return neither;
      }
    }
    return ipv4;
  } else {
    const arr = queryIP.split(":");
    const reg = /^[A-Fa-f0-9]+$/;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element.length > 4 || element.length == 0) {
        return neither;
      }
      for (let i = 0; i < element.length; i++) {
        if (!reg.test(element[i])) {
          return neither;
        }
      }
    }
    return ipv6;
  }
};
// @lc code=end
console.log(validIPAddress("1.1.1.1."));
