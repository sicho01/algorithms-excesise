// url: https://school.programmers.co.kr/learn/courses/30/lessons/42897
// 스티커 모으기(2)랑 같은 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12971
// 첫번째부터 계산 + 두번째부터 계산으로 나누어 풀면 됨.
// level 4라는데... 아닌 듯.

function solution(money) {
  const n = money.length;
  const dp1 = new Array(n).fill(0);
  const dp2 = new Array(n).fill(0);

  dp1[0] = money[0];
  dp1[1] = money[0];
  dp2[1] = money[1];

  for (let i = 2; i < n; i++) {
    if (i !== n - 1) {
      dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
    } else {
      dp1[i] = dp1[i - 1];
    }

    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  return Math.max(dp1[n - 1], dp2[n - 1]);
}
