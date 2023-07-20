// url: https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const clothes_dic = {};
  let result_count = 1;

  clothes.forEach(cloth => {
    const [name, category] = cloth;
    if (clothes_dic[`${category}`] === undefined) {
      clothes_dic[`${category}`] = [name];
    } else {
      clothes_dic[`${category}`].push(name);
    }
  });

  Object.keys(clothes_dic).forEach(category => {
    result_count *= clothes_dic[category].length + 1;
  });

  return result_count - 1;
}
