// url: https://school.programmers.co.kr/learn/courses/30/lessons/42885
// sorting 후 가장 몸무게가 적은 사람과 많은 사람의 합을 limit과 비교

function solution(people, limit) {
  people = people.sort((a, b) => a - b);
  let result_count = 0;
  while (people.length) {
    if (people.at(0) + people.at(-1) <= limit) {
      people.shift();
    }
    people.pop();
    result_count++;
  }
  return result_count;
}
