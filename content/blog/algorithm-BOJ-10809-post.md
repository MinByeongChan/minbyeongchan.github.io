---
author: Byeong Chan
title: "[백준] 10809 알파벳 찾기"
date: "2019-11-01"
categories: [Algorithm]
tags: [BOJ 문자열]
comments: true
---

# Problem

[BOJ 10809](https://www.acmicpc.net/problem/10809)

알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

# Solution

## Source

```cpp
#include <iostream>
#include <string>
using namespace std;

int result[26];
char alpha[26] = {
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
	'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
	'u', 'v', 'w', 'x', 'y', 'z'
};

int main() {

	//INPUT
	string S;
	cin >> S;
	fill(result, result + 26, -1);

	int LEN = S.length();

	for (int i = 0; i < LEN; i++) {
		for (int j = 0; j < 26; j++) {
			if (S[i] == alpha[j] && result[j] == -1) {
				result[j] = i;
				break;
			}
		}

	}

	//OUTPUT
	for (int i = 0; i < 26; i++) {
		cout << result[i] << " ";
	}

	return 0;
}
```

이번건 비교적 간단하게 풀었다. 알파벳을 배열을 만든다음 알파벳 배열을 모두 탐색하도록 하였다. 탐색 시 처음에 오는 문자의 인덱스를 넣는 것이므로 result[j] == -1이라는 조건을주어 result를 초기화 시켰다.
