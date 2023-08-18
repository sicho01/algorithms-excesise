// url: https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
  // 5 -> 6,7,8,9,0,0: 6 / 4,3,2,1,0: 5
  // 6 -> 7,8,9,0,0: 5 / 5,4,3,2,1,0: 6
  // 5일때는 내려가는게, 6일때는 올라가는게 좋음.
  // test_case: 154 -> 10, 155 -> 11, 555 -> 14
  // 555: 555 -> 560 -> 600 -> 1000 -> 0: 5 + 4 + 4 + 1 = 14
  let result = 0;

  while (storey > 0) {
    const lastDigit = storey % 10;
    const secondDigit = (storey % 100) / 10;

    if (lastDigit < 5) {
      result += lastDigit;
      storey -= lastDigit;
    } else if (lastDigit === 5) {
      result += lastDigit;
      storey += secondDigit >= 5 ? lastDigit : -lastDigit;
    } else {
      const debris = 10 - lastDigit;
      result += debris;
      storey += debris;
    }

    if (storey === 10) {
      result += 1;
      storey = 0;
    }
    storey = storey / 10;
  }

  return result;
}
