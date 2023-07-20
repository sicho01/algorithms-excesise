// url: https://school.programmers.co.kr/learn/courses/30/lessons/43236
// binary search

function solution(distance, rocks, n) {
  // 2, 11, 14, 17, 21, [25]
  rocks.sort((a, b) => a - b);
  let left = 0;
  let right = distance;
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    let removeCount = 0;
    let prev = 0;

    for (const rock of [...rocks, distance]) {
      if (rock - prev <= mid) {
        removeCount++;
      } else {
        prev = rock;
      }
    }

    if (removeCount > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer = Math.max(left, answer);
    }
  }
  return answer;
}
