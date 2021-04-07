---
author: Byeong Chan
title: "[백준] 2941 크로아티아 알파벳"
date: "2019-11-02"
categories: [Algorithm]
tags: [BOJ 문자열]
comments: true
---

# Problem

[BOJ 2941](https://www.acmicpc.net/problem/2941)

예전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다. 따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.

| 크로아티아 알파벳 | 변경 |
| :---------------: | :--: |
|         č         |  c=  |
|         ć         |  c-  |
|        dž         | dz=  |
|         đ         |  d-  |
|        lj         |  lj  |
|        nj         |  nj  |
|         š         |  s=  |
|         ž         |  z=  |

예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.

# Solution

이상한 문제였다. 간단히 설명하면, 다이얼을 돌리는데 시간걸리는 시간을 구하는 문제이다.

1을 돌리는데 걸리는 시간을 2초가 걸리고, 옆의 숫자를 돌릴때마다 1초가 늘어난다. 단, 문제에 입력은 문자로 주어지는데 문자는 다이얼 번호 아래에 있는 문자가 해당 숫자를 의미한다.

예를 들어 UIU = 848 이 된다.
848을 돌리는데 걸리는 시간을 구하는 문제

## Source

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
	string S;
	int result=0;
	cin >> S;

	int LEN = S.length();

	for (int i = 0; i < LEN; i++) {
		if (S[i] == 'c') {
			if (S[i + 1] == '=') {
				result++;
				i += 1;
			}
			else if (S[i + 1] == '-') {
				result++;
				i += 1;
			}
			else result++;
		}
		else if (S[i] == 'd') {
			if (S[i + 1] == 'z' && S[i+2] == '=') {
				result++;
				i += 2;
			}
			else if (S[i + 1] == '-') {
				result++;
				i += 1;
			}
			else result++;
		}
		else if (S[i] == 'l' && S[i+1] == 'j') {
				result++;
				i += 1;
		}
		else if (S[i] == 'n' && S[i + 1] == 'j') {
			result++;
			i += 1;
		}
		else if (S[i] == 's' && S[i+1] == '=') {
			result++;
			i += 1;
		}
		else if (S[i] == 'z' && S[i + 1] == '=') {
			result++;
			i += 1;
		}
		else {
			result++;
		}
	}

	cout << result;

	return 0;
}
```
