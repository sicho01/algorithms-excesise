// url: https://school.programmers.co.kr/learn/courses/30/lessons/178870
// two-pointer

function solution(sequence, k) {
  let [left, right] = [0, 0];
  let summed = sequence[left]; // 현재 쌓여있는 합 (left~right 위치 값의 합)
  const candidate = []; // 답안 후보

  while (right < sequence.length) {
    if (summed < k) {
      summed += sequence[++right]; // 합이 k보다 작으면 right이동
    } else if (summed > k) {
      summed -= sequence[left++]; // 합이 k보다 크면 left이동
    } else {
      // 합이 k라면 후보에 넣고 r과 l이동
      candidate.push([left, right]);
      summed += sequence[++right];
      summed -= sequence[left++];
    }
  }
  // 후보 중 가장 차가 적은 것을 리턴
  return candidate.sort(
    ([aLeft, aRight], [bLeft, bRight]) => aRight - aLeft - (bRight - bLeft)
  )[0];
}
