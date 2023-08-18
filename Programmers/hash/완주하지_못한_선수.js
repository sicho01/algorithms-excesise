// url: https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();

  for (let i = 0; i < participant.length - 1; i++) {
    if (participant.at(i) !== completion.at(i)) {
      return participant.at(i);
    }
  }
  return participant.at(-1);
}
