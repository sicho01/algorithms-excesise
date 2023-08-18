// url: https://softeer.ai/practice/result.do?eventIdx=1&submissionSn=SW_PRBL_SBMS_250504&psProblemId=392
// level3
// greedy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const lectureList = [];

rl.on("line", function (line) {
  if (!line) {
    rl.close();
    return;
  }

  if (!N) {
    N = Number(line);
  } else {
    lectureList.push(line.split(" ").map(Number));
  }
}).on("close", function () {
  lectureList.sort((a, b) => a[1] - b[1]);
  let prev = -1;
  let answer = 0;
  for (let i = 0; i < N; i++) {
    const [curStart, curFinish] = lectureList[i];
    if (prev < curStart) {
      prev = curFinish;
      answer++;
    }
  }
  console.log(answer);
});
