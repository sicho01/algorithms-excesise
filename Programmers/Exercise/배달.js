// url: https://school.programmers.co.kr/learn/courses/30/lessons/12978
// 플로이드-와샬, 다익스트라, DFS, ...

// 플로이다-와샬
function solution(N, road, K) {
  const map = new Array(N).fill().map((_) => new Array(N).fill(Infinity));
  for (let i = 0; i < N; i++) {
    map[i][i] = 0;
  }
  for (const [start, end, weight] of road) {
    map[start - 1][end - 1] = Math.min(map[start - 1][end - 1], weight);
    map[end - 1][start - 1] = Math.min(map[end - 1][start - 1], weight);
  }

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (map[i][j] > map[i][k] + map[k][j]) {
          map[i][j] = map[i][k] + map[k][j];
        }
      }
    }
  }

  return map[0].filter((weight) => weight <= K).length;
}

// 다익스트라
function solution(N, road, K) {
  const mem = new Array(N + 1).fill(Infinity);
  const routes = new Array(N + 1).fill().map((_) => new Array());

  for (const [start, end, weight] of road) {
    routes[start - 1].push({ end: end - 1, weight });
    routes[end - 1].push({ end: start - 1, weight });
  }

  const queue = [{ end: 0, weight: 0 }];
  mem[0] = 0;

  while (queue.length) {
    const { end } = queue.pop();
    const nextNodes = routes[end];

    for (const nextNode of nextNodes) {
      if (mem[nextNode.end] > mem[end] + nextNode.weight) {
        mem[nextNode.end] = mem[end] + nextNode.weight;
        queue.push(nextNode);
      }
    }
  }

  return mem.filter((weight) => weight <= K).length;
}
