---
title: "[프로그래머스 레벨2] 다음 큰 숫자"
description: '자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.'
date: "2021-04-11"
modified_date: "2021-04-11"
tags: [알고리즘, Programmers]
---

# Problem

[PROGRAMMERS 레빌2 다음 큰 숫자](https://programmers.co.kr/learn/courses/30/lessons/12911)

자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

-	조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
-	조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
-	조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.

예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

제한 사항
-	n은 1,000,000 이하의 자연수 입니다.

# Solution

## 문제 접근 순서

1. 2진수 변환 후, 1의 개수를 비교하는 함수 제작
2. 숫자를 1씩 증감시켜 n의 1의 갯수와 비교

## 문제 풀이

## 2진수 변환 후 풀이(실패)

Java에서 제공하는 2진수 변환 함수를 사용해서 풀이를 해봤다. 하지만, 만들고 나서 돌려보니 시간초과가 나왔다.

1의 개수만 필요한것이지 굳이 2진수로 변환할 필요가 없었던 것이다. 그래서 1의 갯수만 가져오는 함수를 다시 만들었다.

```java
// 이진수를 변환 후 1의 갯수를 가져오는 함수
// ss는 이진 변환 후의 string
public static int getNum(String ss) {
        int s_cnt = 0;
        for (int i = 0; i < ss.length(); i++) {
            String c = String.valueOf(ss.charAt(i));
            if (c.equals("1")) {
                s_cnt++;
            } else
                continue;
        }

        return s_cnt;
    }
```

## int값에서 1의 갯수만 가져오는 함수로 풀이

아래 함수는 2로 나눠서(2진) 나머지가 1인 것만 카운트하는 함수이다. 굳이 2진으로 변환하고 1을 비교할 필요가 없었다.

```java
public static int getBinaryCnt(int n1) {
        int n1_cnt = 0;
        while (n1 != 0) {
            if (n1 % 2 == 1) {
                n1_cnt++;
            }
            n1 /= 2;
        }

        return n1_cnt;
}
public static int solution(int n) {
        int answer = 0;
        int next = n + 1;
        int n_cnt = getBinaryCnt(n);

        while (next < 10000001) {
            if (n_cnt == getBinaryCnt(next)) {
                answer = next;
                break;
            }
            next++;
        }

        return answer;
}
```

레벨2의 쉬운 문제였지만, 알고리즘을 다시 시작하는 계기로 포스트를 올려본다.


# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/Programmers/LengthOfVisited.cpp)
