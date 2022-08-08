---
title: "[프로그래머스] 스킬트리"
description: '선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.'
date: "2020-01-28"
modified_date: "2020-01-28"
tags: [Programmers, 완전탐색]
---

# Problem

[PROGRAMMERS 스킬트리](https://programmers.co.kr/learn/courses/30/lessons/49993)

선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

예를 들어 선행 스킬 순서가 `스파크 → 라이트닝 볼트 → 썬더`일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 따라서 `스파크 → 힐링 → 라이트닝 볼트 → 썬더`와 같은 스킬트리는 가능하지만, `썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더`와 같은 스킬트리는 불가능합니다.

선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

**제한 사항**

- 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
- 스킬 순서와 스킬트리는 문자열로 표기합니다.
- 예를 들어, C → B → D 라면 CBD로 표기합니다
- 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
- skill_trees는 길이 1 이상 20 이하인 배열입니다.
- skill_trees의 원소는 스킬을 나타내는 문자열입니다.
  - skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.

# Solution

## 문제 접근 순서

1. Check함수를 만들어서 true, false 반환값으로 answer값 갱신.
2. Check함수는 완전탐색으로 접근.
3. skill_tree[i]의 인덱스(skill_tree[i][j]) 마다 skill인자가 있는지 없는지 확인.

---

## 문제 풀이

### Check함수

```cpp
//점검 함수
bool Check(string skill, string skill_tree) {
	int skillLen = skill.length(); // skill 길이
	int skill_treeLen = skill_tree.length(); //skill_trees 길이
	int idx = 0; // skill길이만큼 점검하는 인덱스
	for (int i = 0; i < skill_treeLen; i++) {
		for (int j = 0; j < skillLen; j++) {
			//매번 skill안에 있는 인자들을 모두 점검
			//idx가 기준점이 되고, idx와 j의 일치 여부에 따라 점검이 진행됨
			if (skill_tree[i] == skill[j] && idx != j) {
				return false;
			}
			else if (skill_tree[i] == skill[j] && idx == j) { // 스킬을 제대로 찍고 있으면 idx 증가
				idx++;
			}
		}
	}
	return true;
}
```

2중 for문을 사용해서 완전 탐색으로 접근했다. 문제 조건으로 보아 완전탐색으로 접근해도 전혀 문제가 되지 않는 문제였다.

변수 idx는 기준점을 나타낸다.

---

|                   |       |     |     |     |     |
| :---------------: | ----- | --- | --- | --- | --- |
|      **idx**      | **!** |     |     |     |     |
|     **skill**     | **C** | B   | D   |
| **skill_tree**[i] | **B** | A   | C   | D   | E   |

먼저 skill_tree의 각 인덱스는 skill의 모든 인자를 점검한다.

2중포문 안에서 `B`가 `C`와 같은지 본다. 같지 않으면 넘어간다.

---

|                   |       |       |     |     |     |
| :---------------: | ----- | ----- | --- | --- | --- |
|      **idx**      |       | **!** |     |     |     |
|     **skill**     | C     | **B** | D   |
| **skill_tree**[i] | **B** | A     | C   | D   | E   |

다음에 skill_tree의 `B`가 skill의 두번째 인자 `B`를 점검한다.

이번엔 두 인자가 같다. 하지만 idx인자가 0을 가리키고 있는데 두번째 인자가 일치했다 나오므로 스킬트리에 어긋난 것으로 판단한다.

이럴땐 false를 리턴한다.

---

</br>

이러한 방식으로 모든 인자를 탐색하는 `완전탐색`으로 접근하여 문제를 풀었다. 문제조건으로 skill의 길이는 20, skill_trees의 길이는 26이기 때문에 시간조건에서 매우 자유로운 문제였다.

# Source

[Github 전체소스](https://github.com/MinByeongChan/myMBC/blob/master/Codetest/Programmers/49993_SkillTree.cpp)
