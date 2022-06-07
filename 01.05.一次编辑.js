/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  if (Math.abs(first.length - second.length) > 1) {
    return false;
  }
  let longStr, shortStr;
  first.length > second.length ? (longStr = first) : (longStr = second);
  first.length > second.length ? (shortStr = second) : (shortStr = first);
console.log(longStr, shortStr);
  let map = new Map();

  for (let i = 0; i < longStr.length; i++) {
    if (map.has(longStr[i])) {
      map.set(longStr[i], map.get(longStr[i]) + 1);
    } else {
      map.set(longStr[i], 1);
    }
  }
  console.log(map);
  for (let i = 0; i < shortStr.length; i++) {
    if (map.has(shortStr[i])) {
      map.get(shortStr[i]) == 1
        ? map.delete(shortStr[i])
        : map.set(shortStr[i], map.get(shortStr[i]) - 1);
    }
  }
  console.log(map);
  if (map.size >= 2) {
    return false;
  }
  return true;
};
console.log(oneEditAway("ab", "bc"));
