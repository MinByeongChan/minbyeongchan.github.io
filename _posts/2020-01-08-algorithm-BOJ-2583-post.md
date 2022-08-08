---
title: '[백준] 2583 영역 구하기'
description: ''
date: '2020-01-08'
modified_date: '2020-01-08'
categories: [Algorithm]
tags: [BOJ, DFS, BFS]
comments: true
---

# Problem

[BOJ 2583](https://www.acmicpc.net/problem/2583)

눈금의 간격이 1인 M×N(M,N≤100)크기의 모눈종이가 있다. 이 모눈종이 위에 눈금에 맞추어 K개의 직사각형을 그릴 때, 이들 K개의 직사각형의 내부를 제외한 나머지 부분이 몇 개의 분리된 영역으로 나누어진다.

예를 들어 M=5, N=7 인 모눈종이 위에 <그림 1>과 같이 직사각형 3개를 그렸다면, 그 나머지 영역은 <그림 2>와 같이 3개의 분리된 영역으로 나누어지게 된다.

# Solution

## 문제 접근 순서

1. 문제에서 주어진 사각형의 영역을 제외한 영역의 개수과 크기를 각각 구하는 문제.

2. 주어진 사각형의 좌표를 따서 그려진 사각형을 제외.

3. 이외 영역을 DFS 또는 BFS를 사용하여 각각의 영역의 개수, 크기를 구함.

## 문제 풀이

---

### DFS 함수

```cpp
int areaCount;
int direct[4][2] = { {1, 0}, {0, 1}, {-1, 0}, {0, -1} }; // 4방향을 스캔하기 위한 방향배열

void dfs(int x, int y) {
	arr[x][y] = true;

	//DFS 동작할때마다 영역 크기를 1씩 증가
	areaCount++;

	for (int i = 0; i < 4; i++) {
		int nextX = x + direct[i][0];
		int nextY = y + direct[i][1];

		//범위 설정 조건
		if (nextX < 0 || nextX >= M || nextY < 0 || nextY >= N)
			continue;

		//동서남북을 스캔후 false영역이 있다면 DFS동작
		if (!arr[nextX][nextY]) {
			dfs(nextX, nextY);
		}
	}

}
```

특별한 소스는 없다. DFS를 사용하여 구현하였다. main에서 사각형 영역을 제외시켜주고 DFS를 동작시킨다.

DFS에서 `areaCount`변수가 DFS동작할때마다 count를 하게 되어 크기를 구한다.

또한 네 방향을 스캔하기 위해 방향 배열을 선언했고 네 방향을 스캔하면서 false인 부분을 발견하면 다음 DFS로 넘어간다.

### 영역의 크기와 개수를 구하는 함수

```cpp
//영역의 크기를 구함
void getArea() {

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			if (!arr[j][i]) {
				areaCount = 0;
				dfs(j, i);

				result.push_back(areaCount);
			}
		}
	}
}
```

2중 반복문을 사용하여 DFS를 동작시킨다. 단 한번이라도 방문했다면 동작하지 않고 넘어간다.

result벡터는 영역 크기들을 오름차순 정렬해주기 위해 선언하였다. 정렬은 main에서 수행된다.

DFS를 응용아닌 응용을해서 풀었던 문제였다. 비슷한 문제를 몇번 풀어봐서 간단하게 풀 수 있었다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/baekjoon/2583_GetArea.cpp)
