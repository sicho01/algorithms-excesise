// url: https://softeer.ai/practice/result.do?eventIdx=1&psProblemId=408&submissionSn=SW_PRBL_SBMS_250491
// level 2

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  line ? input.push(line) : rl.close();
}).on("close", function () {
  const items = input.shift().split(" ").map(Number);
  const N = items.length;

  const check = (item1, item2) => item1 > item2; // true: ascending, false: descending

  let result = check(items[0], items[1]);
  let answer = result ? "ascending" : "descending";
  for (let i = 2; i < N; i++) {
    const c = check(items[i - 1], items[i]);
    if (c !== result) {
      answer = "mixed";
      break;
    }
  }
  console.log(answer);
});
