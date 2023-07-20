function solution(brown, yellow) {
  const total_count = brown + yellow;
  const return_combination = [];

  for (let i = 1; i < total_count; i++) {
    const width = i;
    const height = total_count / i;
    if (total_count % i === 0 && width >= height) {
      return_combination.push([width, height]);
    }
  }

  let result;
  return_combination.forEach((comb) => {
    const [width, height] = comb;
    if (width * 2 + height * 2 - 4 === brown) {
      result = comb;
    }
  });
  return result;
}
