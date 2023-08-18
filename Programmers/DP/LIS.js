// LIS: Longest Increasing Subsequence
// ref url: https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jh20s&logNo=221310955726

function solution(n, arr) {
  if (n === 1) {
    return 1;
  }

  const DP = new Array(n).fill(0);
  let answer = 0;

  DP[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && DP[j] > max) {
        max = DP[j];
      }
    }
    DP[i] = max + 1;
    answer = Math.max(answer, DP[i]);
  }
  return answer;
}

const n = 8;
const arr = [5, 3, 7, 8, 6, 2, 9, 4];

console.log(solution(n, arr));
