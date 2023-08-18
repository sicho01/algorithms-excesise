// url: https://school.programmers.co.kr/learn/courses/30/lessons/1844
// BFS: 최단거리를 구해야 할 때는 BFS -> DFS와 달리 노드에서 가까운 곳부터 찾기 때문에 최단거리 구할 때 용이.

function solution(maps) {
  const [xLength, yLength] = [maps[0].length, maps.length];
  const [destX, destY] = [xLength - 1, yLength - 1];
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [curX, curY, count] = queue.shift();
    if (curX === destX && curY === destY) {
      return count;
    }

    for (const [dx, dy] of moves) {
      const nextX = curX + dx;
      const nextY = curY + dy;
      const isInRange = nextX >= 0 && nextY >= 0 && nextX < xLength && nextY < yLength && maps[nextY][nextX] === 1;

      if (isInRange) {
        queue.push([nextX, nextY, count + 1]);
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
