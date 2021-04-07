---
title: "[백준] 1316 그룹 단어 체커 (문자열)"
description: "그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다..."
date: "2019-11-01"
modified_date: "2019-11-01"
tags: [백준, 문자열]
---

# Problem

[BOJ 1316](https://www.acmicpc.net/problem/1316)

그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

# Solution

나름 재밌었던 문제. 완전탐색과 벡터를 이용해서 풀었다.

## Source

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int n;


int main() {
	cin >> n;
	int cnt = n;

	for (int i = 0; i < n; i++) {
		string str;
		cin >> str;
		if (str.length() == 1) continue;

		vector<char> storage;

		bool result = true;
		storage.push_back(str[0]);

		for (int p = 1; p < str.length(); p++) {
			if (str[p - 1] == str[p]) continue;

			for (int q = 0; q < storage.size(); q++) {
				if (storage[q] == str[p]) {
					result = false;
					break;
				}
			}
			storage.push_back(str[p]);
		}
		if (result == false) cnt--;
	}

	cout << cnt;

	return 0;
}
```

처음 스캔하는 요소면 벡터 안에 넣고, 이후 벡터 안에 요소와 같은지 여부를 따져간다. 같으면 연결되지 않은 문자가 중복되서 나온걸로 판단하고 result 를 false로 변환한다. 마지막에 false를 체크해서 총 개수를 줄여나간다. 하다보니 좀 더럽게 나왔네
