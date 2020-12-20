---
author: Byeong Chan
date: "2020-01-20"
title: "[프로그래머스] 124 나라의 숫자"
categories: [Algorithm]
tags: [Programmers]
comments: true
---

# Problem

[PROGRAMMERS 124 나라의 숫자](https://programmers.co.kr/learn/courses/30/lessons/12899)

124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

1. 124 나라에는 자연수만 존재합니다.
2. 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.

예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

| 10진법 | 124나라 | 10진법 | 124나라 |
| :----: | :-----: | :----: | :-----: |
|   1    |    1    |   6    |   14    |
|   2    |    2    |   7    |   21    |
|   3    |    4    |   8    |   22    |
|   4    |   11    |   9    |   24    |
|   5    |   12    |   10   |   41    |

자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

**제한 사항**

> n은 500,000,000이하의 자연수 입니다.

# Solution

## 문제 접근 순서

1. 1, 2, 4 주기마다 숫자가 변화므로 진법을 이용해서 접근.
2. 3진법을 이용해서 풀려고 했는데 막힘.
3. 3에서 나누어 떨어지는 곳 마다 조건을 달리해서 접근.

---

## 문제 풀이

### 진법 처리 부분

```cpp
	string answer = "";
	vector<string> v;
	while (n > 3) {
		int x = 0;
		int remainder = 0;

		if (n % 3 == 0) {
			x = n / 3 - 1;
			remainder = n % x;
			n = x;
		}
		else {
			remainder = n % 3;
			n /= 3;
		}
		v.push_back(to_string(remainder));
	}
v.push_back(to_string(n));
```

진법을 처리하는 부분은 다음과 같이 적용했다.

n을 계속 3으로 나누어주고 3이 나누어 떨어질때 문제가 발생했다.

그래서 3으로 나눈 몫에 -1을 하여 진행시켰다.

정수 10을 예로 들면,

|    식     |    몫     | 나머지 |
| :-------: | :-------: | :----: |
|  15 / 3   | **5 - 1** |   0    |
| **4** / 3 |   **1**   |   1    |
| **1**/ 3  |     0     |   1    |

위 표를 보면 동작원리를 쉽게 알 수 있다. 진법이기 때문에 나머지를 정리해서 110이라는 결과를 낸다. 0은 "4"로 출력되어 114가 나오게 된다.

---

### 벡터 사용(시간초과)

```cpp
	while (n > 3) {
		int x = 0;
		int remainder = 0;

		if (n % 3 == 0) {
			x = n / 3 - 1;
			remainder = n % x;
			n = x;
		}
		else {
			remainder = n % 3;
			n /= 3;
		}

		v.push_back(to_string(remainder));
	}
	v.push_back(to_string(n));

	for (int i = v.size() - 1; i >= 0; i--) {
		if (v[i] == "3") {
			v[i] = "4";
		}
		answer += v[i];
	}
```

나머지 정리를 어떻게 해야하나 하다가 벡터를 받고 거꾸로 받아진 것을 다시 answer에 넣어서 출력했다.

하지만 시간초과가 발생해서 멘붕...

그래서 다른 방법을 찾다 insert라는 놈을 찾았다. string에서 원하는 위치에 문자열을 삽입할 수 있게 하는 STL이다.

```cpp
string s = "hello world";
s.insert(0, "HI, ");
```

insert는 매개변수 두 개(각각 삽입 위치, 삽입 내용)가 존재한다. 위처럼 insert를 하게 되면, s는 "HI, hello world"로 초기화된다.

---

### 벡터 사용(시간초과)

```cpp
#include<iostream>
#include<string>
using namespace std;


string solution(int n) {
	string answer = "";
	int x = 0;
	int remainder = 0;

	while (n != 0) {

		if (n % 3 == 0) {
			n = (n / 3) - 1;
			answer.insert(0, "4");
		}
		else {
			answer.insert(0, to_string(n % 3));
			n /= 3;

		}
	}

	return answer;
}
```

방법은 동일하나 insert라는 놈을 적용해서 풀었다. 이렇게 했더니 5ms가 나왔던 testcase도 1ms로 줄어드는 것을 확인할 수 있었다.

이 문제는 log3(N)으로 풀어야한다 하니 시간 효율성에서 너무 야박했다. 바위에 삽질한 기분이다. 힘들게 풀었는데도 몹시 찝찝하다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/Programmers/12899_124World)
