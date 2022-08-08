---
author: Byeong Chan
title: '[백준] 5622 다이얼'
description: ''
date: '2019-11-01'
modified_date: '2019-11-01'
categories: [Algorithm]
tags: [BOJ, 문자열]
comments: true
---

# Problem

[BOJ 5622](https://www.acmicpc.net/problem/5622)

전화를 걸고 싶은 번호가 있다면, 숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다. 숫자를 하나 누르면 다이얼이 처음 위치로 돌아가고, 다음 숫자를 누르려면 다이얼을 처음 위치에서 다시 돌려야 한다.

숫자 1을 걸려면 총 2초가 필요하다. 1보다 큰 수를 거는데 걸리는 시간은 이보다 더 걸리며, 한 칸 옆에 있는 숫자를 걸기 위해선 1초씩 더 걸린다.

상근이의 할머니는 전화 번호를 각 숫자에 해당하는 문자로 외운다. 즉, 어떤 단어를 걸 때, 각 알파벳에 해당하는 숫자를 걸면 된다. 예를 들어, UNUCIC는 868242와 같다.

할머니가 외운 단어가 주어졌을 때, 이 전화를 걸기 위해서 필요한 시간을 구하는 프로그램을 작성하시오.

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

string st;
int LEN;
int result=0;

int Check(const char s) {
	if (65 <= s && s <= 67) {
		return 3;
	}
	else if (68 <= s && s <= 70) {
		return 4;
	}
	else if (71 <= s && s <= 73) {
		return 5;
	}
	else if (74 <= s && s <= 76) {
		return 6;
	}
	else if (77 <= s && s <= 79) {
		return 7;
	}
	else if (80 <= s && s <= 83) {
		return 8;
	}
	else if (84 <= s && s <= 86) {
		return 9;
	}
	else if (87 <= s && s <= 90) {
		return 10;
	}
	else if(s > 90){
		return 11;
	}
	else {
		return 2;
	}
}

int main() {
	cin >> st;
	LEN = st.length();

	for (int i = 0; i < LEN; i++) {
		result += Check(st[i]);
	}
	cout << result;

	return 0;
}
```

이번에도 노가다 밖에 떠오르지 않아서 이렇게 풀었다. 문자열은 노가다 밖에 없단 말인가 ㅋㅋ
