---
title: "[프로그래머스] 영어 끝말잇기"
description: ''
date: "2020-02-04"
modified_date: "2020-02-04"
tags: [Programmers, 완전탐색]
---

# Problem

[PROGRAMMERS 영어 끝말잇기](https://programmers.co.kr/learn/courses/30/lessons/12981)

1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
4. 이전에 등장했던 단어는 사용할 수 없습니다.
5. 한 글자인 단어는 인정되지 않습니다.

다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

tank → kick → know → wheel → land → dream → mother → robot → tank

위 끝말잇기는 다음과 같이 진행됩니다.

- 1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
- 2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
- 3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
- 1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
- (계속 진행)

끝말잇기를 계속 진행해 나가다 보면, 3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.

# Solution

## 문제 접근 순서

매우 간단한 알고리즘으로 풀이

1. 배열을 하나 생성해 중복을 체크
2. 생성한 배열의 마지막 인덱스와 다음 차례의 문자를 비교
3. 배열 마지막 인덱스의 끝자리와 다음 차례 문자의 첫자리를 비교

---

## 문제 풀이

### main

```cpp
vector<int> solution(int n, vector<string> words) {
	vector<int> answer(2, 0);

	int Size = words.size();
	int person = 0;
	int turn = 1;

	result.push_back(words[0]);

	for (int i = 1; i < Size; i++) {
		person = (i % n) + 1;

		cout << person << " " << turn << "\n";

		if (is_right(words[i]) && checkWord(words[i])) {
			cout << words[i] << "\n";
			result.push_back(words[i]);
		}
		else {
			answer[0] = person;
			answer[1] = turn;
			break;
		}

		if ((person) % n == 0)
			turn++;
	}

	return answer;
}
```

words에 주어진 문자 배열이 주어지고, n은 사람 수를 의미한다. 틀린 사람의 인덱스와 틀린 사람의 차례를 answer배열에 각각 넣어 반환하는 함수이다.

person과 turn은 %를 사용하여 계산하였다.

중복체크 함수와 끝말잇기가 맞는지 확인하는 함수 두 개를 작성해서 풀었다. 둘 중 하나라도 false가 뜨면 for문이 종료되어 person과 turn이 반환되도록 구현했다.

---

### 문자 중복 점검 함수

```cpp
// 중복 점검 함수
bool is_right(string word) {
	int Size = result.size();

	for (int i = 0; i < Size; i++) {
		if (result[i] == word)
			return false;
	}

	return true;
}
```

result는 전역으로 선언되어있고 word와 같은 것이 존재하면 false를 반환한다.

---

### 끝말잇기 확인 함수

```cpp
bool checkWord(string word) {

	int Size = result.size();
	string s = result.back();
	if (s.back() != word[0]){
		return false;
	}
	return true;
}
```

result에 담긴 요소중 마지막 인덱스의 마지막 글자와 word의 첫번째 인자를 비교해서 다르면 false를 반환한다.

---

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/Programmers/12981_WordGame.cpp)
