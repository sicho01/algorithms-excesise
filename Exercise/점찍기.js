// url: https://school.programmers.co.kr/learn/courses/30/lessons/140107

function solution(k, d) {
  const x = parseInt(d / k); // d = 5, k = 2 -> x = 2
  let result = 0;

  for (let i = 0; i <= x; i++) {
    const ak = i * k; // ak = 0, 2, 4
    const y = Math.sqrt(d * d - ak * ak); // y = 5, root(21), 3
    result += Math.floor(y / k) + 1;
  }
  return result;
}
