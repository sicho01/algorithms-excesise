// url: https://school.programmers.co.kr/learn/courses/30/lessons/42626
// level 2

function solution(scoville, K) {
  scoville.sort((a, b) => a - b);
  let answer = 0;

  while (true) {
    const first = scoville.shift();
    const second = scoville.shift();

    const next = first + second * 2;
    const index = scoville.findIndex(food => food >= next);
    if (index >= 0) {
      scoville.splice(index, 0, next);
    } else {
      scoville.push(next);
    }
    answer++;
    if (scoville.at(0) >= K) {
      break;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
