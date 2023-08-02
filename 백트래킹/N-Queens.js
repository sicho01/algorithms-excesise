// url: https://school.programmers.co.kr/learn/courses/30/lessons/12952
// level 2
// 백트래킹

function solution(n) {
  let answer = 0;
  let array = new Array(n).fill(0);

  const isValid = level => {
    const curNode = array[level];
    if (level === 0) {
      return true;
    }

    for (let i = 0; i < level; i++) {
      const prevNode = array[i];

      if (curNode === prevNode) {
        return false;
      }
      if (Math.abs(level - i) === Math.abs(prevNode - curNode)) {
        return false;
      }
    }
    return true;
  };

  const backTracking = level => {
    if (level === n) {
      answer++;
      return;
    }

    for (let i = 0; i < n; i++) {
      array[level] = i;
      if (isValid(level)) {
        backTracking(level + 1);
      }
    }
  };

  backTracking(0);
  return answer;
}
