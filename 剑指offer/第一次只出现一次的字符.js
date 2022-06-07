/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let arr = new Array(26).fill(0);
  for (const c of s) {
    let index = c.charCodeAt() - 97;
    arr[index]++;
  }
  for (let c of s) {
    let index = c.charCodeAt() - 97;
    if (arr[index] == 1) {
      return c;
    }
  }
  return " ";
};
console.log(firstUniqChar("abaccdeff"));
