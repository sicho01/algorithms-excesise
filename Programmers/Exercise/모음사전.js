// url: https://school.programmers.co.kr/learn/courses/30/lessons/84512
// DFS
// DFS로 tree 만들면 됨.

function solution(word) {
  const charList = ["A", "E", "I", "O", "U"];
  const result = {};
  let index = 0;

  const dfs = (word, length) => {
    if (length > 5) {
      return;
    }
    result[word] = index++;
    charList.forEach((char) => {
      dfs(word + char, length + 1);
    });
  };

  dfs("", 0);
  return result[word];
}
