// url: https://school.programmers.co.kr/learn/courses/30/lessons/12904
// DP 이용하면 됨.

function solution(s) {
  const n = s.length;
  const memo = new Array(n).fill().map((_) => new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    memo[i][i] = true;
  }
  let answer = 1;

  // ex: "abbc"
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      memo[i][i + 1] = true;
      answer = 2;
    }
  }

  for (let length = 2; length <= n; length++) {
    for (let start = 0; start <= n - length; start++) {
      const end = start + length - 1;
      if (s[start] === s[end] && memo[start + 1][end - 1]) {
        memo[start][end] = true;
        answer = length;
      }
    }
  }

  return answer;
}
