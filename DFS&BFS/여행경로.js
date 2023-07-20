function solution(tickets) {
  // [["ICN", "A"], ["A", "B"], ["A", "B"], ["B", "A"]]
  // [["ICN", "A"], ["ICN", "B"], ["B", "ICN"]]
  const result = [];
  const visited = [];
  const len = tickets.length;

  tickets.sort();

  const dfs = (str, count) => {
    result.push(str);

    if (count === len) {
      return true;
    }

    for (let i = 0; i < len; i++) {
      const [source, dest] = tickets[i];
      if (!visited[i] && source === str) {
        visited[i] = true;

        if (dfs(dest, count + 1)) {
          return true;
        }

        visited[i] = false;
      }
    }

    result.pop();

    return false;
  };

  dfs("ICN", 0);

  return result;
}
