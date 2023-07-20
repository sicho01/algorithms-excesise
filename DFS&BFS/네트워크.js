// url: https://school.programmers.co.kr/learn/courses/30/lessons/43162
// DFS: 네트워크를 공유하는 경로의 특징을 저장해야 하기 때문에 DFS 사용.

function solution(n, computers) {
  let answer = 0;
  const visited = [];

  const dfs = (node) => {
    visited[node] = true;
    const computer = computers[node];
    for (let i = 0; i < computers.length; i++) {
      if (i === node) {
        continue;
      }

      if (computer[i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
