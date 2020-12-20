---
author: Byeong Chan
title: "[백준] 2667 단지번호붙이기"
date: "2019-12-30"
categories: [Algorithm]
tags: [BOJ DFS]
comments: true
---

# Problem

[BOJ 2667](https://www.acmicpc.net/problem/2667)

BOJ 1743문제와 매우 유사한 문제였다. 배열 상에서 동서남북으로 연결된 그래프들을 찾되, 그래프 영역의 크기를 구하는 문제이다. 연결상태는 동서남북 중 1의 값을 갖는 배열이 있으면 연결됐다고 판단한다.

# Solution

## 문제 접근 순서

1. 배열에서의 영역들을 탐색하고 영역들의 크기를 구하면서 결과들을 오름차순으로 출력하는 문제.
2. dfs 또는 bfs를 사용해서 간단하게 영역의 크기를 구할 수 있음. (dfs사용)
3. sort()함수를 사용하여 오름차순 정렬.
4. result 벡터가 존재해야함.

## 문제 풀이

---

### dfs

```cpp
void dfs(int x, int y) {
	arr[x][y] = 0; // 방문 표시
	component++; // 단지 크기 갱신

	for (int i = 0; i < 4; i++) {
		int nextX = x + direct[i][0];
		int nextY = y + direct[i][1];

		// 탐색 배열이 1일 때만 동작
		if (arr[nextX][nextY] == 1)
			dfs(nextX, nextY);
	}
}
```

### 출력 부분

```cpp
result.push_back(component);
```

result라는 결과 집합을 생성하여 집합 내 요소들을 `sort()`를 사용하여 오름차순으로 배치시킨다.

```cpp
sort(result.begin(), result.end()); // 오름차순 정렬
```

BOJ 1743문제와 똑같은 문제였다. dfs기초문제이니 알아두자.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/tree/master/Codetest/baekjoon/2667_Estate.cpp)
