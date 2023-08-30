/////////////////////////////////////////////////////////////////////////////////////////////
// 일부 테스트케이스의 마지막에 개행 문자(\n)가 포함되어 있을 수 있습니다.
// 따라서, 예상치 못한 오답 처리를 방지하기 위해서
// fs모듈을 사용하여 입력을 받을 땐, **반드시** trim()을 사용하여 여백을 제거 하거나
// readline 모듈을 통해 입력을 받으시길 바랍니다.
// 해당 내용을 숙지 하셨다면, 주석을 지우고 문제풀이를 하셔도 무방합니다.
/////////////////////////////////////////////////////////////////////////////////////////////

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let pathNumber;
const input = [];

rl.on("line", function (line) {
  if (N === undefined) {
    const firstLine = line.split(" ").map(Number);
    N = firstLine[0];
    pathNumber = firstLine[1];
  } else {
    input.push(line.split(" ").map(Number));
  }
}).on("close", function () {
  const result = new Array(N).fill(Infinity);
  const map = new Array(N).fill().map(_ => []);

  // init
  for (const [from, to, weight] of input) {
    map[from - 1].push({ to: to - 1, weight });
    map[to - 1].push({ to: from - 1, weight });
  }

  const queue = [{ to: 0, weight: 0 }];
  result[0] = 0;

  while (queue.length) {
    const { to } = queue.pop();
    const nextNodeList = map[to];

    for (const nextNode of nextNodeList) {
      if (result[nextNode.to] > Math.max(result[to], nextNode.weight)) {
        result[nextNode.to] = Math.max(result[to], nextNode.weight);
        queue.push(nextNode);
      }
    }
  }

  let minValue = result[N - 1] + 1;
  while (true) {
    if (isPrime(minValue)) {
      break;
    } else {
      minValue++;
    }
  }
  console.log(minValue);
});

function isPrime(n) {
  if (n === 1 || n === 0) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
