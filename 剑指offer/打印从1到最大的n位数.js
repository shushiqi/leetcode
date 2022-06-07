/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let res = [];
  for (let i = 1; i <= Math.pow(10, n) - 1; i++) {
    res.push(i);
  }
  return res;
};
console.log(printNumbers(3));
