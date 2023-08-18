// url: https://school.programmers.co.kr/learn/courses/30/lessons/64064
// js string match with pattern + permutation with DFS + 중복 제거 with Set
// level 3

function isPatternMatched(target, pattern) {
  const regex = new RegExp(`^${pattern.replaceAll("*", ".")}$`);
  return target.match(regex);
}

function solution(user_id, banned_id) {
  const selected = Array(user_id.length).fill(false);
  const set = new Set(); // 중복 제거에 좋음.

  const dfs = (index = 0, arr = []) => {
    if (index === banned_id.length) {
      set.add(arr.sort().join(","));
    } else {
      for (let i = 0; i < user_id.length; i++) {
        if (selected[i]) {
          continue;
        }

        if (isPatternMatched(user_id[i], banned_id[index])) {
          selected[i] = true;
          dfs(index + 1, [...arr, user_id[i]]);
          selected[i] = false;
        }
      }
    }
  };

  dfs();

  return set.size;
}
