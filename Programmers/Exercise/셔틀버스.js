// url: https://school.programmers.co.kr/learn/courses/30/lessons/17678
// level 3
// 그냥 구현..

function toMinutes(date) {
  const [hours, minutes] = date.split(":");
  return Number(hours) * 60 + Number(minutes);
}

function toDate(minutes) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes - hour * 60;
  const answer = [];
  answer.push(hour < 10 ? `0${hour.toString()}` : hour.toString());
  answer.push(minute < 10 ? `0${minute.toString()}` : minute.toString());
  return answer.join(":");
}

function solution(n, t, m, timetable) {
  const table = timetable.map(time => toMinutes(time)).sort((a, b) => a - b);
  const map = new Array(n).fill().map((_, i) => ({ time: toMinutes("09:00") + i * t, count: 0 }));
  const lastTime = toMinutes("09:00") + (n - 1) * t;

  let index = 0;
  while (index < n) {
    const time = table[0];
    if (map[index].count === m) {
      index++;
      continue;
    }
    if (time <= map[index].time) {
      map[index].count++;
      map[index].lastTime = time;
      table.shift();
    } else {
      index++;
    }
  }

  const isLastTimeFull = map.at(-1).count === m;
  if (isLastTimeFull) {
    return toDate(map.at(-1).lastTime - 1);
  } else {
    return toDate(lastTime);
  }
}

const test1 = [3, 1, 2, ["06:00", "23:59", "05:48", "00:01", "00:01"]]; //  Return = "09:02"
const test2 = [
  10,
  25,
  1,
  ["09:00", "09:10", "09:20", "09:30", "09:40", "09:50", "10:00", "10:10", "10:20", "10:30", "10:40", "10:50"],
]; // Return = "10:29"
const test3 = [2, 10, 2, ["09:10", "09:10", "09:10"]]; // Return = "09:09"
const test4 = [2, 5, 1, ["09:05", "09:05"]]; // Return = "09:04"
const test5 = [1, 1, 1, ["09:00", "09:05"]]; // Return = "08:59"
const test6 = [1, 1, 1, ["08:55"]]; // Return = "08:54"

console.log(solution(...test6));
