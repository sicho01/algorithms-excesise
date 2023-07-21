// url: https://school.programmers.co.kr/learn/courses/30/lessons/42840
// level1

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
function solution(answers) {
  const correctCount = new Array(3).fill(0);
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    const answer = answers.at(i);
    const pattern1Value = pattern1[i % pattern1.length];
    const pattern2Value = pattern2[i % pattern2.length];
    const pattern3Value = pattern3[i % pattern3.length];
    if (answer === pattern1Value) {
      correctCount[0]++;
    }
    if (answer === pattern2Value) {
      correctCount[1]++;
    }
    if (answer === pattern3Value) {
      correctCount[2]++;
    }
  }

  const max = Math.max(...correctCount);
  return [1, 2, 3].filter((_, i) => correctCount[i] === max);
}

console.log(solution([1, 3, 2, 4, 2]));
