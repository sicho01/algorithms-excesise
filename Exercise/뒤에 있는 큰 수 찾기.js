// url: https://school.programmers.co.kr/learn/courses/30/lessons/154539
// stack이라는데..모르겄다..

function solution(numbers) {
  const results = [];
  let max = -1;
  numbers.reverse();

  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      max = numbers.at(i);
      results.push(-1);
      continue;
    }
    if (numbers.at(i) < numbers.at(i - 1)) {
      max = numbers.at(i - 1);
      results.push(max);
      continue;
    }

    if (numbers.at(i) > max) {
      max = numbers.at(i);
      results.push(-1);
      continue;
    } else {
      results.push(max);
    }
  }

  return results.reverse();
}

// 이거라는데... 모르겠넹..
function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}
