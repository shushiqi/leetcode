//https://leetcode-cn.com/problems/find-missing-observations/
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  let rollsCount = 0,
    count = 0,
    left = 0;
  let arr = [];
  count = mean * (rolls.length + n);

  rolls.forEach((item) => {
    rollsCount += item;
  });

  left = count - rollsCount;
  if (left < n || left > 6 * n) {
    return [];
  } else {
    let mod = left % n;
    let ava = (left - mod) / n;
    arr.length = n;
    arr.fill(ava, 0);
    arr = leftHelpler(arr, mod)
    if (arr[n - 1] > 6) {
      return [];
    }
    return arr;
  }
};

function leftHelpler(arr, mod) {
  for (let index = 0; index < arr.length; index++) {
    if (mod > 0) {
      arr[index]++;
      mod--
    }
  }
  return arr
}

let rolls = [
    4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1,
    5, 4, 3, 5, 1, 5,
  ],
  mean = 4,
  n = 40;
console.log(missingRolls(rolls, mean, n));
