---
title: "[Android] SharedPreferences, 앱 내부 데이터 저장"
description: '앱 개발을 하다보면 token과 같이 데이터를 저장해야하는 상황이 닥칠 수 있다.'
date: "2020-01-16"
modified_date: "2020-01-16"
tags: [Android, SharedPreferences]
---

<style>
    .android {
        color: green;
    } 
</style>

# SharedPreferences란?

앱 개발을 하다보면 token과 같이 데이터를 저장해야하는 상황이 닥칠 수 있다. `SharedPredferences`는 **일련의 데이터를 앱 내부에 계속 저장시키는 기능**을 한다. 앱이 삭제되지 않는 이상 SharedPreferences로 저장된 데이터는 앱 내부에 남아있게 된다.

처음에 SQLite를 사용해 DB를 구축해서 저장하면 되지 않을까 싶었는데, 작은 데이터 때문에 DB를 구축해야하는 것은 상당히 비효율 적일 수 있다 생각해서 찾게 되었다.

---

## 초기 설정

```kotlin
class ShearedPreferencesActivity : AppcompatActivity() {
    ...
}
```

SharedPreferences는 `Activity`를 상속받는다. 또는 AppcompatActivty도 가능하다.

Activity내부에 SharedPreference가 있기 때문에 상속을 안하면 사용이 불가능하니 반드시 하자.

또한, SharedPreferences를 갖는 객체 또는 클래스는 앱이 시작 될 때, 처음 실행되어야한다. 앱이 처음 시작될 때 바로 실행시키기 위해 `manifest`를 설정해야한다.

```kotlin
<application
        android:name=".GlobalApplication"
        ...

        <activity android:name=".MainActivity">
        ...
        </activity>
        ...
</application>
```

```kotlin
class GlobalApplication : Application() {

    companion object{
        lateinit var prefs : SharedPreferencesActivity
    }

    override fun onCreate() {
        super.onCreate()
        prefs = SharedPreferencesActivity(applicationContext)
    }
}

```

GlobalApplication 클래스는 Preferences 객체가 담겨있는 클래스이다. 객체를 처음 생성될 때, 앱의 시작 위치가 되어야한다. 그러므로 GlobalApplication를 가장 위에 위치 시켰다.

onCreate() 안에 prefs는 SharedPreferences의 객체를 의미한다. Context를 매개변수로 처음 시작될 때의 Activity를 넘겨준다.

---

## 데이터 가져오기

```kotlin
class SharedPreferencesActivity(context: Context) {

    val prefs : SharedPreferences = context.getSharedPreferences("access_token",
        MODE_PRIVATE
    )

    //값 불러오기
    fun getPreferences(): String {
        return prefs.getString("access_token", "").toString()
    }

    //값 저장하기
    fun savePreferences(value: String) {
        val editor : SharedPreferences.Editor = prefs.edit()
        editor.putString("access_token", value)
        editor.commit()
    }
}
```

SharedPreference는 매개변수로 Context를 받는다. 그리고 GlobalApplication에서 전역으로 선언한 prefs변수를 정의한다.

```kotlin
private fun getPreferences() {
        val pref : SharedPreferences = getSharedPreferences("token", MODE_PRIVATE)
        pref.getString("token", "")
    }
```

처음에 "token"이라는 key값을 생성한다. 가져올 때는 getString을 사용한다.

getString은 인자가 두개 존재하는데 첫번째는 Key를 의미하고, 두번째는 value를 의미한다.

key를 가져오려 하는데 key가 존재하지 않으면 ""를 불러오게된다.

---

## 데이터 저장하기

```kotlin
private fun savePreferences() {
        val pref : SharedPreferences = getSharedPreferences("token", MODE_PRIVATE)
        val editor : SharedPreferences.Editor = pref.edit()
        editor.putString("token", "token message")
        editor.commit()
    }
```

불러오기와 다른점은 editor를 사용한다는 것이다.

editor를 생성하고 editor에 putString을 하여 저장한다. getString과 마찬가지로 인자가 두개이고 의미하는 바는 위와 똑같다.

"token"이라는 key, "token message"라는 value가 들어가게된다.

마지막에는 commit을 반드시 해줘야 editor에 등록된 데이터가 저장된다.

---

## Key 삭제하기

```kotlin
private fun removePreferences() {
        val pref : SharedPreferences = getSharedPreferences("token", MODE_PRIVATE)
        val editor : SharedPreferences.Editor = pref.edit()
        editor.remove("token")
        editor.commit()
    }
```

마찬가지로 editor를 사용하고 remove()에서 삭제하려는 key를 지정한다.

---

## 모든 데이터 삭제하기

```kotlin
private fun removeAllPreferences() {
        val pref : SharedPreferences = getSharedPreferences("token", MODE_PRIVATE)
        val editor : SharedPreferences.Editor = pref.edit()
        editor.clear()
        editor.commit()
    }
```

나머지는 다 동일하고 clear()를 사용한다.

---

앱이 시작될 때 SharedPredferences를 등록해야하는 것을 너무 늦게 깨달았다. 이것땜에 몇번을 삽질했는지 ...

> 티스토리 아라비안왕자님 블로그 참고해서 공부
