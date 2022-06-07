/*
 * @lc app=leetcode.cn id=467 lang=javascript
 *
 * [467] 环绕字符串中唯一的子字符串
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  let map = new Map();
  for (let i = 0; i < p.length; i++) {
    let element = p[i];
    let index = p.charCodeAt(i);
    let isEnd = false;
    isEnd = index == 122 ? true : false;
    if (!map.has(element)) {
      map.set(element, 1);
    }
    for (let j = i + 1; j < p.length; j++) {
      

      if (isEnd) {
        if (p.charCodeAt(j) == 97) {
          element = element + p[j];
          if (!map.has(element)) {
            map.set(element, 1);
          }
          index = 97;
          isEnd = false;
          
        } else {
          break;
        }
      } else {
        if (p.charCodeAt(j) == index + 1) {
          element = element + p[j];
          if (!map.has(element)) {
            map.set(element, 1);
          }
          index++;
          if (index == 122) {
            isEnd = true;
          }
        } else {
          break;
        }
      }
    }
  }
  
  return map.size;
};
// @lc code=end
findSubstringInWraproundString("zab");
