// url: https://school.programmers.co.kr/learn/courses/30/lessons/43163
// 최소 변환 수를 얻는 거기 때문에 BFS로~

function getConvertableWordsList(source, index, words) {
  const result = [];
  const length = source.length;
  words.forEach((word) => {
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
        list.forEach((dest) => {
          queue.push([dest, count + 1]);
        });
      }
    }
  }
  return 0;
}
