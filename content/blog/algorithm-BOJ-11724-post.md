---
author: Byeong Chan
title: "[백준] 11724 연결 요소의 개수"
date: "2019-12-29"
categories: [Algorithm]
tags: [BOJ DFS]
comments: true
---

# Problem

[BOJ 11724](https://www.acmicpc.net/problem/11724)

방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.

# Solution

## 문제 접근 순서

1. 그래프의 연결 요소를 알아내는 문제.
2. dfs, bfs 둘다 이용할 수 있지만, dfs로 풀이.
3. dfs가 실행될 때 마다 그래프 개수를 판단하기 위해 카운트 증가.

## 문제 풀이

```cpp
for (int i = 1; i < N+1; i++) {
	if (!G.visited[i]) {
		cnt++;
		G.dfs(i);
	}
}
```

그래프의 개수를 구하기 위해 dfs시작 전에 cnt를 증가시킨다. 제약조건으로 visited가 방문하지 않은 요소들만을 검사한다.

## dfs

```cpp
void dfs(int x) {
		visited[x] = true;

		cout << x << endl;
		for (int i = 0; i < arr[x].size(); i++) {
			int y = arr[x][i];
			if (!visited[y]) {
				dfs(y);
			}
		}
	}
```

특별한게 없다. 일반적인 dfs 방법으로 접근해서 풀이하였다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/tree/master/Codetest/baekjoon/11724_NumberOfConnectionElements.cpp)
