// url: https://school.programmers.co.kr/learn/courses/30/lessons/42884
// route end 정렬 우선 함.

function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let answer = 0;
  let camera = -Infinity;
  for (let i = 0; i < routes.length; i++) {
    if (camera < routes[i][0]) {
      answer++;
      camera = routes[i][1];
    }
  }
  return answer;
}
