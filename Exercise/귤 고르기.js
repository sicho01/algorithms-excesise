// url: https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  let result = 0;
  const map = {};

  tangerine.forEach((tan) => {
    if (map[tan] === undefined) {
      map[tan] = 1;
    } else {
      map[tan]++;
    }
  });

  const kinds = Object.values(map).sort((a, b) => b - a);
  for (const size of kinds) {
    k -= size;
    result++;
    if (k <= 0) {
      return result;
    }
  }
  return result;
}
