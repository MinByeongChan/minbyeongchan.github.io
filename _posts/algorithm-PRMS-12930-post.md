---
title: "[프로그래머스] 이상한 문자 만들기"
description: ''
date: "2020-01-15"
modified_date: "2020-01-15"
tags: [Programmers]
---

# Problem

[PROGRAMMERS 이상한 문자 만들기](https://programmers.co.kr/learn/courses/30/lessons/12930)

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

**제한 사항**

문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

# Solution

## 문제 접근 순서

1. 공백 기준으로 문자를 끈음
2. 끈은 지점까지 tmp에 저장
3. tmp기준으로 짝/홀 인덱스에 대해 변경
4. 변경은 toupper(), tolower() STL 사용

---

## 문제 풀이

### ASCII 코드 사용(실패)

```cpp
for (int end = 0; end < LEN; end++) {
		if (s[end] == ' ') {
			while (1) {
				if (start == end) break;

				//짝수 이면
				if (start % 2 == 0) {
					s[start] -= 32;
				}
				start++;
			}
		}
	}
```

예제를 보니 입력값이 소문자로만 주어져, 홀수일때만 대문자로 변경하면 될 것같아 홀수 인덱스만 ASCII코드를 사용해서 풀이했다.

돌려봣더니 전부 실패가 나와서 멘붕. 이게 뭔가 싶었다.

아마 입력 예제가 대소문자 섞여서 나오는듯 싶다.

---

### STL(tolower, touppwer) 사용(성공)

```cpp
	s += ' '; // 마지막 인덱스까지 스캔하기 위해 ' '추가
	string answer = "";
	string tmp = "";
	int LEN = s.length(); // 입력 스트링 길이

	for (int i = 0; i < LEN; i++) {

		//공백이 보이기 전까지 tmp에 입력값 저장
		if(s[i] != ' ')
			tmp += s[i];
		//공백이 보이면 tmp를 처리
		else {
			int tmpSize = tmp.length(); // tmp 길이

			// 다시 tmp에 대한 반복문
			for (int j = 0; j < tmpSize; j++) {
				//짝수
				if (j % 2 == 0)
					tmp[j] = toupper(tmp[j]); // 짝수면 무조건 대문자
				//홀수
				else
					tmp[j] = tolower(tmp[j]); // 홀수면 무조건 소문자
			}

			// answer에 tmp와 띄어쓰기를 추가
			answer += tmp;
			answer += ' ';
			tmp = "";
		}

	}

	//마지막 공백이 더해지므로 뒤에 인자는 제거
	answer.pop_back();
```

매개변수 's'에 공백을 추가해주었다. for문을 멈추는 기준을 s인덱스가 ' '(공백)일 때로 설정을 했기 때문이다.

마지막에 다시 pop_back()을 해서 추가되는 공백을 제거했다.

문자열 문제는 대부분 시간제약에서 자유로워 2중 for문을 사용했다. s[i]가 공백이 아니면 tmp라는 변수에 단어를 저장한다.

tmp는 공백 기준으로 생성된 단어이고, 이 단어를 이제 for문을 다시 돌려 인덱스가 짝수이면 toupper(), 홀수이면 tolower()로 대소문자를 변경했다. 배열 인덱스가 0부터 시작이기 때문에 제시된 문제와는 반대로 동작한다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/Programmers/LengthOfVisited.cpp)
