# Note

### DFS vs BFS

- 최소 거리 등을 구할 때는 BFS
- route의 성격이 같은 걸 고르는 문제면 DFS

### DFS vs Dijkstra(다익스트라)

- path에 weight이 다 다르면 다익스트라, 아니면 DFS

### DFS vs 백트래킹

- DFS 역시 재귀를 통해서 구현하므로 시작 기점으로 돌아오는 개념이 들어가 있기는 하지만, 백트래킹의 경우 현재 가는 길이 더 이상의 해가 아니라고 판단되면 되돌아오는 것을 의미
- DFS는 모든 경로를 탐색
- 백트래킹은 해가 되지 않는다면 해당 경로 탐색을 중단.

### Dijkstra vs Floyd-Warshall(플로이드-워샬)

- 다익스트라는 한 정점에서 다른 모든 정점의 최단 거리를 구할 떄.
- 플로이드-와샬은 모든 정점에서 모든 정점으로의 최단 거리 구할 때.

### array 중복 없애는 법.

```ts
const filteredArray = [...new Set(Array)];
```

### 부분 수열의 최대 합 vs 부분 수열의 합 === k

- 최대 합은 아래와 같이 dp로 풀면 됨.
- 합이 특정 값과 일치해야 하는 case는 two pointer로 해결.

```python
def dynamic_programming(arr):
    cache = [None] * len(arr)
    # 1.
    cache[0] = arr[0]

    # 2.
    for i in range(1, len(arr)):
        cache[i] = max(0, cache[i-1]) + arr[i]

    return max(cache)
```

<br/><br/>

# Template

### BFS

```ts
const queue = [];
queue.push(start_node);

while (queue.length) {
  const cur = queue.shift();

  // 최단거리 condition
  if (condition) {
    return cur.value;
  }

  // node 돌면서 check
  for (const node of nodes) {
  }
}
```

### Dijkstra1

```ts
// arg1: n = length
// arg2: routes

const result = new Array(n).fill(Infinity);
const map = new Array(n).fill().map(_ => []);

// init
for (const [from, to, weight] of routes) {
  map[from - 1].push({ to: to - 1, weight });
  map[to - 1].push({ to: from - 1, weight });
}

const queue = [{ to: 0, weight: 0 }];
result[0] = 0;

while (queue.length) {
  const { to } = queue.pop();
  const nextNodeList = map[to];

  for (const nextNode of nextNodeList) {
    if (result[nextNode.to] > result[to] + nextNode.weight) {
      result[nextNode.to] = result[to] + nextNode.weight;
      queue.push(nextNode);
    }
  }
}
```

### 다익스트라2

```js
function dijkstra(graph, start) {
  let n = graph.length;
  let dist = Array(n).fill(Infinity);
  let visited = Array(n).fill(false);
  dist[start] = 0;

  for (let i = 0; i < n; i++) {
    let u = -1;

    // 방문하지 않은 정점 중 가장 거리가 짧은 정점 선택
    for (let j = 0; j < n; j++) {
      if (!visited[j] && (u === -1 || dist[j] < dist[u])) {
        u = j;
      }
    }

    if (dist[u] === Infinity) break; // 더 이상 진행할 수 없는 경우

    visited[u] = true;

    // 현재 정점(u)에서 인접한 정점(v) 업데이트
    for (let v = 0; v < n; v++) {
      if (graph[u][v] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }
  return dist;
}

// 그래프 예시 (무한대는 Infinity로 표시)
let graph2 = [
  [0, 3, Infinity, 7],
  [8, 0, 2, Infinity],
  [5, Infinity, 0, 1],
  [2, Infinity, Infinity, 0],
];

console.log(dijkstra(graph2, 0)); // 0번 정점에서 시작
```

### Floyd-Warshall

```ts
// arg1: n = length
// arg2: routes

const map = new Array(n).fill().map(_ => new Array(n).fill(Infinity));

// Init1
for (let i = 0; i < n; i++) {
  map[i][i] = 0;
}

// Init2
for (const [from, to, weight] of routes) {
  map[from - 1][to - 1] = weight; // 혹시 중복이 있으면 Math.min
  map[to - 1][from - 1] = weight;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] > map[i][k] + map[k][j]) {
        map[i][j] = map[i][k] + map[k][j];
      }
    }
  }
}
```
