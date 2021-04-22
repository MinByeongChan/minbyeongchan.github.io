---
title: "[백준] 2908 상수 (문자열)"
description: ''
date: "2019-10-22"
modified_date: "2019-10-22"
categories: [Algorithm]
tags: [BOJ, 문자열]
comments: true
---

# Problem

[BOJ 2908](https://www.acmicpc.net/problem/2908)

상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다. 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다.

상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734과 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.

두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

# Solution 1

문자열 문제중 기초 문제이다. 상수라는 친구가 숫자를 거꾸로 읽는단다. 상수라는 친구 입장에서 두 수를 비교하여 큰 수를 출력하는 문제이다.

## Source

```cpp
#include<iostream>
#include <string>
using namespace std;

string A, B;
string tempA, tempB;

int main() {
	cin >> A >> B;

	for (int i = 2; i >= 0; i--) {
		tempA += A[i];
		tempB += B[i];
	}

	stoi(tempA) > stoi(tempB) ?
		cout << tempA :
		cout << tempB;

	return 0;
}
```

좀, 많이 더럽게 푼것 같긴 하다. 문자열 다루는 것도 먼가 어색하다. 더 깔끔한 방법으로 풀 수 있을거같은데...
