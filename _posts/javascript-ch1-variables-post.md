---
title: "[Javascript] 변수선언 방식의 차이(const, var, let)"
date: "2020-01-02"
category: Javascript
tags: Javascript
comments: true
---

## var

Javascript(이하 "JS")에서 `var`는 일반적으로 모든 변수 타입을 받는다. 일반적인 프로그래밍 언어(C/C++, Java 등등)에서는 변수마다 각 자료형을 선언해주었다. Int, char, string과같이 말이다. 하지만 JS에서는 그럴 필요가 없다. `number`는 정수, 실수 모든 것을 포함한다.

암튼 var의 기능은 이렇게 모든 자료형 타입을 받는다.

```html
<script>
  var a = "MBC" // string
  var b = 1 // int
  var c = 1.11 // float
</script>
```

모두 컴파일 에러없이 정상적으로 동작한다.

## const

C++에서도 언급했던 `const`이다. JS에서도 똑같이 적용된다. 한번 초기화한 변수는 변경 불가능한 것을 의미한다. 단, 선언 방식이 좀 다른데 아래 예제롤 보고 참고하자.

```html
<script>
  const a = "MBC"
  var b = "HELLO"

  a = b // ERROR
</script>
```

## let

`let`은 먼가 생소하다. var는 모든 자료형을 받는다고 한다. 이것은 프로그래밍 할때 큰 단점으로 다가올 수 있다. 이런 단점을 보완하기 위해 있는 것이 `let`이다.

`let`은 **scope(괄호 안)에서 재 초기화 시킨 것은 scope외 밖에서는 영향 받지 않는다.** 무슨의미인지는 아래 예제를 보면 와닿을 것이다.

```html
<script>
  let a = 10
  if(a === 10) {
      let a += 10 // scope안에서 재 초기화
  }
  document.write(a) // 변하지 않고 10 출력
</script>
```

위 예제는 a(10)에 10을 더해 20을 출력하려고 했다. 하지만 출력 결과는 10이 나온다. 이것이 let의 특성이다.

scope안에서 초기화 시켜버리면 **scope안에서**는 20이 출력될것이다.

하지만 **밖**에서는 다시 10이 출력된다.
