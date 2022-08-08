---
title: '[백준] 2644 촌수계산'
description: ''
date: '2019-12-26'
modified_date: '2019-12-26'
categories: [Algorithm]
tags: [BOJ, BFS]
comments: true
---

# Problem

[BOJ 2644](https://www.acmicpc.net/problem/2644)

우리 나라는 가족 혹은 친척들 사이의 관계를 촌수라는 단위로 표현하는 독특한 문화를 가지고 있다. 이러한 촌수는 다음과 같은 방식으로 계산된다. 기본적으로 부모와 자식 사이를 1촌으로 정의하고 이로부터 사람들 간의 촌수를 계산한다. 예를 들면 나와 아버지, 아버지와 할아버지는 각각 1촌으로 나와 할아버지는 2촌이 되고, 아버지 형제들과 할아버지는 1촌, 나와 아버지 형제들과는 3촌이 된다.

여러 사람들에 대한 부모 자식들 간의 관계가 주어졌을 때, 주어진 두 사람의 촌수를 계산하는 프로그램을 작성하시오.

# Solution

## 문제 접근 순서

1. 촌수 계산은 그래프에서 수직적으로 구성.
2. 최소 경로를 찾는 것과 동일한 방식으로 접근.
3. BFS 사용.
4. BFS가 진행될 때마다 촌수의 depth를 카운트.
5. 목적지까지 도달하면 바로 return.
6. return된 시점까지의 촌수의 depth 출력.

```cpp
void bfs(int start, int end) {
	vector<bool> visited(n + 1, false);
	queue<int> q;
	q.push(start);
	visited[start] = true;

	while (!q.empty()) {
		int qSize = q.size();

		for (int i = 0; i < qSize; i++) {
			int x = q.front();
			q.pop();

			for (int i = 0; i < arr[x].size(); i++) {
				int y = arr[x][i];

				//목적지까지 도달하면 return
				if (y == end) return ;

				if (!visited[y]) {
					q.push(y);
					visited[y] = true;
				}
			}
		}
		kinship++;
	}

	kinship = -1; // 촌수를 못찾을 경우 예외 조건
}
```

bfs를 보면 queue를 사용하여 구현했다. queue가 진행될때마다 kinship이라는 변수를 증가시켜 촌수를 알아냈다.

start는 시작지점, end는 최종 목적지를 나타낸다.
bfs가 동작하고 목적지가 있으면, 즉 같은 촌수이면 탈출 조건에 의해 return된다.

return 되지 않으면 같은 촌수가 아니라는 의미이므로 마지막에 kinship을 -1로 초기화한다.

sort는 depth만 구하면 되기 때문에 굳이 넣을 필요가 없어서 안넣었다.

### Source

```cpp
#include<iostream>
#include<vector>
#include<queue>
using namespace std;


class Gragh {
public:
	int n;
	int kinship = 1;
	vector<vector<int>> arr;

	Gragh() : n(0) {};
	Gragh(int n1) : n(n1+1) { arr.resize(n+1); };

	void addEdge(int u, int v) {
		arr[u].push_back(v);
		arr[v].push_back(u);
	}

	void bfs(int start, int end) {
		vector<bool> visited(n + 1, false);
		queue<int> q;
		q.push(start);
		visited[start] = true;

		while (!q.empty()) {
			int qSize = q.size();

			for (int i = 0; i < qSize; i++) {
				int x = q.front();
				q.pop();
				//cout << x << " ";
				for (int i = 0; i < arr[x].size(); i++) {
					int y = arr[x][i];

					if (y == end) return ;

					if (!visited[y]) {
						q.push(y);
						visited[y] = true;
					}
				}
			}

			kinship++;
		}

		kinship = -1;
	}
};

int main() {
	int n; // 전체 사람의 수
	cin >> n;

	int x, y; // 촌수를 계산해야하는 두 사람
	cin >> x >> y;

	int m; // 부모 자식들 간의 관계의 개수
	cin >> m;


	Gragh G(n);
	for (int i = 0; i < m; i++) {
		int a, b;
		cin >> a >> b;
		G.addEdge(a, b);
	}

	G.bfs(x, y);


	cout << G.kinship;

	return 0;
}
```

촌수의 depth를 구하는 기본적인 문제였다. Gragh G()에 n을 넣어야하는데 오타입력해서 살짝 해맷다.

응용할 때 기본이 되는 문제이므로 까먹지말자!

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/tree/master/Codetest/baekjoon/2644_Kinship.cpp)
