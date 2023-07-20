// url: https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 어렵진 않은데.. toString으로 이진변환 쉽게 가능하구낭..

// 내꺼
function toBinary(digits) {
  const result = [];
  while (digits >= 1) {
    result.push((digits % 2).toString());
    digits = Math.floor(digits / 2);
  }
  return result.reverse().join("");
}

function solution(s) {
  let count = 0;
  let remove = 0;

  while (s !== "1") {
    const convertedStr = [];
    [...s].forEach((char) => {
      if (char === "1") {
        convertedStr.push(char);
      } else {
        remove++;
      }
    });

    s = toBinary(convertedStr.length);
    count++;
  }
  return [count, remove];
}

// 다른 사람꺼
function solution(s) {
  let convertCount = 0,
    deleteZeroCount = 0;
  while (s !== "1") {
    const beforeSLength = s.length;
    const nowSLength = s.replace(/0/gi, "").length;

    convertCount++;
    deleteZeroCount += beforeSLength - nowSLength;

    s = nowSLength.toString(2);
  }
  const answer = [convertCount, deleteZeroCount];
  return answer;
}
