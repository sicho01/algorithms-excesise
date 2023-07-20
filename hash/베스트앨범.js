// url: https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const streaming_info = {};
  genres.forEach((genre, index) => {
    if (streaming_info[`${genre}`] === undefined) {
      streaming_info[`${genre}`] = { total_count: 0, plays: [] };
    }
    streaming_info[`${genre}`].total_count += plays[index];
    streaming_info[`${genre}`].plays.push({ index, count: plays[index] });
  });

  const streaming_info_array = [];
  for (const [name, info] of Object.entries(streaming_info)) {
    streaming_info_array.push({
      total_count: info.total_count,
      plays: info.plays.sort((a, b) => b.count - a.count).map(info => info.index),
    });
  }
  streaming_info_array.sort((a, b) => b.total_count - a.total_count);

  const result = [];
  streaming_info_array.forEach(info => {
    result.push(...info.plays.splice(0, 2));
  });
  return result;
}
