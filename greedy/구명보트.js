// url: https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(people, limit) {
  people = people.sort((a, b) => a - b);
  let result_count = 0;
  while (people.length > 0) {
    if (people.at(0) + people.at(-1) <= limit) {
      people.shift();
    }
    people.pop();
    result_count++;
  }
  return result_count;
}
