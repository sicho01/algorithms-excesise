// url: https://school.programmers.co.kr/learn/courses/30/lessons/49191
// level 3
// 플로이드-와샬
// n이 100명 이하니까... n^3이라도 1000000 밖에 안 됨.

function solution(n, results) {
  const map = new Array(n).fill().map(_ => new Array(n).fill(Infinity));

  // init_1
  for (let i = 0; i < n; i++) {
    map[i][i] = 0;
  }

  // init_2
  for (const [a, b] of results) {
    map[a - 1][b - 1] = 1;
    map[b - 1][a - 1] = -1;
  }

  // 플로이드-와샬 algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (map[i][k] === 1 && map[k][j] === 1) {
          map[i][j] = 1;
        }
        if (map[i][k] === -1 && map[k][j] === -1) {
          map[i][j] = -1;
        }
      }
    }
  }

  return map.filter(i => !i.some(j => j === Infinity)).length;
}
