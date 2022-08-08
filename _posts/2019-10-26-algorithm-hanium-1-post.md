---
author: Byeong Chan
title: '[한이음 코딩테스트] 문제 1'
description: ''
date: '2019-10-26'
modified_date: '2019-10-26'
categories: [Algorithm]
tags: [한이음]
---

# Problem

누나와 내가 백화점에서 물건을 구매하려고 한다.
따로 구매하려던 도중 50달러 이상을 구매하면 10달러를 할인해주는 프로모션이 진행중이였다.
나는 9달러, 50달러 물건을,
누나는 67달러 물건을 구매하려고 할 때, 총 내야하는 금액은 얼마인가?

goods배열 안에 구매하려는 물품의 가격이 제공된다.

## 제약조건

goods 요소의 크기는 1<= 요소 <= 99

## Solution

```cpp
v#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
	int SIZE; //벡터 크기
	int result = 0, sum_temp = 0;

	int solution(vector<int> goods) {
		SIZE = goods.size();

		//총 낼 금액을 먼저 산정
		for (int i = 0; i < SIZE; i++) {
			result += goods[i];
		}

		for (int i = 0; i < SIZE; i++) {

			//50 이상인 것들을 스캔하여 제외시킨다.
			if (goods[i] >= 50 )  {
				//goods[i] = 0;
				result -= 10;
			}

			//50미만이면 sum_temp 변수에 50을 더해간다
			else if(goods[i] < 50) {
				//goods[i] = 0;
				sum_temp += goods[i];
				//sum_temp가 50이상이면 그때 전체 낼 금액에서 10을 할인
				if (sum_temp >= 50) {
					result -= 10;
					sum_temp = 0;
				}
			}
		}

		//return
		return result;
	}
};

int main() {
	Solution A;
	vector<int> goods{ 5,3,15 };
	cout << A.solution(goods) << endl;

	int n;
	cin >> n;

	return 0;
}
```

main에는 입력 조건들을 설정해 놓았다. 프로그래머스와 유사하게 class 안 solution 함수를 제작하는 포맷으로 구성되어있다.

처음에 총 내야하는 금액인 전체 금액을 하고, 각 배열에 담겨있는 금액이 50달러 이상인지 체크를 한다.
50달러 이상이면 할인금액인 10달러를 빼고, 50달러 미만이면 나머지 50달러 미만인 물건들에 대한 합을 구하기 위해 temp에 값을 저장해 놓는다.
비교적 쉬웠던 문제였다.
