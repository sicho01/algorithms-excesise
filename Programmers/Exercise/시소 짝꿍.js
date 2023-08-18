// url: https://school.programmers.co.kr/learn/courses/30/lessons/152996
// memoization
// 중복 제거하고 + result에 memoization

function solution(weights) {
  let obj = {};
  let count = 0;
  for (const num of weights) {
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      count += obj[num];
      obj[num] += 1;
    }
  }

  const arr = Object.keys(obj);
  const result = {};

  for (let i = 2; i <= 4; i++) {
    arr.forEach((el) => {
      let temp = el * i;
      if (result[temp] === undefined) {
        result[temp] = obj[el];
      } else {
        count += result[temp] * obj[el];
        result[temp] += obj[el];
      }
    });
  }
  return count;
}
