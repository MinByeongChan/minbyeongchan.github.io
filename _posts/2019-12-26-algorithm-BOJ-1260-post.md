---
title: '[백준] 1260 DFS와 BFS'
description: '그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오...'
date: '2019-12-26'
modified_date: '2019-12-26'
tag: [백준, BFS, DFS]
---

# Problem

[BOJ 1260](https://www.acmicpc.net/problem/1260)

그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

출력에서 첫 줄은 DFS, 두번째 줄은 BFS로 나온 결과를 출력하는 것이다.

# Solution

## 문제 접근 순서

1. 클래스로 작성할까, 함수로 나열해서 작성할까
2. 깔끔하게 클래스로 구현
3. BFS, DFS 이론 정리

## DFS

`dfs(Depth First Search)`는 깊이 우선 탐색이라는 알고리즘 개념이다. `스택`을 사용하여 구현하기도 하며, 함수 자체가 스택으로 구현되기 때문에 굳이 스택이 아니여도 재귀함수로 구현해도 똑같은 결과를 나타낼 수 있다.

보통 그래프에서 사용되며, 그래프는 **노드**, **간선**, **component** 등으로 구성되어있다. component는 노드간에 깊이를 의미한다. 노드들은 간선으로 연결되어있으며, 간선끼리의 연결 관계를 정의한다.

dfs는 **깊이 우선 탐색**이므로 연결되어 있는 간선이 없을 때 까지 계속 탐색한다. 탐색할때마다 visited라는 방문 노드를 사용하고 false로 초기화되어있는 visited를 방문했다는 표시로 **visited[x] = true** 로 만든다.

```cpp
void dfs(int x) {
	if (visited[x] == true) return;
	visited[x] = true;

	cout << x << " ";
	for (int i = 0; i < a[x].size(); i++) {
		int y = a[x][i];
		if (!visited[y]) {
			dfs(y);
		}
	}
}
```

방문표시가 되어있으면 return으로 탈출하고, 처음 방문하는 노드이면 true로 설정한 후, 그 노드에 연결된 노드들을 확인한다. 노드가 존재하면 **연결되어있는 노드로 재귀함수를 실행**하게 된다.

## bfs

bfs(Breadth First Search)는 너비 우선 탐색이다. dfs와 다르게 `queue`를 사용하여 구현한다. bfs는 queue에 연결되어있는 노드들을 모두 push한다. 그리고나서 q에 저장되어있는 노드들을 먼저 스캔하게 되고, 먼저 push된 노드들부터 차례대로 bfs를 진행하게 된다.

```cpp
void bfs() {
	queue<int> q;
	q.push(v);
	visited[v] = true;

	while (!q.empty()) {
		int x = q.front();
		q.pop();
		cout << x << " ";
		for (int i = 0; i < a[x].size(); i++) {
			int y = a[x][i];
			if (!visited[y]) {
				q.push(y);
				visited[y] = true;
			}
		}
	}
}
```

bfs는 queue를 사용한다고 했다. queue를 사용하는 이유는 기준 노드에서 연결되어있는 노드들 부터 우선적으로 탐색하기 때문이다. 마지막으로 queue가 비어있으면 while문을 탈출하게 된다.

bfs는 너비를 우선적으로 탐색하기 때문에 **최단경로 문제**에서 많이 사용되기도 한다.

### 예제 입력

4 5 1
1 2
1 3
1 4
2 4
3 4

노드: 4, 간선: 5, 시작 노드: 1

시작 노드 1은 2, 3, 4와 연결되어있다. bfs는 연결된 노드부터 탐색하기 때문에 2, 3, 4를 차례대로 출력한다. dfs는 깊이우선이다. 시작노드 1을 탐색하고 다시 2와 연결되어있는 노드4를 찾는다. 그래서 1, 2, 4, 3이 출력된다.

그리고 문제에서 다른 예제 중 각 노드들이 오름차순으로 나열되어야 정상적인 출력이 가능했다. 그래서 sortList()를 추가하였다. sort는 이처럼 문제마다 사용해도, 안해도 되는 조건이다.

### Source

```cpp
#include<iostream>
#include<vector>
#include<queue>
#include <algorithm>
using namespace std;

vector<bool> visited;

class Gragh {
public:
	int n;
	int v;
	vector<vector<int>> a;

	Gragh() : n(0) {};
	Gragh(int n1, int v1) : n(n1), v(v1) { a.resize(n1+1);  }

	void addEdge(int p, int q) {
		a[p].push_back(q);
		a[q].push_back(p);
	}

	void bfs() {
		queue<int> q;
		q.push(v);
		visited[v] = true;

		while (!q.empty()) {
			int x = q.front();
			q.pop();
			cout << x << " ";
			for (int i = 0; i < a[x].size(); i++) {
				int y = a[x][i];
				if (!visited[y]) {
					q.push(y);
					visited[y] = true;
				}
			}
		}
	}

	void sortList() {
		for (int i = 0; i < n; i++) {
			sort(a[i].begin(), a[i].end());
		}
	}

	void dfs(int x) {
		if (visited[x] == true) return;
		visited[x] = true;

		cout << x << " ";
		for (int i = 0; i < a[x].size(); i++) {
			int y = a[x][i];
			if (!visited[y]) {
				dfs(y);
			}
		}
	}
};

int main() {
	int N, M, V; // 정점의 개수, 간선의 개수, 시작할 노드번호
	cin >> N >> M >> V;

	Gragh G(N, V);

	for (int i = 0; i < M; i++) {
		int input1, input2;
		cin >> input1 >> input2;

		G.addEdge(input1, input2);
	}
	G.sortList();

	visited.resize(N + 1, false);
	G.dfs(V);

	cout << "\n";

	fill(visited.begin(), visited.end(), false);
	G.bfs();


	return 0;
}
```

기본적인 dfs, bfs 개념을 이해하기 위한 문제였다. 까먹을 수 있으니 계속 복습하자.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/tree/master/Codetest/baekjoon/1260_BFSDFS.cpp)
