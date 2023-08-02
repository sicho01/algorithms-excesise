// url: https://school.programmers.co.kr/learn/courses/30/lessons/67259
// BFS

function solution(board) {
  const answers = [];
  const queue = [];
  if (board[0][1] === 0) {
    queue.push({ x: 1, y: 0, dir: "right", cost: 100 });
  }
  if (board[1][0] === 0) {
    queue.push({ x: 0, y: 1, dir: "down", cost: 100 });
  }

  while (queue.length) {
    const { x, y, dir, cost } = queue.shift();
    // condition
    // 1. in of range
    // 2. less cost with dir
  }
}

const arg = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
// const arg = [[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0]];
// const arg = [[0, 0, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]];
// const arg = [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 1], [0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0]];

// 1. 900
// 2. 3800
// 3. 2100
// 4. 3200

console.log(solution(arg));
