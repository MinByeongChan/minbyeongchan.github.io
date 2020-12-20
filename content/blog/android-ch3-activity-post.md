---
title: "[Android] Activity와 AppCompatActivity의 차이점"
date: "2020-01-08"
categories: [Android]
tags: [Android Activity AppCompatActivity Context]
comments: true
---

<style>
    .android {
        color: green;
    } 
</style>

Activity와 AppCompatActivity의 차이점을 알아보기 전에 먼저 Context를 알아야한다.

# Context란?

`Context`는 안드로이드 시스템에서 제공하는 추상 클래스를 말한다. Context는 이제부터 알아볼 Activity, AppcompatActivity, ActionBarActivity 등 과 같은 클래스들의 `슈퍼클래스`이다. 또한 액티비티, 브로드캐스트, 인텐트를 사용할 때 사용되기도 한다.

인텐트 예제를 봐도 Context가 사용되는 것을 많이 봤을 것이다.

# Activity

`Activity`는 Context로부터 불러져온 클래스 중 하나이다. 사용자의 포커싱이 주어진 상태를 말한다. 포커싱이 주어졌다는 것은 사용자가 터치하거나 어떤 이벤트를 주는 것이 가능한 상태를 말한다. Activity는 이러한 이벤트들을 실제 가능하게 만들고, 이벤트로 부터 발생한 데이터를 처리하기까지 한다.

인텐트(액티비티간 데이터를 송수신하는 것) 역시 액티비티로부터 파생되는 개념이다.

액티비티는 모든 Activity에서 `Base`를 의미한다. **즉 다른 ~Activity는 모두 Activity로부터 상속받은 클래스들이다.**

# AppcompatActivity

`AppcompatActivity`는 앞서 말했듯이 Activity를 상속받는다. 그럼 왜 따로 Activity를 상속받는 또다른 액티비티를 만들었을까?

안드로이드 버전은 계속 업그레이드 되고, 향상된 성능과 추가된 기능에 따라서 새로운 Activity가 생겨난 것이다.

관계를 나타내면 다음과 같이 생각할 수 있다. 예제로 fragment를 상속하자.

```java
public class AppCompatActivity
    extends FragmentActivity
```

android.content.`Context`
-> android.content.ContextWrapper
-> android.view.ContextThemeWrapper
-> android.app.`Activity`
-> android.support.v4.app.`FragmentActivity`
-> android.support.v7.app.`AppCompatActivity`

위에 표는 안드로이드 개발자 가이드에서 참조한 것이다.

힌눈에 상속관계를 살펴볼 수 있다. 최근에는 `androidX`까지 나왔다는 것도 알아두자.
