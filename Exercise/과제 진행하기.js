// url: https://school.programmers.co.kr/learn/courses/30/lessons/176962
// 구현 문제.. 아.. 빡세..

function toSeconds(date) {
  const [hour, minute] = date.split(":");
  return Number(hour) * 60 + Number(minute);
}

function solution(plans) {
  const results = [];
  const planList = plans.map((plan) => {
    return {
      name: plan[0],
      startSeconds: toSeconds(plan[1]),
      endSeconds: toSeconds(plan[1]) + Number(plan[2]),
      duration: Number(plan[2]),
    };
  });
  planList.sort((a, b) => a.startSeconds - b.startSeconds);
  let working = planList.shift();
  const queue = [];

  // queue가 없을 때.
  // -> 겹칠 때: queue로 보내고 nextPlan 시작.
  // -> 겹치지 않을 때: nextPlan 시작.
  // queue가 있을 때.
  // -> 겹칠 때: queue로 보내고 nextPlan 시작.
  // -> 겹치지 않을 때: queue에 있는 거 빼서 시작.
  while (working) {
    if (planList.length === 0) {
      results.push(working.name, ...queue.reverse().map((a) => a.name));
      break;
    }

    let nextPlan = planList.shift();

    // 겹칠 떄.
    if (working.endSeconds > nextPlan.startSeconds) {
      const left =
        working.duration - (nextPlan.startSeconds - working.startSeconds);
      queue.push({ ...working, left });
      working = nextPlan;
      continue;
    }
    if (working.endSeconds === nextPlan.startSeconds) {
      results.push(working.name);
      working = nextPlan;
      continue;
    }

    // 겹치지 않을 때
    if (queue.length === 0) {
      results.push(working.name);
      working = nextPlan;
    } else {
      planList.unshift(nextPlan);
      const leftPlan = queue.pop();
      const nextNextPlan = {
        name: leftPlan.name,
        startSeconds: working.endSeconds,
        endSeconds: working.endSeconds + leftPlan.left,
        duration: leftPlan.left,
      };
      results.push(working.name);
      working = nextNextPlan;
    }
  }

  return results;
}
