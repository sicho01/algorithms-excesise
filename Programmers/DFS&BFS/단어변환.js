// url: https://school.programmers.co.kr/learn/courses/30/lessons/43163
// 최소 변환 수를 얻는 거기 때문에 BFS로~
// level3

function getConvertableWordsList(source, index, words) {
  const result = [];
  const length = source.length;
  words.forEach(word => {
    const check =
      word.slice(0, index) === source.slice(0, index) &&
      word.slice(index + 1, length) === source.slice(index + 1, length);
    if (source[index] !== word[index] && check) {
      result.push(word);
    }
  });
  return result;
}

function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const word_length = begin.length;
  const queue = [];
  queue.push([begin, 0]);

  while (queue.length) {
    const [word, count] = queue.shift();
    if (word === target) {
      return count;
    }

    for (let i = 0; i < word_length; i++) {
      const list = getConvertableWordsList(word, i, words);
      if (list.length > 0) {
        list.forEach(dest => {
          queue.push([dest, count + 1]);
        });
      }
    }
  }
  return 0;
}

// 다른 풀이
function solution(begin, target, words) {
  const visited = { [begin]: 0 };
  const queue = [begin];

  while (queue.length) {
    const cur = queue.shift();

    if (cur === target) {
      return visited[target];
    }

    for (const word of words) {
      if (isConnected(word, cur) && !visited[word]) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }
  return 0;
}

const isConnected = (str1, str2) => {
  let count = 0;
  const len = str1.length;

  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }

  return count === 1 ? true : false;
};
