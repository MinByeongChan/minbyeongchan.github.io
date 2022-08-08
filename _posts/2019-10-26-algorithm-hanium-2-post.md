---
author: Byeong Chan
title: '[한이음 코딩테스트] 문제 2'
description: ''
date: '2019-10-26'
modified_date: '2019-10-26'
categories: [Algorithm]
tags: [한이음]
---

# Problem

아버지가 중고차를 사주신다고 하여 중고차를 알아보는 보았다. 제일 저렴한 차는 뭔가 찜찜하다고 3번째로 저렴한 중고차량을 구매한다고 한다. 같은 금액일 경우 동일한 등수로 취급한다.

## 예제

1. prices = {70, 20, 30 60, 50, 10, 80, 40, 100, 90}

이런 경우 30이 3번째로 저렴한 차량이다.

2. prices = {10, 30, 30, 20, 50, 20, 20}

10은 1개, 20은 2개, 30은 2개 50은 1개 총 7개의 차량이 존재한다.
여기서 중복 값을 허용하여 등수로 매긴다면 3번째로 저렴한 금액은 30이다.

## 제약조건

중복을 포함한 차량 수가 3개 이하면 -1을 리턴

## Solution

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <stack>

using namespace std;

class Solution {
public:
	int SIZE; //벡터 크기
	int result = 0, sum_temp = 0;

	int solution(vector<int> prices) {
		SIZE = prices.size();
		stack<int> st;
		//범위 제약조건
		if (SIZE < 3) return -1;

		//오름차순으로 소트
		sort(prices.begin(), prices.end());

		for (int i = 0; i < SIZE; i++) cout << prices[i] << " ";
		cout << "\n";

		st.push(prices[0]);
		for (int i = 1; i < SIZE; i++) {
			if (st.top() == prices[i]) {
				continue;
			}
			else if (st.top() != prices[i]){
				st.push(prices[i]);
			}

			if (st.size() == 3) break;
		}

		//return
		if (st.size() == 3)
			return st.top();
		else return -1;
	}
};

int main() {
	Solution A;
	vector<int> prices{ 80,90,80,90,80 };
	cout << A.solution(prices) << endl;

	int n;
	cin >> n;

	return 0;
}
```

스택으로 힘들게 풀었지만 set과같은 해쉬로 풀면 쉬울것같았다.
