// url: https://school.programmers.co.kr/learn/courses/30/lessons/49189

// 그래프 + BFS
// BFS로 node로 최단 거리 array 만듬 -> max 값 구한 뒤 -> 노드 개수 구하면 됨.
function solution(n, edge) {
  const connects = new Array(n).fill().map(_ => []);
  for (const [from, to] of edge) {
    connects[from - 1].push(to - 1);
    connects[to - 1].push(from - 1);
  }

  const visited = [1];
  const queue = [0];
  while (queue.length) {
    const cur = queue.shift();

    for (const next of connects[cur]) {
      if (!visited[next]) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  const max = Math.max(...visited);

  return visited.filter(el => el === max).length;
}

// 플로이드-와샬로 하면 core dump 에러가 생김.
function solution(n, edge) {
  const connects = new Array(n).fill().map(_ => new Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    connects[i][i] = 0;
  }

  for (const [from, to] of edge) {
    connects[from - 1][to - 1] = 1;
    connects[to - 1][from - 1] = 1;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (connects[i][j] > connects[i][k] + connects[k][j]) {
          connects[i][j] = connects[i][k] + connects[k][j];
        }
      }
    }
  }

  const max = Math.max(...connects[0]);

  return connects[0].filter(el => el === max).length;
}
