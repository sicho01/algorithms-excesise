// ref URL: https://school.programmers.co.kr/learn/courses/30/lessons/42883
// level2

function solution(number, k) {
  const result = [];
  const digits = number.split("");
  const targetLength = digits.length - k;

  digits.forEach((digit, index) => {
    const remainingLength = digits.length - index;
    while (index > 0 && k > 0 && digit > result.at(-1)) {
      if (result.length + remainingLength <= targetLength) {
        break;
      }
      result.pop();
      k--;
    }
    result.push(digit);
  });

  return result.slice(0, targetLength).join("");
}
