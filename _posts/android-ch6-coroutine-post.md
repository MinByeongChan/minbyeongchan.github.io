---
title: "[Android] 코루틴 개념, 동작 원리"
description: '코루틴(Coroutine)을 말하기 전에 먼저 `루틴`에 대해서 알아야한다.'
date: "2020-01-22"
modified_date: "2020-01-22"
tags: [Android, Coroutine]
---

<style>
    .android {
        color: green;
    } 
</style>

[코틀린 개발 가이드](https://kotlinlang.org/docs/reference/coroutines/coroutines-guide.html)를 보고 참조한 것이다.

# Coroutine이란?

코루틴(Coroutine)을 말하기 전에 먼저 `루틴`에 대해서 알아야한다. 루틴은 다시 `메인루틴`, `서브루틴` 2가지로 나뉜다. 루틴(Routine)은 단어 그대로 바라보면 task이다. 어떤 작업을 수행하는 것을 말한다.

예를 들어보면,

```kotlin
fun sum(a: Int, b: Int): Int{
    return a+b
}
fun main() {
    ...
    println("${sum(10, 10)}")
    ...
}
```

흔히 알고 있는 프로그래밍 구조이다. 루틴은 이러한 함수들이 동작하는 것을 통칭해서 말한다. `메인루틴`은 당연 main에서 이뤄지는 작업들을 수행하는 것을 말하고, `서브루틴`은 fun sum()에서 수행되는 작업들을 말한다.

---

## 코루틴의 동작 원리

루틴에 대해서 알았으니, 본론인 코루틴에 대해 알아보자.

코루틴은 **`Co`** + **`routine`**의 합성어로 (협동, 협력) + (루틴, 작업), 같이 작업을 수행한다는 의미이다. 같이 작업을 수행한다고 해서 쓰레드와 혼동하기 쉬운데 쓰레드와 비슷하지만 동작에서는 완전히 다르다.

위에 예제를 다시 빌려오면, 처음 루틴은 메인스레드 안에서 main으로부터 시작하고, sum() 서브루틴을 실행시키고 서브루틴이 종료되면 다시 메인으로 돌아온다. 그리고 종료된다.

하지만, 코루틴을 사용하면 sum을 일시정지? 시키고 다른 태스크를 실행할 수 있다.

```kotlin
suspend fun sum(a: Int, b: Int): Int{
    return a+b
}
fun sub(a: Int, b: Int): Int{
    return a+b
}
fun mul(a: Int, b: Int): Int{
    return a*b
}
fun div(a: Int, b: Int): Int{
    return a/b
}
fun main() {
    println("${sum(10, 10)}")
    println("${sub(10, 10)}")
    println("${mul(10, 10)}")
    println("${div(10, 10)}")
}
```

suspend 키워드는 코루틴에서 사용하는 것으로 서브루틴을 일시정지 시키는 것을 말한다. 일시정지 시키면 서브루틴은 **return되어 종료되는 것이 아니라**, 다른 서브루틴을 수행시키고 **다시 돌아와 sum()을 동작**시킨다.

이러한 코루틴 기능으로 비동기처리를 수행할 수 있다. 만약 RestAPI를 이용하여 CRUD 작업을 수행할 때, RestAPI작업에 대한 코루틴을 생성하여 작업시키면 효율적으로 처리할 수 있다.

---

## Coroutine ? Thread ? 무슨 차이??

### 쓰레드

쓰레드의 개념부터 말하자면 운영체제(OS)로부터 자원을 할당 받은 프로세스가 작업을 수행할 때의 파생되는 개념이다.

쓰레드는 프로세스가 어떤 작업을 수행할 때의 그 작업의 단위를 말한다.

무슨의미냐면 된장찌개를 끓일 때 된장을 넣는작업, 두부를 써는 작업, 고기를 볶는 작업 등을 각각 하나의 쓰레드라고 생각하면 될 것 같다. ㅋㅋㅋ

암튼 쓰레드의 개념은 이러하고 각각 CPU로부터 사용 권한을 얻어 작업을 수행한다. CPU의 직접적인 작업을 받는 다는 것이 핵심이다.

---

### 두 개념의 차이

쓰레드는 한 개가 존재할 수 있고, 100개, 1000개 그 수가 다양하게 존재할 수 있다. 하지만 개수가 늘어나면 늘어날 수록 CPU는 해야 될 일이 증가한다는 의미고 **성능의 저하를 초래**한다.

실제로 CPU는 **컨텍스트 스위칭(Context Switching)** 이라는 것을 하는데 A쓰레드가 B로 전환될 때 사용되는 기능이다. 하지만 컨텍스트 스위칭은 많은 자원의 소비를 나타낸다.

이러한 부담을 줄이기 위해 코루틴을 사용하는 방법이 있다. 코루틴은 **한 개의 쓰레드 안에서 동작**하게 되어 CPU에 대한 부담을 줄일 수 있다.

또한, 개발자가 작업하기 편리하기 구현할 수 있다는 장점이 있다.

---

## 코루틴의 시작

### 라이브러리 추가

**build.gradle(module)** 에 dependencies를 추가한다.

```kotlin
implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core:1.0.0'
```

---

### 코루틴 선언 및 실행

```kotlin
GlobalScope.launch(Dispatchers.Default) {
    repeat(3){
        delay(1000L)
        println("Coroutine I'm working")
    }
}
println("This is main")
```

코루틴을 사용하기 위해서 `GlobalScope`이란 객체를 사용해야한다. `launch`는 **코루틴의 시작**을 알린다.

`launch` 괄호 안에는 실행시킬 코드가 들어간다. 쓰레드를 사용하는 법과 거의 비슷하다. launch는 조건을 설정할 수 있다. 안에 들어가는 Dispatchers에 대한 조건을 추가할 수 있는데, 이것은 쓰레드 설정을 의미한다.

- Default : launch{} 와 동일하고 백그라운드 쓰레드로 사용된다.
- Uniconfined : main쓰레드에서 동작시킬 때 사용된다. 정확히는 다르다고 한다.
- newSingleThreadContext : 코루틴을 실행시키기 위해 쓰레드를 하나 더 생성하는 것이다. 일반적인 코루틴과는 달리 자원을 더 소비하게 된다.
- runBlocking : main 쓰레드에서 동작한다.

먼저 This is main 이출력되고 이후 Coroutine 출력 결과가 3차례에 걸쳐 나온다. 먼저 메인 쓰레드에서 동작하는 출력문이 시작되고 처리가 끝나면 이후 코루틴이 동작하게 된다.

`repeat()`는 코루틴에서 제공하는 함수이고, 동작을 반복시킬 때 사용된다.

`delay()`단순히 코드 실행을 멈출 때 사용된다. 매개변수는 ms단위로 입력해야한다.

---

### runBlocking

```kotlin
fun main() {
    val job = GlobalScope.launch {
        delay(1000L)
        println("World!")
    }
    println("Hello, ")
    runBlocking {
       delay(5000L)
    }
}
```

`runBlocking`은 메인스레드를 받아 사용된다. 따라서 Hello가 출력되는 동시에 delay도 같이 동작하게 되고, 또 coroutine도 background로 같이 동작한다. 코루틴도 같이 동작하므로 Hello 이후, 1초 후에 World가 출력되고 4초 뒤에 JVM이 종료된다.

---

### 코루틴 종료 : cancel()

```kotlin
val job = GlobalScope.launch {
            repeat(1000) { i ->
                println("job: I'm sleeping $i ...")
                delay(1000L)
            }
        }
        runBlocking {
            delay(2300L) // delay a bit
            println("main: I'm tired of waiting!")
            job.cancel() // 코루틴 종료
            println("main: Now I can quit.")
        }
```

**결과 :**

```kotlin
job: I'm sleeping 0 ...
job: I'm sleeping 1 ...
job: I'm sleeping 2 ...
main: I'm tired of waiting!
main: Now I can quit.
```

로그를 보면 job이 코루틴으로 동작하는 루틴이고, main은 메인쓰레드에서 동작하는 것을 말한다.

runBlocking은 코루틴이 실행됨과 동시에 실행된다. runBlocking에서 delay를 1300ms기다린 후, 코루틴 종료 함수인 job.`cancel()`으로 코루틴을 종료시킨다.

- 코루틴에서는 출력하고, 1초 딜레이,
- 출력하고, 다시 1초 딜레이

이때 runBlocking에서는 2.3초밖에 기달리지 않으므로 다음 출력이 되기 전에 job.cancel()이 동작하는 것이다.

---

### 코루틴 종료 2 : cancelAndjoin()

`cancelAndjoin()`은 cancel()과 조금 다르다.

cancel()은 코루틴을 바로 종료하는데 반면에 `cancelAndjoin()`은 코루틴의 동작이 끝날 때까지 기다린 후 종료된다.

위에서는 repeat()가 있는데 한마디로 1000번 반복을 다 마친 후 종료하는 것이 아니라 도중에 **break**된다는 것이다.

---

### try, finally

```kotlin
val job = GlobalScope.launch {
        try{
            repeat(1000) { i ->
                println("job: I'm sleeping $i ...")
                delay(1000L)
            }
        }
        finally {
            println("job: I'm running finally ...")
        }
    }

    delay(2300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancelAndJoin() // 코루틴이 완료될 때까지 기다린후 종료
    println("main: Now I can quit.")
```

**결과 :**

```kotlin
job: I'm sleeping 0 ...
job: I'm sleeping 1 ...
job: I'm sleeping 2 ...
main: I'm tired of waiting!
job: I'm running finally ...
main: Now I can quit.
```

try, catch라고 생각하면 안된다. 코루틴에서는 try가 메인과 같이 동작하되 **마지막에 finally가 동작**하는 거이다.

cancelAndjoin()이 되면 코루틴이 종료된다는 의미인데, 종료되면 바로 끝내는 것이 아니라 마지막 `finally` 부분이 동작하고 코루틴이 종료된다.

---
