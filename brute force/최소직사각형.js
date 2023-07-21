// url: https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let max_width = -1;
  let max_height = -1;

  sizes.forEach(size => {
    const [w, h] = size;
    const width = w > h ? w : h;
    const height = w > h ? h : w;

    max_width = Math.max(max_width, width);
    max_height = Math.max(max_height, height);
  });

  return max_width * max_height;
}
