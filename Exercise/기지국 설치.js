// url: https://school.programmers.co.kr/learn/courses/30/lessons/12979
// level 3이라는데...

function solution(n, stations, w) {
  let answer = 0;
  let start = 1;
  const rangeLength = 2 * w + 1;

  if (w + 1 >= n) {
    return 0;
  }

  while (start <= n) {
    const station = stations.at(0) ?? n + 1 + w;
    const stationStart = Math.max(station - w, 1);
    const stationEnd = Math.min(station + w, n);
    const length = stationStart - start;
    answer += Math.ceil(length / rangeLength);
    start = stationEnd + 1;
    stations.shift();
  }

  return answer;
}
