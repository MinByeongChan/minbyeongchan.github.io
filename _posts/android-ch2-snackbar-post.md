---
title: "[Android] SnackBar의 개념, 사용법"
description: 'snackbar는 앱 사용자에게 알림메세지, 경고창 등을 나타내게 하는 기능이다.'
date: "2019-12-31"
modified_date: "2019-12-31"
tags: [Android, Snackbar]
---

<style>
    .android {
        color: green;
    } 
</style>

# SnackBar란?

snackbar는 앱 사용자에게 알림메세지, 경고창 등을 나타내게 하는 기능이다.

`dialog`로 나타내는 경우도 있지만 snackbar를 사용하여 나타내기도 한다.

## depenencies 등록

---

사용하기 전에 <a class="android">**안드로이드**</a> SDK에서 지원하는 라이브러리를 등록해야한다.

[build.gradle]

```kotlin

dependencies{
    ...
    def designVer = "28.0.0"
    implementation "com.android.support:design:$designVer"
    ...
}
```

이외에 `Lctrl+alt+Lshift+s`단축기를 누르면 dependencies를 설정할 수 있다.

## Snackbar xml

---

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main_activity"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">


    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:onClick="ClickHandler"
        android:text="SnackBar"/>

</androidx.constraintlayout.widget.ConstraintLayout>
```

"SnackBar" Button을 누르면 팝업창이 출력되는 구조이다. onClick을 사용하여 구현하였다.

## MainActivity

---

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

    }

    fun ClickHandler (view: View) {
        Snackbar.make(main_activity, "HelloWorld", Snackbar.LENGTH_INDEFINITE).show()
    }
}
```

main_activity xml파일에서 view를 객체로 받아 ClickHandler가 동작하도록 구현되었다.

make메서드를 사용하여 snackbar를 생성하고 차례대로 `layout`, `출력할 문자열`, `옵션`매개변수를 입력한다.

마지막 `옵션`인자는 출력되는 시간을 나타내는데 3가지 옵션이 있다,

1. LENGTH_LONG : 출력시간이 김.
2. LENGTH_SHORT : 출력시간이 짧음.
3. LENGTH_INDEFINITE : 계속 떠있음.

마지막으로 show()메서드를 사용하여 출력한다.

## 명시적으로 팝업창 제거

---

```kotlin
fun ClickHandler (view: View) {
        var snackbar = Snackbar.make(main_activity, "This is SnackBar", Snackbar.LENGTH_SHORT)

        snackbar.setAction("OK",  View.OnClickListener {
            @Override
            fun onClick(v : View) {
                snackbar.dismiss()
            }
        })
        snackbar.show()
    }
```

명시적으로 팝업창을 제거하는 기능을 구현하였다.
옵션 INDEFINITE옵션을 사용하면 팝업창이 계속 떠있는데 이러한 경우 제거할 방법이 없으면 안될 것이다.

그래서 명시적으로 제거하는 버튼을 넣는다.

`setAction()`메서드를 불러오고 내부 클래스로 onClick을 사용했다. `snackbar.dismiss()`메서드는 snackbar를 제거하는 메서드이다.

**마지막에는 show()를 호출**해야 적용된다.
