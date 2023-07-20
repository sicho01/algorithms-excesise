// url: https://school.programmers.co.kr/learn/courses/30/lessons/155651
// greedy

function toMinutes(date) {
  const [hour, min] = date.split(":");
  return Math.min(Number(hour) * 60 + Number(min), 23 * 60 + 59);
}

function solution(book_time) {
  let answer = 0;
  const queue = [];

  const bookTime = book_time
    .map((time) => ({
      start: toMinutes(time[0]),
      end: toMinutes(time[1]) + 10,
    }))
    .sort((a, b) => a.start - b.start)
    .forEach((target) => {
      const { start, end } = target;

      if (queue.length > 0 && queue.at(0).end <= start) {
        queue.shift();
      }
      queue.push(target);
      queue.sort((a, b) => a.end - b.end);
      answer = Math.max(answer, queue.length);
    });
  return answer;
}
