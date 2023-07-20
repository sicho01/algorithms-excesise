// LCS: Longest Common Subsequence
// url: https://nyang-in.tistory.com/277
// * 현재 비교하고 있는 두 문자가 같다면 : DP[i][j] = DP[i-1][j-1] + 1
// * 현재 비교하고 있는 두 문자가 다르다면 : DP[i][j] = max(DP[i-1][j], DP[i][j-1])

function solution(subsequences) {
  let source = [...subsequences[0]];
  let target = [...subsequences[1]];

  const DP = new Array(source.length + 1)
    .fill()
    .map((_) => new Array(target.length + 1).fill(0));

  for (let i = 1; i < source.length + 1; i++) {
    for (let j = 1; j < target.length + 1; j++) {
      if (source[i] === target[j]) {
        DP[i][j] = DP[i - 1][j - 1] + 1;
      } else {
        DP[i][j] = max(DP[i - 1][j], DP[i][j - 1]);
      }
    }
  }

  return DP[source.length][target.length];
}
