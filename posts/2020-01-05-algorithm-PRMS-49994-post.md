---
title: '[프로그래머스] 방문 길이'
description: '게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.'
date: '2020-01-05'
modified_date: '2020-01-05'
tags: [Programmers]
---

# Problem

[PROGRAMMERS 방문길이](https://programmers.co.kr/learn/courses/30/lessons/49994)

게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.

U: 위쪽으로 한 칸 가기
D: 아래쪽으로 한 칸 가기
R: 오른쪽으로 한 칸 가기
L: 왼쪽으로 한 칸 가기

캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

# Solution

## 문제 접근 순서

1. 한번 지나쳤던 간선을 다시 가면 count가 안됨.
2. 양방향 간선으로 구현.
3. 배열 인덱스는 (-)가 안되니 x,y좌표를 +5해서 0~10까지를 스캔. 중심은 (5,5)
4. dfs로 풀어봄(실패)
5. 배열로 노가다

## 문제 풀이

---

## DFS로 풀이(실패)

arr배열(한번이라도 지나쳤던 노드)을 true로 변경해주고 dfs를 진행시켰다.

```cpp
void dfs(int x, int y) {
		if (!arr[x][y])
			return;

		//4방향을 검사하기 위한 방향 배열
		int direct[4][2] = { {1, 0}, {0 , 1}, {-1 , 0}, {0 , -1} };

		for (int i = 0; i < 4; i++) {
			int nextX = x + direct[i][0];
			int nextY = y + direct[i][1];

			//printf("( %d, %d )\n", nextX, nextY);

			// 범위 조건
			if (0 > nextX || nextX > 10 || 0 > nextY || nextY > 10)
				continue;


			if (arr[nextX][nextY] == true) {
				//printf("( %d , %d )\n", nextX, nextY);

				result++;
				arr[x][y] = false;
				dfs(nextX, nextY);

			}

		}
	}
```

arr이 true인 인덱스만을 dfs진행시키고, count를 해준 후 arr인덕스를 false로 변경시켜준다.

이렇게 하면 양방향을 대체할 수 있을 줄 알았다. 하지만, 큰 오점이 있었다. 이것은 노드를 구하는 것에 그치치 않았던 것이다.

> Case 1 : string = "LURDLURDLURDLURDRULD"

case1일 경우 dfs로 하면 결과적으로 6이 나온다.

arr을 false로 변경해주기 때문에 (5,6) - (6,5)를 카운트 하지 못하는 맹점이 생긴다. 결구 dfs 포기!

## 배열로 풀이

```cpp
for (int i = 0; i < len; i++) {
	if (dirs[i] == 'U' && y < 10) {
		if (!arr[x][y][x][y+1]) {
			arr[x][y][x][y+1] = true;
			arr[x][y+1][x][y] = true;
			result++;
		}
		y++;
	}
	else if (dirs[i] == 'R'&& x < 10) {
		if (!arr[x][y][x+1][y]) {
			arr[x][y][x+1][y] = true;
			arr[x+1][y][x][y] = true;
			result++;
		}
		x++;
	}
	else if (dirs[i] == 'D'&& y > 0) {
		if (!arr[x][y][x][y-1]) {
			arr[x][y][x][y-1] = true;
			arr[x][y-1][x][y] = true;
			result++;
		}
		y--;
	}
	else if (dirs[i] == 'L'&& x > 0) {
		if (!arr[x][y][x-1][y]) {
			arr[x][y][x-1][y] = true;
			arr[x-1][y][x][y] = true;
			result++;
		}
		x--;
	}
}

return result;
```

배열을 선언해서 풀었는데, 보면 굉장히 난해한것 같지만 간단하다.

arr[탐색 전 x][탐색 전 y][탐색 후 x][탐색 후 y]

을 의미한다.

탐색 후 좌표가 false이면 아직 탐색을 안했다는 것이고 true로 변경해준다. 단, 양방향으로 나타내주기 위해 탐색전, 탐색후 좌표 둘다 true로 변경해준다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/Programmers/LengthOfVisited.cpp)
