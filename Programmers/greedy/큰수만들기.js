// ref URL: https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const result = [];
  const digits = number.split("");
  const target_result_length = digits.length - k;

  digits.forEach((digit, index) => {
    const remaining_index = digits.length - index;
    while (index > 0 && k > 0 && digit > result[result.length - 1]) {
      if (result.length + remaining_index <= target_result_length) {
        break;
      }
      result.pop();
      k--;
    }
    result.push(digit);
  });

  result.splice(number.length - k, k);
  return result.join("");
}
