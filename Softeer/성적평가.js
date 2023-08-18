// url: https://softeer.ai/practice/result.do?eventIdx=1&psProblemId=1309&submissionSn=SW_PRBL_SBMS_250481
// level 3
// hash

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const TEST_NUMBER = 3;
const MAX_SCORE = 1000;

rl.on("line", function (line) {
  line ? input.push(line) : rl.close();
}).on("close", function () {
  const N = Number(input.shift());
  const testScoreStr = [];
  const testResultSet = [[], [], [], []]; // [test1, test2, test3, total]
  const scoreCountSet = [{}, {}, {}, {}];

  for (let testIndex = 0; testIndex < TEST_NUMBER; testIndex++) {
    testScoreStr[testIndex] = input.shift().split(" ");
  }

  const initScoreSet = (testIndex, score) => {
    testResultSet[testIndex].push(score);
    if (scoreCountSet[testIndex][score] === undefined) {
      scoreCountSet[testIndex][score] = 1;
    } else {
      scoreCountSet[testIndex][score]++;
    }
  };

  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let testIndex = 0; testIndex < TEST_NUMBER; testIndex++) {
      const score = Number(testScoreStr[testIndex][i]);
      initScoreSet(testIndex, score);
      sum += score;
    }
    initScoreSet(3, sum);
  }

  const rankByScoreSet = [{}, {}, {}, {}];
  for (let testIndex = 0; testIndex < TEST_NUMBER; testIndex++) {
    let rank = 1;
    for (let score = MAX_SCORE; score >= 0; score--) {
      if (scoreCountSet[testIndex][score] !== undefined) {
        rankByScoreSet[testIndex][score] = rank;
        rank += scoreCountSet[testIndex][score];
      }
    }
  }

  let rank = 1;
  for (let score = MAX_SCORE * TEST_NUMBER; score >= 0; score--) {
    if (scoreCountSet[TEST_NUMBER][score] !== undefined) {
      rankByScoreSet[TEST_NUMBER][score] = rank;
      rank += scoreCountSet[TEST_NUMBER][score];
    }
  }

  const results = [[], [], [], []];
  for (let i = 0; i < N; i++) {
    results[0].push(rankByScoreSet[0][testResultSet[0][i]]);
    results[1].push(rankByScoreSet[1][testResultSet[1][i]]);
    results[2].push(rankByScoreSet[2][testResultSet[2][i]]);
    results[3].push(rankByScoreSet[3][testResultSet[3][i]]);
  }

  console.log(results[0].join(" "));
  console.log(results[1].join(" "));
  console.log(results[2].join(" "));
  console.log(results[3].join(" "));
});
