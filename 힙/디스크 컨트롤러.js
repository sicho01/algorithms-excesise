// url: https://school.programmers.co.kr/learn/courses/30/lessons/42627

function solution(jobs) {
  const length = jobs.length;

  jobs.sort((a, b) => a.at(0) - b.at(0));

  let cur_job = jobs.shift();
  let sum = cur_job.at(1);
  let cur_time = cur_job.at(0) + cur_job.at(1);

  while (jobs.length > 0) {
    const next_queue = [];
    jobs.forEach((job) => {
      const [start, length] = job;
      if (start <= cur_time) {
        next_queue.push(job);
      }
    });

    if (next_queue.length === 0) {
      cur_job = jobs.shift();
      sum += cur_job.at(1);
      cur_time = cur_job.at(0) + cur_job.at(1);
    } else {
      next_queue.sort((a, b) => a[1] - b[1]);
      next_queue.forEach((next_job) => {
        cur_time += next_job[1];
        sum += cur_time - next_job[0];
        jobs.shift();
      });
    }
  }
  return Math.floor(sum / length);
}

function solution(jobs) {
  var answer = 0;
  let q = [];

  jobs.sort((u, v) => {
    return u[0] - v[0];
  });

  console.log(jobs);

  let len = jobs.length;
  let i = 0;
  let cur_time = 0;
  while (i < len || q.length > 0) {
    if (i < len && jobs[i][0] <= cur_time) {
      q.push(jobs[i++]);
      continue;
    }
    q.sort((u, v) => {
      return u[1] - v[1];
    });
    if (q.length > 0) {
      let job = q.shift();
      cur_time += job[1];
      answer += cur_time - job[0];
    } else {
      cur_time = jobs[i][0];
    }
  }

  return Math.floor(answer / len);
}
