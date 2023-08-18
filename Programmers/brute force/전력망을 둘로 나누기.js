// url: https://school.programmers.co.kr/learn/courses/30/lessons/86971
// brute-force
// level2

function solution(n, wires) {
  const map = new Array(n).fill().map(_ => []);
  for (const [from, to] of wires) {
    map[from - 1].push(to - 1);
    map[to - 1].push(from - 1);
  }

  const countTreeNodes = deleteNode => {
    const visited = new Array(n).fill(false);
    const [deleteNodeFrom, deleteNodeTo] = deleteNode;
    const nextNodes = map[deleteNodeFrom].filter(node => node !== deleteNodeTo);
    const queue = [...nextNodes];
    visited[deleteNodeFrom] = true;

    while (queue.length) {
      const currentNode = queue.shift();
      visited[currentNode] = true;
      const nextNodes = map[currentNode];
      for (const nextNode of nextNodes) {
        if (!visited[nextNode]) {
          queue.push(nextNode);
        }
      }
    }
    return visited.filter(n => n).length;
  };

  const result = [];
  for (const [from, to] of wires) {
    const count = countTreeNodes([from - 1, to - 1]);
    const left = n - count;
    result.push(Math.abs(count - left));
  }
  return Math.min(...result);
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
