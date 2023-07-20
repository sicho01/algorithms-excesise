// url: https://school.programmers.co.kr/learn/courses/30/lessons/161988
// 부분 수열의 최대 합: https://shoark7.github.io/programming/algorithm/4-ways-to-get-subarray-consecutive-sum
// DP

function solution(sequence) {
  const cache1 = new Array(sequence.length).fill(-Infinity);
  const cache2 = new Array(sequence.length).fill(-Infinity);
  cache1[0] = sequence[0];
  cache2[0] = -sequence[0];
  let max1 = cache1[0];
  let max2 = cache2[0];
  for (let i = 1; i < sequence.length; i++) {
    const pulse = i % 2 === 0 ? 1 : -1;
    cache1[i] = Math.max(0, cache1[i - 1]) + sequence[i] * pulse;
    cache2[i] = Math.max(0, cache2[i - 1]) + sequence[i] * -pulse;
    max1 = Math.max(max1, cache1[i]);
    max2 = Math.max(max2, cache2[i]);
  }
  return Math.max(max1, max2);
}
