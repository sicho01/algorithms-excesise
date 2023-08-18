// url: https://school.programmers.co.kr/learn/courses/30/lessons/42746
// level 2
// string array의 sort

function solution(numbers) {
  let answer = numbers
    .map(num => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}
