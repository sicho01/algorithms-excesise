// url: https://school.programmers.co.kr/learn/courses/30/lessons/154540
// dfs

function mySolution(maps) {
  const results = [];
  const xLength = maps[0].length;
  const visited = Array.from(Array(maps.length), () =>
    new Array(xLength).fill(false)
  );
  const moves = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const dfs = (x, y) => {
    const stayDays = maps[x][y];
    if (stayDays === "X" || visited[x][y]) {
      return undefined;
    }

    visited[x][y] = true;

    const moveResults = [];
    for (let _i = 0; _i < moves.length; _i++) {
      const [i, j] = moves[_i];
      const nextX = x + i;
      const nextY = y + j;
      if (nextX < 0 || nextY < 0 || nextX >= moves.length || nextY >= xLength) {
        moveResults.push(undefined);
        continue;
      }

      const nextStayDays = maps[nextX][nextY];

      if (nextStayDays === "X" || visited[nextX][nextY]) {
        moveResults.push(undefined);
        continue;
      }

      const nextDFS = dfs(nextX, nextY);
      moveResults.push(nextDFS);
    }

    return moveResults.reduce(
      (acc, cur) => Number(acc) + Number(cur ?? 0),
      Number(stayDays)
    );
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < xLength; j++) {
      if (!visited[i][j]) {
        const value = dfs(i, j);
        if (value) {
          results.push(value);
        }
      }
    }
  }

  return results.length > 0 ? results.sort((a, b) => a - b) : [-1];
}

// 다른 사람 풀이
function solution(maps) {
  const result = [];
  maps = maps.map((m) => m.split(""));

  const dfs = (dx, dy) => {
    if (
      dx < 0 ||
      dy < 0 ||
      dx >= maps.length ||
      dy >= maps[0].length ||
      maps[dx][dy] === "X"
    ) {
      return 0;
    }

    const now = parseInt(maps[dx][dy]);
    maps[dx][dy] = "X";
    return (
      now +
      dfs(dx - 1, dy) +
      dfs(dx + 1, dy) +
      dfs(dx, dy - 1) +
      dfs(dx, dy + 1)
    );
  };

  for (let x = 0; x < maps.length; x += 1) {
    for (let y = 0; y < maps[x].length; y += 1) {
      if (maps[x][y] !== "X") {
        result.push(dfs(x, y));
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
