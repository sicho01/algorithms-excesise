// url: https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  let max_h = 0;

  for (let h = 1; h <= citations.length; h++) {
    const citation_count = citations.filter((count) => count >= h).length;
    if (citation_count >= h) {
      max_h = Math.max(max_h, h);
    }
  }

  return max_h;
}
