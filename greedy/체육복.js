// url: https://school.programmers.co.kr/learn/courses/30/lessons/42862
// level 1이었어...ㅡㅡ

function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  const reserveMap = new Array(n).fill(false);
  for (const reserveNode of reserve) {
    reserveMap[reserveNode - 1] = true;
  }
  const filteredLost = lost.filter(item => {
    if (reserveMap[item - 1]) {
      reserveMap[item - 1] = false;
      return false;
    }
    return true;
  });

  for (let i = 0; i < filteredLost.length; i++) {
    const lostNode = filteredLost[i];
    const left = lostNode - 1 - 1;
    const right = lostNode;

    if (reserveMap[left]) {
      reserveMap[left] = false;
    } else if (reserveMap[right]) {
      reserveMap[right] = false;
    } else {
      filteredLost[i] = -1;
    }
  }

  const failedToReserveNumber = filteredLost.filter(item => item === -1).length;
  return n - failedToReserveNumber;
}

console.log(solution(4, [3, 1], [2, 4]));

// lost, reserve의 sorting이 필요한 이유.
// ex> n = 4, lost = [3, 1], reserve = [2, 4] => answer = 4
