---
title: "[프로그래머스] 가장 큰 수(C++)"
description: ''
date: "2019-10-15"
modified_date: "2019-10-15"
tags: [Programmers]
---

# Problem

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

# Solution

## 문제 접근 순서

주어진 number 변수들 중 큰 숫자를 맨 앞으로 정렬시켜 가장 큰 수를 출력하는 문제이다. 각 숫자 첫번 째 요소들을 비교하여 큰수를 내림차순으로 정렬하고, 같은 숫자이면 다음 두번 째 요소를 비교하는 방법으로 풀어봤지만
...

실패

답을 찾아봤는데 이렇게 쉬운 방법이 있을줄은 상상도 못했다.

## Solution

```cpp
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

bool comp(string a, string b) {
	return a+b > b+a ? true : false;
}

string solution(vector<int> number) {
    string answer = "";
	int SIZE = number.size();
    vector<string> temp;

	for(int i=0; i<SIZE; i++ ) {
		string x = to_string(number[i]);
		temp.push_back(x);
	}

    //sort
	sort(temp.begin(), temp.end(), comp);

	//OUTPUT
	for(int i=0; i<temp.size(); i++) {
		cout << temp[i] << " ";
	}
	cout << "\n";

	for(int i=0; i<SIZE; i++) {
		answer+=temp[i];
	}

    return answer;
}
```
