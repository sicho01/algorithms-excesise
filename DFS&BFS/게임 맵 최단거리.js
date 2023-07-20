// url: https://school.programmers.co.kr/learn/courses/30/lessons/1844
// BFS: 최단거리를 구해야 할 때는 BFS -> DFS와 달리 노드에서 가까운 곳부터 찾기 때문에 최단거리 구할 때 용이.

function solution(maps) {
  const yLen = maps.length;
  const xLen = maps[0].length;
  const goalY = yLen - 1;
  const goalX = xLen - 1;
  const dy = [0, 0, 1, -1];
  const dx = [-1, 1, 0, 0];

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (curY === goalY && curX === goalX) {
      return move;
    }

    for (let i = 0; i < 4; i++) {
      const nextY = curY + dy[i];
      const nextX = curX + dx[i];
      if (
        nextY >= 0 &&
        nextY < yLen &&
        nextX >= 0 &&
        nextX < xLen &&
        maps[nextY][nextX] === 1
      ) {
        queue.push([nextY, nextX, move + 1]);
        maps[nextY][nextX] = 0;
      }
    }
  }

  return -1;
}

// BFS
//
// const queue = [];
// queue.push(start_node);
//
// while (queue.length) {
//   const cur = queue.shift();
//
//   // 최단거리 condition
//   if (condition) {
//     return cur.value;
//   }
//
//   // node 돌면서 check
//   for (const node of nodes) {
//
//   }
// }
