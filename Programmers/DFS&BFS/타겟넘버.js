// url: https://school.programmers.co.kr/learn/courses/30/lessons/43165
// level2

function solution(numbers, target) {
  // 값을 더하고 빼는 과정에서 음수가 나올수 있으므로
  // 숫자의 최대 제한사항인  50 * 20 을 기준으로 dp테이블을 잡는다.
  // dp[i][j] == numbers[i]까지 계산한 후 j를 만드는 방법의 수
  const dp = Array.from({ length: numbers.length }, () => Array(2001).fill(0));

  // 초기테이블 세팅
  // ex) 만약 첫 요소가 2일 경우  -2을 만드는 가지수와 +2를 만드는 가지수를 dp테이블에 추가
  // ex) dp[0][998] =1 , dp[0][1002] = 1

  dp[0][1000 - numbers[0]] = 1;
  dp[0][1000 + numbers[0]] = 1;
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < 2001; j++) {
      // 요소를 계산하기전 , 해당 수를 만드는 가지수가 있는 경우
      // 가지수를 해당 수와 현재 요소를 계산한 경우에 더해준다.
      if (dp[i - 1][j] > 0) {
        dp[i][j - numbers[i]] += dp[i - 1][j];
        dp[i][j + numbers[i]] += dp[i - 1][j];
      }
    }
  }
  // 모든 요소를 계산하고  타겟이 만들어진 갯수를 리턴한다.
  return dp[numbers.length - 1][1000 + target];
}

// example: numbers: [1, 1, 1, 1, 1]	target: 3
//
//          0
//    -1        +1
//  -1  +1    -1  +1
//  ...
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function DFS(level, sum) {
    if (level === length) {
      if (sum === target) {
        answer++;
      }
    } else {
      DFS(level + 1, sum + numbers[level]);
      DFS(level + 1, sum - numbers[level]);
    }
  }

  DFS(0, 0);
  return answer;
}
