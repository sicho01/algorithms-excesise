// url: https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const select_count = nums.length / 2;
  nums = nums.sort((a, b) => a - b);
  let mons_count = 0;

  nums.forEach((num, index) => {
    if (index === 0) {
      mons_count++;
    } else if (num !== nums.at(index - 1)) {
      mons_count++;
    }
  });

  return Math.min(mons_count, select_count);
}
