---
author: Byeong Chan
title: "[백준] 9466 팀 프로젝트"
date: "2020-01-07"
categories: [Algorithm]
tags: [BOJ DFS]
comments: true
---

# Problem

[BOJ 9466](https://www.acmicpc.net/problem/9466)

이번 가을학기에 '문제 해결' 강의를 신청한 학생들은 텀 프로젝트를 수행해야 한다. 프로젝트 팀원 수에는 제한이 없다. 심지어 모든 학생들이 동일한 팀의 팀원인 경우와 같이 한 팀만 있을 수도 있다. 프로젝트 팀을 구성하기 위해, 모든 학생들은 프로젝트를 함께하고 싶은 학생을 선택해야 한다. (단, 단 한 명만 선택할 수 있다.) 혼자 하고 싶어하는 학생은 자기 자신을 선택하는 것도 가능하다.

학생들이(s1, s2, ..., sr)이라 할 때, r=1이고 s1이 s1을 선택하는 경우나, s1이 s2를 선택하고, s2가 s3를 선택하고,..., sr-1이 sr을 선택하고, sr이 s1을 선택하는 경우에만 한 팀이 될 수 있다.

예를 들어, 한 반에 7명의 학생이 있다고 하자. 학생들을 1번부터 7번으로 표현할 때, 선택의 결과는 다음과 같다.

|  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  3  |  1  |  3  |  7  |  3  |  4  |  6  |

위의 결과를 통해 (3)과 (4, 7, 6)이 팀을 이룰 수 있다. 1, 2, 5는 어느 팀에도 속하지 않는다.

주어진 선택의 결과를 보고 어느 프로젝트 팀에도 속하지 않는 학생들의 수를 계산하는 프로그램을 작성하라.

# Solution

## 문제 접근 순서

1. 일단 각 노드는 한번 지목하게 되므로 단방향으로 풀이.
2. 각 노드의 값은 해당 노드가 지목하는 노드가 된다.
3. dfs로 gragh가 형성되는 것을 확인하고 처음 start한 노드를 발견하면 탈출.
4. 싸이클(노드가 팀이 형성)이 형성된 노드들은 check배열로 구분.

## 문제 풀이

---

### 시간 초과 풀이(실패)

```cpp
class Gragh {
public:
...
	// 팀을 이루었는지 검사
	void dfs(int start) {
		if (visited[start]) return;

		visited[start] = true;

		for (int i = 0; i < student[start].size(); i++) {
			int y = student[start][i];

			// 첫 인덱스 발견시 check를 true
			if (y == findX)
				check[findX] = true;

			if (!visited[y]) {
				dfs(y);
			}
		}
	}
};

int main() {
	...
		// DFS 동작
		for (int i = 1; i < N + 1; i++) {
			fill(G.visited.begin(), G.visited.end(), false);

			//첫 인덱스를 저장
			G.findX = i;
			G.dfs(i);
		}

	...
}
```

각 노드들을 각각 dfs 진행시켰다. 매 경우마다 visited를 초기화하고 findX라는 변수로 스캔할 인덱스를 저장한다. 이후 dfs가 진행되고 현재 노드가 지목하는 대상이 findX라면 check하고 탈출한다.

시간 효율이 딸릴것으로 예상했지만 단호하게 안될줄은 몰랐다 ㅋㅋㅋ

### 또다른 풀이

```cpp
void dfs(int x) {
	//처음 온 인덱스는 방문 표시
	visited[x] = true;

	//다음 노드를 가리킴
	int next = student[x];

	//다음 노드가 방문되었으면 싸이클 여부 확인
	if (visited[next]) {
		//방문은 했지만 싸이클 여부를 확인하지 않았다면 동작
		if (!check[next]) {
			//싸이클 여부 확인
			for (int temp = next; temp != x; temp = student[temp])
				result++;
			//자기 자신 카운트
			result++;
		}
	}
	//다음 노드를 처음 방문하면 dfs
	else dfs(next);
	//마지막으로 check로 싸이클여부까지 모두 확인했다는 표시
	check[x] = true;
}
```

유심히 봐야할 부분은 if와 check이다. 노드는 첫 방문을 하고 다음 노드에 대한 dfs를 진행시킨다. 모두 진행되고 다음 노드가 없을 경우 check를 true로 한다.

check는 싸이클을 확인하는 용도로 사용된다. 싸이클이 체크되지 않았다는 것은 dfs는 진행되었지만 dfs함수를 아예 탈출 한 것이 아니기 때문에 싸이클 여부가 확인 가능하다.

싸이클이 체크 안되었다면 for문안에서 연결되어있는 요소들을 카운트 한다.

몹시 어렵고 복잡한 알고리즘이었다. dfs를 사용해서 싸이클을 만드는 코딩이 좀 복잡하고 난해해서 못풀었던 문제이다. 확실히 dfs를 전보다 이해하게 되는 계기가 되었던 문제였다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/baekjoon/9466_TeamProject.cpp)
