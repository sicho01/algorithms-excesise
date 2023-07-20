// url: https://school.programmers.co.kr/learn/courses/30/lessons/181188
// greedy

function solution(targets) {
  let answer = 0;
  let prev = -1;

  targets
    .sort((a, b) => a[1] - b[1])
    .forEach((target) => {
      const [start, end] = target;

      if (prev <= start) {
        prev = end;
        answer++;
      }
    });

  return answer;
}
