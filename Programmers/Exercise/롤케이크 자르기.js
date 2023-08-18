// url: https://school.programmers.co.kr/learn/courses/30/lessons/132265
// hash..

function solution(topping) {
  let result = 0;

  let leftInfo = { kinds: 0 };
  let rightInfo = { kinds: [...new Set(topping)].length }; // 중복 없애는 법.
  topping.forEach((item) => {
    if (rightInfo[item] === undefined) {
      rightInfo[item] = 1;
    } else {
      rightInfo[item]++;
    }
    leftInfo[item] = 0;
  });

  for (let i = 0; i < topping.length; i++) {
    const item = topping[i];

    // left side
    if (leftInfo[item] === 0) {
      leftInfo.kinds++;
    }
    leftInfo[item]++;

    // right side
    rightInfo[item]--;
    if (rightInfo[item] === 0) {
      rightInfo.kinds--;
    }

    if (rightInfo.kinds === leftInfo.kinds) {
      result++;
    }
  }
  return result;
}
