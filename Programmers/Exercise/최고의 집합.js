// url: https://school.programmers.co.kr/learn/courses/30/lessons/12938
// level3라는데.. level2가 적당할듯.

function solution(n, s) {
  const result = [];
  while (n >= 1) {
    if (n > s) {
      return [-1];
    }
    if (s % n === 0) {
      result.push(...new Array(n).fill(s / n));
      break;
    }
    const item = Math.ceil(s / n);
    result.push(item);
    s -= item;
    n--;
  }

  return result.sort((a, b) => a - b);
}
