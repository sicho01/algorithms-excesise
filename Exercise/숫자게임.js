// url: https://school.programmers.co.kr/learn/courses/30/lessons/12987

// 7,5,3,1
// 2,2,6,8
function solution(A, B) {
  const n = A.length;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  let answer = 0;
  for (const a of A) {
    const b = B.at(-1);
    if (a < b) {
      answer++;
      B.pop();
    }
  }
  return answer;
}
