// url: https://school.programmers.co.kr/learn/courses/30/lessons/152995
// sorting 두번 하기!

// runtime error.
function solution(scores) {
  const temp = scores.map((score, index) => ({
    isHim: index === 0,
    total: score.at(0) + score.at(1),
    attitude: score[0],
    peer: score[1],
    incentive: undefined,
  }));

  if (temp.length === 1) {
    return 1;
  }

  for (let i = 0; i < temp.length; i++) {
    const { attitude, peer, incentive } = temp[i];
    if (incentive !== undefined) {
      continue;
    }
    for (let j = 0; j < temp.length; j++) {
      if (i === j) {
        continue;
      }

      const { attitude: _attitude, peer: _peer } = temp[j];
      if (attitude < _attitude && peer < _peer) {
        temp[i].incentive = false;
      }

      if (temp[i].incentive !== false) {
        temp[i].incentive = true;
      }
    }
  }
  const result = temp
    .filter((score) => score.incentive === true)
    .sort((a, b) => b.total - a.total);
  const index = result.findIndex((score) => score.isHim);
  return index >= 0 ? index + 1 : -1;
}

// sorting 두번.
function solution(scores) {
  let answer = 1;
  const [wanhoAttitude, wanhoPeer] = scores[0];

  scores.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0]; // 내림차순 (ex, 100, 99, 98, ...)
    }
    return a[1] - b[1]; // 오름차순
  });

  let peerMax = 0;
  for (const score of scores) {
    const [attitude, peer] = score;
    if (wanhoAttitude < attitude && wanhoPeer < peer) {
      return -1;
    }

    if (peerMax <= peer) {
      if (wanhoAttitude + wanhoPeer < attitude + peer) {
        answer++;
      }
      max = peer;
    }
  }
  return answer;
}
