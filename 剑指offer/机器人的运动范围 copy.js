/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
  const visited = Array(m).fill(0).map(() => Array(n).fill(false));
  const dfs = (i, j) => {
      if(i >= m || j >= n || sum(i) + sum(j) > k || visited[i][j])
          return 0;
      visited[i][j] = true;
      return 1 + dfs(i + 1, j) + dfs(i, j + 1);
  }

  return dfs(0, 0);
};

const sum = (num) =>{
  let total = 0;
  while(num) {
      total += num % 10;
      num = Math.floor(num / 10);
  }
  return total;
}
console.log(movingCount(11,8,16));