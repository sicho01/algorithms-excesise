// url: https://school.programmers.co.kr/learn/courses/30/lessons/42839
// 소수찾기 + 순열 with DFS
// level2

function isPrime(number) {
  if (number === 0 || number === 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  const results = [];
  const piece = [...numbers];
  const n = piece.length;
  // 인덱스가 사용중인지 check하기 위한 배열을 선언한다.
  // 0은 사용안함 / 1은 사용중
  const visited = new Array(n).fill(false);

  // level: 현재 뎁스 레벨
  function dfs(level, target) {
    if (level === n) {
      // 매개변수 L이 n과 같아지면 answer에 push해준다.
      // slice() 메서드를 사용한 이유는 재귀를 돌며 temp가 바뀌기 떄문이다.
      return;
    }

    for (let i = 0; i < piece.length; i++) {
      // visited[i]가 0이라면
      if (!visited[i]) {
        // visited[i]를 1로 바꾸어 현재 사용하고 있다고 설정한다.
        visited[i] = true;

        // 레벨을 1 올려준 뒤 dfs 재귀함수를 호출한다.
        // 레벨이 n과 같아지면 answer에 push후 종료할 것이고
        // 아닐 경우 현재 visited에 체크된 사용중 인덱스를 제외하고
        // for()문이 돌며 레벨이 맞춰질 때 까지 재귀함수를 실행할 것이다.
        results.push(Number(target + piece[i]));
        dfs(level + 1, target + piece[i]);
        // 사용을 완료했으면 visited[1]에 다시 0을 넣어 사용하지 않음으로 설정한다.
        visited[i] = false;
      }
    }
  }

  // 레벨 0부터 실행한다.
  dfs(0, "");
  return [...new Set(results)].filter(result => isPrime(result)).length;
}

// 조합
function solution(n, m) {
  let answer = [];
  let tmp = new Array(m).fill(0);

  function dfs(level, startIndex) {
    if (level === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = startIndex; i <= n; i++) {
        tmp[level] = i;
        dfs(level + 1, i + 1);
      }
    }
  }
  dfs(0, 1);

  return answer;
}
