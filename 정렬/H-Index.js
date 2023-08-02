// url: https://school.programmers.co.kr/learn/courses/30/lessons/42747
// level 2

function solution(citations) {
  let answer = 0;

  for (let h = 1; h <= citations.length; h++) {
    const citationCount = citations.filter(count => count >= h).length;
    if (citationCount >= h) {
      answer = Math.max(answer, h);
    }
  }

  return answer;
}
