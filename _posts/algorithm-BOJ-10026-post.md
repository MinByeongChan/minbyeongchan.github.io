---
author: Byeong Chan
title: "[백준] 10026 적록색약"
desc: ''
date: "2020-01-08"
modified_date: "2020-01-08"
categories: [Algorithm]
tags: [BOJ DFS BFS]
comments: true
---

# Problem

[BOJ 10026](https://www.acmicpc.net/problem/10026)

적록색약은 빨간색과 초록색의 차이를 거의 느끼지 못한다. 따라서, 적록색약인 사람이 보는 그림은 아닌 사람이 보는 그림과는 좀 다를 수 있다.

크기가 N×N인 그리드의 각 칸에 R(빨강), G(초록), B(파랑) 중 하나를 색칠한 그림이 있다. 그림은 몇 개의 구역으로 나뉘어져 있는데, 구역은 같은 색으로 이루어져 있다. 또, 같은 색상이 상하좌우로 인접해 있는 경우에 두 글자는 같은 구역에 속한다. (색상의 차이를 거의 느끼지 못하는 경우도 같은 색상이라 한다)

예를 들어, 그림이 아래와 같은 경우에

```cpp
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR
```

적록색약이 아닌 사람이 봤을 때 구역의 수는 총 4개이다. (빨강 2, 파랑 1, 초록 1) 하지만, 적록색약인 사람은 구역을 3개 볼 수 있다. (빨강-초록 2, 파랑 1)

그림이 입력으로 주어졌을 때, 적록색약인 사람이 봤을 때와 아닌 사람이 봤을 때 구역의 수를 구하는 프로그램을 작성하시오.

# Solution

## 문제 접근 순서

1. [영역 구하기](https://minbyeongchan.github.io/category/Algorithm/2583)와 비슷한 문제였다.

2. 영역을 구하고 추가적으로 문자 'R'과 'G'를 똑같이 인식한 후 영역을 구하는 문제.

3. 첫번째 영역을 구해준 뒤, main에서 R을 G로 변경하여 풀이

## 문제 풀이

---

### DFS 함수

```cpp
int direct[4][2] = { {1,0}, {0,1}, {-1,0}, {0,-1} };

//같은 index를 인식하여 DFS동작
void dfs(int x, int y, char index) {
	//한번 탐색하게 되면 'X'를 집어 넣음
	arr[x][y] = 'X';

	for (int i = 0; i < 4; i++) {
		int nextX = x + direct[i][0];
		int nextY = y + direct[i][1];

		//범위 제한 조건
		if (nextX < 0 || nextX > N || nextY < 0 || nextY > N)
			continue;

		// index가 같은 것만을 인식하여 DFS 동작
		if (arr[nextX][nextY] != 'X' && arr[nextX][nextY] == index) {
			dfs(nextX, nextY, index);
		}
	}
}
```

다른 DFS와 비슷하지만 매개변수 index가 좀 다르다. R, G, B에 대한 각각의 영역을 구해야 하므로 매개변수를 추가해서 풀었다.

### R을 G로 변경시키는 작업

```cpp
// R,G 구분했을 때 영역 구하기
	arr = temp;
	int sol1 = getArea();

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			if (temp[j][i] == 'R')
				temp[j][i] = 'G';
		}
	}

	// R,G 구분하지 못했을 때 영역 구하기
	arr = temp;
	int sol2 = getArea();
```

되게 간단하게 풀었다ㅋㅋㅋ. 처음 입력은 temp에 받고 이후 sol1은 정상적으로 영역을 구하고, sol2는 temp에서 R을 모두 없앤 후 영역을 구했다.

다른 방법을 시도하긴 했는데 실패해서 간단하게 풀었다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/baekjoon/10026_ColorBlindness.cpp)
