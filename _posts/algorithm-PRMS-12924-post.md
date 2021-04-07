---
title: "[프로그래머스] 숫자의 표현"
description: ''
date: "2020-01-23"
modified_date: "2020-01-23"
tags: [Programmers]
---

프로그래머스 문제는 백준처럼 정형화 되어있지 않아 처음에 접근하기가 어렵다. 무엇보다 문제 이해가 잘안된다... 머리가 나쁜건지

잘못 이해한 탓에 30분 잡아먹고 왜안되지 하고 다시 문제를 봣더니 어렵게 접근하고 있었다.

각설하고, 문제를 보면 다음과 같다.

---

# Problem

[PROGRAMMERS 숫자의 표현](https://programmers.co.kr/learn/courses/30/lessons/12924)

Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15

자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

**제한 사항**

- n은 10,000 이하의 자연수 입니다.

# Solution

## 문제 접근 순서

1. 1부터 n까지 for문으로 돌려 재귀함수로 접근
2. 이하 설명 불가. 그냥 재귀로 구현.

---

## 문제 풀이

### 재귀함수로 접근

```cpp
int Check(int n, int i, int sum) {
	if (sum == n) {
		return 1;
	}

	int next = i + 1;
	if (next >= n)
		return 0;

	if (sum + next > n) //
		return 0;
	else {
		Check(n, next, sum + next);
	}
}
```

풀이 접근 방법은 먼저 main에서는 1~n까지 for문을 돌려 Check() 매개변수 i로 접근한다. 예제에서 n이 15로 주어졌고, 15를 1부터 15까지 재귀로 돌려 값이 15인지 확인한다. n과 같아지면 answer를 증가시키고 return 한다.

return 되면 다시 main의 for문 안에서는 2부터 다시 시작한다. 아래와 같은 스케줄러를 보자.

---

**1부터 시작**

- (1, 2) // 1+2(sum) 이 n보다 크면 return, 아니면 재귀
- (1, 2, 3) // 1+2+3(sum) 이 n보다 크면 return, 아니면 재귀
- (1, 2, 3, 4) // 1+2+3+4(sum) 이 n보다 크면 return, 아니면 재귀
- (1, 2, 3, 4, 5) // 1+2+3+4+5(sum) = 15, answer++

---

마지막 부분에서 15가 나왔으므로 answer를 카운트 한다. 이런식으로 1~15까지 반복한다.

코드를 이렇게 짜면 최대 N\*N이 나올 수 있다. 주어진 문제는 제한조건이 정수 10000이기 때문에 시간제한은 딱히 신경쓰지 않아도 될 것 같다.

실제로 시간을 측정했는데 다 0.000000초가 나왔다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/Programmers/12924_PresentationOfNumer.cpp)
