---
author: Byeong Chan
title: "[백준] 11403 경로 찾기"
description: ''
date: "2020-01-01"
modified_date: "2020-01-01"
categories: [Algorithm]
tags: [벡준, BFS, DFS]
comments: true
---

# Problem

[BOJ 11403](https://www.acmicpc.net/problem/11403)

가중치 없는 방향 그래프 G가 주어졌을 때, 모든 정점 (i, j)에 대해서, i에서 j로 가는 경로가 있는지 없는지 구하는 프로그램을 작성하시오.

첫째 줄에 정점의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄부터 N개 줄에는 그래프의 인접 행렬이 주어진다. i번째 줄의 j번째 숫자가 1인 경우에는 i에서 j로 가는 간선이 존재한다는 뜻이고, 0인 경우는 없다는 뜻이다. i번째 줄의 i번째 숫자는 항상 0이다.

# Solution

## 문제 접근 순서

1. 최대 입력개수가 100으로 주어졌고, 2중 for문 안에서 모든 인덱스를 스캔.
2. 스캔할때마다 dfs 또는 bfs 진행
3. 최대 입력이 100이 주어졌고, 2중 **반복문(100*100) *dfs(100) = 1,000,000** 정도 나올 것으로 예상
4. 그나마 경로찾는데 효율 좋은 bfs 선택 (사실 비슷할 것 같았다. 나중에 dfs로 해봐야지)

## 문제 풀이

---

### 단방향 그래프

```cpp
void addEdge(int u, int v) {
		arr[u].push_back(v);
	}
```

문제 특성상 양방향으로 하면 곤란하기 때문에 단방향으로만 노드를 연결시켰다.

### 입력

```cpp
//INPUT
	for (int i = 1; i < N + 1; i++) {
		for (int j = 1; j < N + 1; j++) {
			int input1;
			cin >> input1;
			if (input1 == 1) {
				result[j][i] = true;

				G.addEdge(j, i);
			}
		}
	}
```

입력 배열에서 1인 부분이 존재하면 그 좌표를 result배열에 그대로 1을 복사한다.
(result배열은 출력하기 위한 배열)

추가로 addEdge메서드를 사용하여 좌표에 대한 단방향으로 연결한다.

### bfs 사용해서 문제 풀이

```cpp
bool bfs(int start, int end) {
		fill(visited.begin(), visited.end(), false);
		queue<int> q;

		//queue비우기
		while (!q.empty())
			q.pop();

		q.push(start);
		visited[start] = true;

		while (!q.empty()) {
			int x = q.front();
			q.pop();

			for (int i = 0; i < arr[x].size(); i++) {
				int y = arr[x][i];
				if (y == end) return true;

				if (!visited[y]) {
					q.push(y);
					visited[y] = true;
				}
			}
		}
		return false;
	}
```

main에서 2중 for문을 사용했고 각 인덱스의 좌표를 bfs매개변수로 사용한다.

start인덱스가 end인덱스로 도달 할 수 있는지 여부를 bfs를 통해 판단하고 start값과 end값이 연결되어 있으면 true, 연결 되어있지 않으면 false를 반환

결과적으로 result배열에 탐색 가능여부를 초기화하여 출력한다.

bfs구현은 익숙해져서 어렵지 않았는데 문제 특성상 배열 좌표가 헷갈려서 살짝 해맷다. 나름 재밌었던 문제.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/baekjoon/11403_FindAPath.cpp)
