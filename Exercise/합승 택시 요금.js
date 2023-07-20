// url: https://school.programmers.co.kr/learn/courses/30/lessons/72413
// 그래프, DP, 플로이드-와샬 알고리즘

function solution(n, s, a, b, fares) {
  const board = new Array(n).fill().map((_) => new Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    board[i][i] = 0;
  }

  fares.forEach((pos) => {
    const [x, y, weight] = pos;
    board[x - 1][y - 1] = weight;
    board[y - 1][x - 1] = weight;
  });

  // 플로이드-와샬 algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] > board[i][k] + board[k][j])
          board[i][j] = board[i][k] + board[k][j];
      }
    }
  }

  let answer = board[s - 1][a - 1] + board[s - 1][b - 1];
  for (let i = 0; i < n; i++) {
    const shortest = board[s - 1][i] + board[i][a - 1] + board[i][b - 1];
    answer = Math.min(answer, shortest);
  }

  return answer;
}
