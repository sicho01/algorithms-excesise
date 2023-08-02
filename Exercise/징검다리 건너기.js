// url: https://school.programmers.co.kr/learn/courses/30/lessons/64062#
// level3, 이분탐색
// maximum sliding window 방법도 있긴 한데.. 효율성에서 실패..

const binarySearch = (stones, mid, k) => {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] - mid <= 0) {
      count++;
    } else {
      count = 0;
    }

    if (count >= k) {
      return true;
    }
  }

  return false;
};

const solution = (stones, k) => {
  let left = 0;
  let right = 200000000;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (binarySearch(stones, mid, k)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// 참고: maximum sliding window
const solution1 = (stones, k) => {
  const n = stones.length;
  let answer = Infinity;

  for (let i = 0; i <= n - k; i++) {
    const array = stones.slice(i, i + k);
    answer = Math.min(answer, Math.max(...array));
  }

  return answer;
};
