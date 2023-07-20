// url: https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  const result = [];
  commands.forEach((command) => {
    const [start, end, index] = command;
    const slice = array.slice(start - 1, end);
    result.push(slice.sort((a, b) => a - b)[index - 1]);
  });
  return result;
}
