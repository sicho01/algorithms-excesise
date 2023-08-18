// url: https://school.programmers.co.kr/learn/courses/30/lessons/68646
// level3
// ??? 기준이 되는 값에서 left Min 혹은 rightMin보다 크면 된다고 함.

function solution(a) {
  const inputMin = list => {
    const queue = [];
    let t = list[0];
    for (const item of list) {
      if (t > item) {
        t = item;
      }
      queue.push(t);
    }
    return queue;
  };

  return new Set([...inputMin(a), ...inputMin(a.reverse())]).size;
}
