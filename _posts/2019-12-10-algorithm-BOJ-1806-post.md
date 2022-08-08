---
title: '[백준] 1806 부분합'
description: '10,000 이하의 자연수로 이루어진 길이 N짜리 수열이 주어진다...'
date: '2019-12-10'
modified_date: '2019-12-10'
tags: [백준, 투포인트]
---

# Problem

---

[BOJ 1806](https://www.acmicpc.net/problem/1806)

10,000 이하의 자연수로 이루어진 길이 N짜리 수열이 주어진다. 이 수열에서 연속된 수들의 부분합 중에 그 합이 S 이상이 되는 것 중, 가장 짧은 것의 길이를 구하는 프로그램을 작성하시오.

# Solution 1

## 문제 접근 순서

1. 이분탐색으로 접근하자.
2. 탐색할 때 마다 left 부터 right값의 해당하는 데이터를 모두 더한다.
3. sum의 최대값을 계속 갱신
4. mid, mid+1을 스캔할 방법이 없으므로 따로 함수를 하나 생성하여 최소 길이를 구함

### Source 1

---

```cpp
#include <iostream>
#include <vector>
using namespace std;

int N;
long long int S;
int mn = 0;
vector<int> v;

bool Check() {
	long long int sum = 0;
	for (int i = 0; i < N; i++)
		sum += v[i];

	if (S <= sum)
		mn = N;
	else {
		cout << '0';
		return false;
	}

	return true;
}

void CheckMid(int left, int right, bool flag) {
	if (left < 0) return;
	if (right > N - 1) return;

	//cout << "left: " << left << " / right: " << right << "\n";

	long long int sum = 0;
	int len = (right - left) + 1;

	for (int i = left; i <= right; i++)
		sum += v[i];

	if (sum >= S) {
		if (mn > len) {
			mn = len;
		}
		return ;
	}


	if (!flag)
		CheckMid(left - 1, right, true);
	else
		CheckMid(left, right + 1, false);
}

void BinarySearch(int left, int right) {
	//break potin of BinarySearch
	if (left >= right) return ;

	int mid = (left + right) / 2;
	long long int sum = 0;
	int len = (right - left) + 1;

	for (int i = left; i <= right; i++)
		sum += v[i];

	if (sum >= S && mn > len)
		mn= len;

	if (sum < S)
		return ;

	BinarySearch(left, mid);
	BinarySearch(mid+1, right);
}

int main() {
	cin >> N >> S;
	v.resize(N);
	for (int i = 0; i < N; i++)
		cin >> v[i];

	//initialize mn
	if (!Check())
		return 0;

	int mid = (N - 1) / 2;
	CheckMid(mid, mid+1, true);

	BinarySearch(0, N-1);

	cout << mn;

	return 0;
}
```

1. 처음 Check()함수로 길이의 최대가 S를 넘는지 확인한다.
2. CheckMid()함수를 사용해 중간부터 최소길이를 구한다. 최소 길이를 구하자마자 바로 탈출하게 설정하였다.
3. 마지막으로 BinarySearch를 사용하여 함수가 동작시의 left부터 right에 해당하는 값을 더하고, 최소길이를 갱신한다.

결론적으로 solution 1은 시간초과가 발생한다. 문제에서 제시하는 시간조건에 미치지 못하는것 같다.

# Solution 2

## 문제 접근 순서

두 번째 방식은 투포인트 알고리즘을 사용해서 풀이했다.

투 포인트 알고리즘이란 두 개의 포인트를 갖고 합을 구해 나아갈 때, 합의 최소의 길이를 구할 때 사용된다. 자세한 것은 아래 소스를 보며 확인해보자.

### Source 2

---

```cpp
#include <iostream>
#include <vector>
#define INF 100000
using namespace std;

int N;
long long int S;
int mn = INF;
vector<int> v;

int main() {
	cin >> N >> S;
	v.resize(N+1);
	//INPUT
	for (int i = 0; i < N; i++)
		cin >> v[i];

	//init variables
	int left = 0;
	int right = 0;
	//first index of sum is first value of vectors
	long long sum = v[0];

	//Use Two point Algorithm
	while (left <= right && right < N) {
		if (sum < S) {
			sum += v[++right];
		}
		else {
			int len = (right - left) + 1;
			if (len < mn)
				mn = len;
			sum -= v[left++];
			len--;
		}

	}

	// if total sum of vectors is lower than S
	// print "0"
	if (mn == INF)
		cout << "0";
	else
		cout << mn;

	return 0;
}
```

이 소스에서 투 포인튼는 left와 right이다. left, right 각각 으로 초기화 시켜주고, sum을 v[0]으로 초기화 시켜준 후, while문을 동작시킨다.

sum이 입력 값 S보다 작을 때, right를 1씩 증가시킨다. 부분합의 길이를 늘리는 것이다. 계속해서 더해지다가 sum이 입력 값 S 이상이 되면 len를 구하고 최솟값을 구하게 된다.

여기서 중요한 포인트는 left를 한칸씩 줄여나가며 부분합의 길이를 줄이는 것이다.

이분탐색으로 간단하게 풀릴줄 알았는데 이분탐색 마저 오류가 발생하는 문제였다. 이분탐색 뿐만 아니라, Mid탐색하는 것이 길어지면 최대 100,000까지 가기 때문에 문제가 있을것으로 생각된다.
