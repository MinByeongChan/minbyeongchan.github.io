---
title: '[백준] 2178 미로 탐색(최소경로, BFS)'
description: 'N×M크기의 배열로 표현되는 미로가 있다...'
date: '2019-12-29'
modified_date: '2019-12-29'
tags: [백준, BFS]
---

# Problem

[BOJ 2178](https://www.acmicpc.net/problem/2178)

N×M크기의 배열로 표현되는 미로가 있다.

|     |  row  |  row  |  row  |  row  |  row  |  row  |
| :-: | :---: | :---: | :---: | :---: | :---: | :---: |
| col | **1** |   0   | **1** | **1** | **1** | **1** |
| col | **1** |   0   | **1** |   0   | **1** |   0   |
| col | **1** |   0   | **1** |   0   | **1** | **1** |
| col | **1** | **1** | **1** |   0   | **1** | **1** |

미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다. 이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를 구하는 프로그램을 작성하시오. 한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.

위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다. 칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.

# Solution

## 문제 접근 순서

1. `최소 경로`를 구해야하는 문제.
2. 최소 경로를 구하는 문제이니 `BFS`로 구현 (최소 경로는 BFS > DFS)
3. 좌표를 나타내야하는 x,y좌표상에서 배열에 queue를 어떻게 적용해야할까 -> pair사용해서 구현

## 예제 입력

```cpp
4 6
101111
101010
101011
111011
```

## bfs

```cpp
//BFS 함수
	void bfs() {
		queue<pair<int, int>> q; // x,y좌표를 나타내기위해 pair사용
		q.push(make_pair(0,0));

		cnt = 1;

		while (!q.empty()) {

			int qSize = q.size(); // queue의 깊이

			for (int i = 0; i < qSize; i++) {
				int x = q.front().first;
				int y = q.front().second;

				q.pop();

				for (int i = 0; i < 4; i++) {

					int nextX = x + direct[i][0];
					int nextY = y + direct[i][1];

					if (nextX > m || nextY > n || nextX < 0 || nextY < 0)
						continue;

					if (arr[nextX][nextY] != 1)
						continue;

					// 마지막 인덱스에 도달하면 return
					if (nextX == m - 1 && nextY == n - 1)
						return;

					q.push(make_pair(nextX, nextY));
					arr[nextX][nextY] = 0;
				}
			}
			cnt++;
		}

	}
```

각 좌표는 pair를 사용하였다.
미로 배열 arr에서 처음 좌표를 queue에 담고 BFS를 시작한다.

BFS의 특성을 이해해야만 풀수 있는 문제이다. BFS는 `너비 우선 탐색`이기 때문에 각 시행마다 `깊이`를 구할 수 있다. 깊이를 구할 수 있다는 것은 상하좌우 모두 점검하고 넘어가도 1을 카운트 한다는 의미이다. 이러한 방식으로 깊이를 쉽게 얻을 수 있다.

하지만 탈출조건이 주어지지 않으면 답이 이상해지므로 탈출조건을 적절하게 주어야 했다. 마지막 탈출조건에서 반환되면 (M,N)은 카운트 하지 않고 넘어가게 된다. 그래서 main g.result에 +1을 추가하여 출력한다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/tree/master/Codetest/baekjoon/2178_Miro.cpp)
