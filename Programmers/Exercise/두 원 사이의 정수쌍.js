// url: https://school.programmers.co.kr/learn/courses/30/lessons/181187

function solution(r1, r2) {
  let answer = 0;

  // x^2 + y^2 = r^2 -> y = sqrt(r^2 - x^2)
  for (let i = 1; i <= r2; i++) {
    const outer_y = Math.sqrt(r2 * r2 - i * i);
    const inner_y = r1 >= i ? Math.sqrt(r1 * r1 - i * i) : 0;

    const outer_points = Math.floor(outer_y);
    const inner_points = Math.ceil(inner_y);
    const point_count = outer_points - inner_points + 1;
    answer += point_count;
  }

  return 4 * answer;
}
