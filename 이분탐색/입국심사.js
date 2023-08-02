// url: https://school.programmers.co.kr/learn/courses/30/lessons/43238
// level 3
// n이 1,000,000,000, 10억임. 비정상적으로 높을 땐, 이분탐색 고려

function solution(n, times) {
  times.sort((a, b) => a - b);
  const maxWait = times.at(-1);

  let start = 1;
  let end = maxWait * n;
  let answer = end;

  while (start <= end) {
    let count = 0;
    let mid = Math.ceil((start + end) / 2);
    for (const time of times) {
      count += Math.floor(mid / time);
      if (count >= n) {
        answer = Math.min(mid, answer);
        break;
      }
    }
    if (count >= n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}
