// url: https://school.programmers.co.kr/learn/courses/30/lessons/67259
// BFS + DP

const MOVE = [
  [1, 0], // right
  [-1, 0], // left
  [0, 1], // up
  [0, -1], // down
];

function solution(board) {
  const queue = [];
  const n = board.length;
  const DP = new Array(n).fill().map(_ => new Array(n).fill().map(_ => new Array(4).fill(Infinity)));

  const isValidMove = (x, y) => {
    if (x === 0 && y === 0) {
      return false;
    }
    if (x < 0 || x >= n) {
      return false;
    }
    if (y < 0 || y >= n) {
      return false;
    }
    if (board[y][x] === 1) {
      return false;
    }
    return true;
  };

  const checkAndSetMove = (currentNode, moveIndex) => {
    const [nextXDiff, nextYDiff] = MOVE[moveIndex];
    const { x, y, dirIndex, cost } = currentNode;
    const isOppositeDirection = nextXDiff * MOVE[dirIndex][0] + nextYDiff * MOVE[dirIndex][1] === -1;
    if (isOppositeDirection) {
      return;
    }
    const isSameDirection = dirIndex === moveIndex;
    const expectedCost = cost + (isSameDirection ? 100 : 600);

    if (DP[y + nextYDiff][x + nextXDiff][moveIndex] > expectedCost) {
      DP[y + nextYDiff][x + nextXDiff][moveIndex] = expectedCost;
      queue.push({ x: x + nextXDiff, y: y + nextYDiff, dirIndex: moveIndex, cost: expectedCost });
    }
  };

  if (board[0][1] === 0) {
    DP[0][1][0] = 100;
    queue.push({ x: 1, y: 0, dirIndex: 0, cost: 100 });
  }
  if (board[1][0] === 0) {
    DP[1][0][2] = 100;
    queue.push({ x: 0, y: 1, dirIndex: 2, cost: 100 });
  }

  while (queue.length) {
    const currentNode = queue.shift();

    MOVE.forEach((move, index) => {
      if (isValidMove(currentNode.x + move[0], currentNode.y + move[1])) {
        checkAndSetMove(currentNode, index);
      }
    });
  }
  return Math.min(...DP[n - 1][n - 1]);
}

// const arg = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];
// const arg = [
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 1],
//   [0, 0, 1, 0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
// ];
// const arg = [
//   [0, 0, 1, 0],
//   [0, 0, 0, 0],
//   [0, 1, 0, 1],
//   [1, 0, 0, 0],
// ];
const arg = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0],
];

// 1. 900
// 2. 3800
// 3. 2100
// 4. 3200

console.log(solution(arg));
