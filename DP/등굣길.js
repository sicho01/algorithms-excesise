// url: https://school.programmers.co.kr/learn/courses/30/lessons/42898

function solution(m, n, puddles) {
  // m: x, n: y
  const dp = new Array(n).fill().map(_ => new Array(m).fill(0));
  dp[0][0] = 1;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (y === 0 && x === 0) {
        continue;
      }

      const isPuddle =
        puddles.findIndex(([_x, _y]) => {
          const puddleX = m - _x;
          const puddleY = n - _y;
          return puddleX === x && puddleY === y;
        }) >= 0;
      if (isPuddle) {
        continue;
      }

      if (y === 0) {
        dp[y][x] = dp[y][x - 1];
      } else if (x === 0) {
        dp[y][x] = dp[y - 1][x];
      } else {
        dp[y][x] = (dp[y - 1][x] + dp[y][x - 1]) % 1000000007;
      }
    }
  }
  return dp[n - 1][m - 1];
}
