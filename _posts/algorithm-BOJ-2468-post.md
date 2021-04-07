---
title: "[백준] 2468 안전 영역"
description: ''
date: "2020-01-09"
modified_date: "2020-01-09"
categories: [Algorithm]
tags: [BOJ, DFS, BFS]
comments: true
---

# Problem

[BOJ 2468](https://www.acmicpc.net/problem/2468)

재난방재청에서는 많은 비가 내리는 장마철에 대비해서 다음과 같은 일을 계획하고 있다. 먼저 어떤 지역의 높이 정보를 파악한다. 그 다음에 그 지역에 많은 비가 내렸을 때 물에 잠기지 않는 안전한 영역이 최대로 몇 개가 만들어 지는 지를 조사하려고 한다. 이때, 문제를 간단하게 하기 위하여, 장마철에 내리는 비의 양에 따라 일정한 높이 이하의 모든 지점은 물에 잠긴다고 가정한다.

어떤 지역의 높이 정보는 행과 열의 크기가 각각 N인 2차원 배열 형태로 주어지며 배열의 각 원소는 해당 지점의 높이를 표시하는 자연수이다. 예를 들어, 다음은 N=5인 지역의 높이 정보이다.
...

|  6  |  8  |  2  |  6  |  2  |
| :-: | :-: | :-: | :-: | :-: |
|  3  |  2  |  3  |  4  |  6  |
|  6  |  7  |  3  |  3  |  2  |
|  7  |  2  |  5  |  3  |  6  |
|  8  |  9  |  5  |  2  |  7  |

이제 위와 같은 지역에 많은 비가 내려서 높이가 4 이하인 모든 지점이 물에 잠겼다고 하자. 이 경우에 물에 잠기는 지점을 `-`으로 표시하면 다음과 같다.

|  6  |  8  |  -  |  6  |  -  |
| :-: | :-: | :-: | :-: | :-: |
|  -  |  -  |  -  |  -  |  6  |
|  6  |  7  |  -  |  -  |  -  |
|  7  |  -  |  5  |  -  |  6  |
|  8  |  9  |  5  |  -  |  7  |

...

위 예제 그래프에서 동서남북 방향으로 인접해 있는 영역을 구하면 총 5개가 된다.

정리하자면 최소 높이부터 최대 높이에 대한 영역을 구하면서 최대값을 갱신하면 되는 문제이다.

단, 문제 아래에 노트 부분에 **"아무 지역도 물에 잠기지 않을 수도 있다."** 을 참고하면 최소 영역의 개수가 1개이상 나와야한다는 것을 알 수 있다.

# Solution

## 문제 접근 순서

1. 그래프이고, 영역을 구하는 문제이므로 `DFS` 또는 `BFS`로 풀이 접근

2. 빗물의 기준을 계속 변경해가며 영역의 개수 파악.

3. DFS 파라미터에 빗물의 기준을 넘겨줘서 조건을 설정.

## 문제 풀이

### 1. 빗물의 범위 설정

---

```cpp
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			cin >> arr[j][i];
			if (arr[j][i] < mn) mn = arr[j][i];
			if (arr[j][i] > mx) mx = arr[j][i];
		}
	}

	for (int i = mn; i < mx; i++)
		getCount(i);
```

배열에 대한 높이를 입력받는 동시에 최대값, 최소값을 갱신한다.

getCount는 영역의 개수를 구하는 함수로 매개변수로 빗물의 기준높이를 계속 넘겨준다.

### 2. 영역의 개수 구하기

---

```cpp
int result = 1;

void getCount(int idx){
	int count = 0;

	fill(&visited[0][0], &visited[100][100], false);

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			if (arr[j][i] > idx && !visited[j][i]) {
				count++;
				dfs(j, i, idx);
			}
		}
	}

	//최대 안전 영역 갱신
	if (result < count)
		result = count;
}
```

getCount()는 영역의 개수를 구한다. visited는 방문배열이다. getCount()가 한번 실행되면 visited를 다시 초기화 해주어야하기 때문에 fill() STL을 사용했다.

count가 영역의 개수를 구하고 마지막에 최대값을 갱신하게 된다.

그리고 **빗물에 모두 잠기는 경우는 없다는 전제가 있기 때문에 result를 1로 설정**했다.

### 3. DFS 함수

---

```cpp
int direct[4][2] = { {1,0}, {0,1}, {-1,0}, {0,-1} };

void dfs(int x, int y, int idx) {
	if(visited[x][y]) return;

	visited[x][y] = true;

	for (int i = 0; i < 4; i++) {
		int nextX = x + direct[i][0];
		int nextY = y + direct[i][1];

		if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N)
			continue;

		if (arr[nextX][nextY] > idx) {
			dfs(nextX, nextY, idx);
		}
	}
}
```

매개변수에 idx를 넣어주었다. idx는 빗물의 높이 기준을 의미한다. 만약 idx가 4이면 높이가 5이상의 영역들만을 접근하여 영역의 개수를 구한다. 영역을 탐색하는 방법은 언제나 그랬듯이 direct 방향배열을 사용하여 4방향을 탐색했다.

백준 DFS문제가 비슷하게 출제되는것 같다. 기본적인 DFS 개념에서 벗아나지 않아 잘 풀리는 것 같다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/baekjoon/2468_SafeArea.cpp)
