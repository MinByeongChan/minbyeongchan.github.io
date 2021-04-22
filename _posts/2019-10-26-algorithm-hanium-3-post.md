---
author: Byeong Chan
title: "[한이음 코딩테스트] 문제 4"
description: ''
date: "2019-10-26"
modified_date: "2019-10-26"
tags: [한이음]
---

# Problem

초기 위치와경로를 찾는 문제로 조건이 주어진다. 조건에 따라 이동하며 루트를 그리는 문제이다.

문자 'a', 'b', 'c'는 row 성질을 갖는다. 1행은 'a', 2행은 'b', 3행은 'c' 이런식으로 'h'까지 존재한다.

문자 '1', '2', '3'. '4' 는 col성질을 갖게된다. 1행은 '1', 2행은 '2', 3행은 '3' 이런식으로 '8'까지 존재한다.

|     |  a  |                   b                   |  c  |
| :-: | :-: | :-----------------------------------: | :-: |
|  3  | a3  |                  b3                   | c3  |
|  2  | a2  | **<span style="color:red">b2</span>** | c2  |
|  1  | a1  |                  b1                   | c1  |

문자의 우선순위에 따라 루트를 그리는 문제로서

예를 들어 a < b < c이기 때문에 현 위치가 a1이라면 a1에서 b1, 오른쪽으로 이동하게 된다.

오른쪽이 막혀있으면 문자우선순위가 높은쪽으로 이동하게 되어 루트를 형성하게 된다.

초기 위치가 b2 라고 하면

b2-c2-c3-b3-a3-a2-a1-b1-c1

과 같이 문자 우선순위에 따라 루트를 그리게 된다.
위 출력 루트처럼 -가 포함된 경로 루트를 문자열로 리턴하라.

## 제약조건

NxN배열이 주어진다. 매개변수 n은 배열의 크기를 의미한다. n은 2이상 8이하의 값이 주어진다.

문자열 길이가 40보다 커지면, 문자열 첫 인덱스부터 20까지 출력한다.
뒤에 "..."이란 생략 기호를 덧붙인 후, 나머지 20개의 문자를 출력한다.

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

DFS를 사용해 푼 문제이다. 사용되는 문자와 숫자를 row, col배열에 전역으로 모두 저장해 놓았다. direc라는 방향을 나타내주는 2차 배열을 선언하였고,
4번 반복하여 오른쪽, 위, 왼쪽, 아래 순으로 스캔하게된다.
(문자 우선순위 형식에 따라 순서를 설정함)

dfs마다 result에 문자를 입력시킨다.
dfs 매 시도마다 "-"을 덧붙였기 때문에 pop_back()를 사용해 마지막 인덱스 제거한다.

마지막 출력부분은 길이가 40이상이면 t_result에 substr을 사용하여 출력하려 했지만 컴파일러가 다른 관계로 구현을 못했다. 암턴 출력은 잘 되니 뭐 ...

다시 돌아와 문자열 길이가 40 미만이면 그대로를 출력하게된다.

C++ 컴파일러가 gnu C11인지 모르고 풀어서 망한 문제

진작 알았으면 풀었을 텐데, substr같은 라이브러리 사용하는 것 외에 다른 방법을 생각했을텐데 아쉽다.

일단 C14기준으로밖에 못풀어서 C14기준으로 코드를 올렸다.
