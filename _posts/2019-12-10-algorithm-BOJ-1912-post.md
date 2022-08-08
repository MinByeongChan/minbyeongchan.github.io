---
title: '[백준] 1912 연속합'
description: '개의 정수로 이루어진 임의의 수열이 주어진다...'
date: '2019-12-10'
modified_date: '2019-12-10'
tags: [백준, DP]
---

# Problem

[BOJ 1912](https://www.acmicpc.net/problem/1912)

n개의 정수로 이루어진 임의의 수열이 주어진다. 우리는 이 중 연속된 몇 개의 수를 선택해서 구할 수 있는 합 중 가장 큰 합을 구하려고 한다. 단, 수는 한 개 이상 선택해야 한다.

예를 들어서 10, -4, 3, 1, 5, 6, -35, 12, 21, -1 이라는 수열이 주어졌다고 하자. 여기서 정답은 12+21인 33이 정답이 된다.

# Solution 1

## 문제 접근 순서

1. 제한시간 조건과 주어진 n의 최대값을 보고 완전탐색으로 접근하면 효율성 문제가 있을거같음.
2. DP로 접근.
3. 한차례의 반복문이 시작되고 최대값을 계속해서 갱신
4. 배열의 인덱스 값이 음수일때를 분기점으로 하여 다시 최대값 갱신

n의 값이 5000이상 일때 동작이 안됨...

원인은 스택오버플로우 현상때문에 발생하는듯 하다.

BinarySearch함수에서 적당한 시간에 빠져나오지 못하여 스택이 샇이고 도중에 중단되는 것 같다. 탈출조건을 잘 설정한 것 같은데 이상하게 안된다.

### Source 1

{% highlight cpp %}
void BinarySearch1(int i, long long int sum) {

    long long int sum_temp = sum + v[i];

    if (sum_temp < dp[i])
    	return;

    // Update dp[i](max value)
    if (sum_temp > dp[i])
    	dp[i] = sum_temp;

    // Searching for max value
    if (dp[i] > mx)
    	mx = dp[i];

    if (i > N - 2)
    	return;

    BinarySearch1(i + 1, dp[i]);

    if (v[i + 1] < 0 && i < N-3)
    	BinarySearch1(i + 2, 0);

}
{% endhighlight %}

# Solution 2

## 문제 접근 순서

`탑다운` 방식으로 풀이할때 리턴값을 제대로 설정을 못해 `바텀업` 접근 방식으로 풀이를 진행하였다.

1. 각 벡터에 대한 입력을 받은 후 dp벡터에 그대로 복사.
2. dp[i-1]이 음수일때를 체크.
3. dp[i-1] + dp[i] 가 양수이면 계속 dp[i]에 더함.
   (계속 더하는 것이 최대값을 갖는 방법이기 때문)
4. 매 반복시 최대값을 검사.

### Source 2

{% highlight cpp %}
int main() {
cin >> N;
v.resize(N);

    for (int i = 0; i < N; i++)
    	cin >> v[i];

    // duplicate Input vector
    dp = v;

    //Binary search
    //BinarySearch(0, 0);

    // when First index is minus value,
    if (dp[0] > mx)
    	mx = dp[0];

    for (int i = 1; i < N; i++) {

    	if (dp[i - 1] > 0 && dp[i] + dp[i - 1] > 0) {
    		dp[i] += dp[i - 1];
    	}
    	if (mx < dp[i])
    		mx = dp[i];
    }

    cout << mx;

    return 0;

}
{% endhighlight %}

문제만 보면 별로 어려울것 같지 않은 문제였지만 생각보다 오래걸린 문제였다. 아직 탈출조건을 잘 설정 못해서 계속 해맷다. 갈길이 멀다.
