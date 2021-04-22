---
title: "[프로그래머스] 소수 찾기"
description: '한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.'
date: "2020-01-26"
modified_date: "2020-01-26"
tags: [Programmers, 에라스토테네스의체]
---

# Problem

[PROGRAMMERS 124 나라의 숫자](https://programmers.co.kr/learn/courses/30/lessons/42839)

한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

**제한 사항**

- numbers는 길이 1 이상 7 이하인 문자열입니다.

- numbers는 0~9까지 숫자만으로 이루어져 있습니다.

- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

# Solution

## 문제 접근 순서

1. 조합을 구해서 접근(실패)
2. 에라토스테네스의체 사용

---

## 문제 풀이

### 에라토스테네스의 체로 접근

먼저 주어진 numbers를 내림차순으로 정렬하여 제일 큰 값으로 만든다. 정렬은 sort를 사용했고 내림차순은 bool함수를 생성하여 적용했다.

```cpp
bool desc(int u, int v) {
	return u > v;
}
int solution(string numbers) {
	...
	sort(numbers.begin(), numbers.end(), desc);
	...
}
```

```cpp
int num = stoi(numbers);
vector<bool> temp(num + 1);

for (int i = 2; i <= num; i++) {
		if (!temp[i] && CheckNumber(i, numbers)) {
			answer++;
		}
		//에라토스테네스의 체
		if (!temp[i]) {
			for (int j = i; j <= num; j += i) {
				temp[j] = true;
			}
		}
	}
```

내림차순으로 정렬된 numbers를 stoi STL을 사용해서 int형으로 변환시켰다. 그리고 에라토스테네스의 체를 사용해서 i의 배수인 것을 제외한다. 배수로 존재하는 것들은 모두 소수가 아니기 때문이다.

```cpp
bool CheckNumber(int i, string numbers) {
	bool flag = false;
	vector<bool> visited(numbers.length());

	while(i != 0) {
		flag = false;
		int temp = i % 10;

		for (int j = 0; j < numbers.length(); j++) {
			if (temp == numbers[j] - '0' && !visited[j]) {
				flag = true;
				visited[j] = true;
				break;
			}
		}

		if (flag == false)
			return false;
		i /= 10;
	}
	return true;
}
```

CheckNumber()에서는 그 이외의 넘버들을 소수 점검을 한다. i의 각 자리수가 소수인지 확인하고 모두 소수이면 true를 반환한다.

true를 반환하기 전에 나누어 떨어지는게 존재하면 false를 반환한다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/Programmers/42839_FindPrimaryNum.cpp)
