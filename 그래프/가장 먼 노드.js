// url: https://school.programmers.co.kr/learn/courses/30/lessons/49189
// 그래프 + BFS

function solution(n, edge) {
  const connects = new Array(n).fill().map((_) => []);
  for (const [from, to] of edge) {
    connects[from - 1].push(to - 1);
    connects[to - 1].push(from - 1);
  }

  const visited = [];
  visited.push(1);
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

  return visited.filter((el) => el === max).length;
}
