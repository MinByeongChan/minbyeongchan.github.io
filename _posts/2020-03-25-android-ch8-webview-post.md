---
title: "[Android] Webview와 Javascript 연동(Eclipse, Tomcat, Jquery)"
description: 'Webview는 안드로이드에서 Web을 제어하기 위한 개념이다.'
date: "2020-03-25"
modified_date: "2020-03-25"
tags: [Android, Coroutine, Javascript, Webview]
---

<style>
    .android {
        color: green;
    } 
</style>

[안드로이드 개발자 문서 참조](https://developer.android.com/guide/webapps/webview?hl=ko)

## WebView ??

`Webview`는 안드로이드에서 Web을 제어하기 위한 개념이다. 다시말해, 안드로이드 앱에서 웹사이트에 접근이 가능하도록 만든 것이다. 앱 안에 웹뷰를 띄우고 네이버를 사용할 수 있다는 의미이다.

그런데 네이버가 아니고 자체 개발한 버튼이나 alert 등 웹에서 동작하는 기능들을 앱에서 연동시켜 구현이 가능하다. alert이면 안드로이드 경고 다이얼로그가 나오게되고 그런 식이다.

암튼, Webview를 사용하므로서 웹에 구축된 버튼이나 여러가지 속성들을 앱(네이티브)에서 구현한 것 처럼 사용이 가능하게 만들어 webview를 활용할 수 있다. 그러면 네이티브와 web언어가 같이 공존이 가능하다는 의미인데 맞다. 웹(javascript)는 정확히 서버에서 동작하긴 하나 javascript를 제어하여 안드로이드에서 동작시킬 수 있다. 이러한 개념을 `하이브리드 앱`이라 한다.

지금부터 `Javascript에서 안드로이드를 호출`하는 예제를 살펴볼 것이다.

---

## 안드로이드 부분

본 예제는 android api 29, java기반으로 동작한다.

### manifest 설정

```java
<uses-permission android:name="android.permission.INTERNET"/>

    <application
    ...
    />

    ...
```

웹을 사용하기 위해 `INERNET` 권한을 설정해야한다.

---

### MainActivity

```java
public class MainActivity extends AppCompatActivity {

    private WebView webview;
    private TextView txt;

    Handler mHandler = new Handler();

    private String url = "http://localhost/Test_Webview/hello.html";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txt = (TextView) findViewById(R.id.textView);
        webview = (WebView)findViewById(R.id.webView);
        //javascript 연결 허용
        webview.getSettings().setJavaScriptEnabled(true);
        //webview 실행
        webview.loadUrl(url);

        //Android name을 갖은 interface 연결
        webview.addJavascriptInterface(new javaScriptInterface(), "Android");

    }

    class javaScriptInterface{
        @JavascriptInterface
        public void makeToast() {
            Toast.makeText(MainActivity.this, "호출 성공!", Toast.LENGTH_SHORT).show();
        }
    }
}
```

WEB은 local file로 하지 않고 톰캣을 사용해서 local 서버로 돌려서 만들었다.

먼저 url을 알고 있어야한다. local file로 접근하려면 file://경로로 해야할 것이다. 여기서는 local 서버의 주소로 접근해야한다.

하지만 `localhost/~` 로 url을 작성하면 안될것이다. 안드로이드는 컴퓨터 로컬이 아니기 때문에 이더넷 또는 무선랜의 아이피를 가져와야한다.

cmd -> ipconfig -> ip를 가져온 후 base url에 작성한다.

---

### webView

webView는 안드로이드에서 web에 작성된 `web페이지를 불러오는 기능을 수행`한다.

1. webView 객체 생성 및 아이디 등록

```java
private WebView webview;
...
webview = (WebView)findViewById(R.id.webView);
```

2. webView 설정

```java
webview.getSettings().setJavaScriptEnabled(true);
```

- getSettings : webView에 대한 설정을 가져온다.
- setJavaScriptEnabled(true) : 웹뷰에서 자바스크립트 사용을 허용한다.
- webview.loadUrl(url) : url을 통해 웹뷰를 실행시킨다.
- webview.addJavascriptInterface(new javaScriptInterface(), "Android")
  : 웹뷰를 자바스크립트로 연결시키는 인터페이스를 추가한다. 첫 번째 인자는 클래스가 들어가고, 두 번째 인자는 name으로 사용자가 임의로 설정한다.

#### 추가 (goBack())

```java
  @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        // Check if the key event was the Back button and if there's history
        if ((keyCode == KeyEvent.KEYCODE_BACK) && myWebView.canGoBack()) {
            myWebView.goBack();
            return true;
        }
        // If it wasn't the Back key or there's no web page history, bubble up to the default
        // system behavior (probably exit the activity)
        return super.onKeyDown(keyCode, event);
    }
    }
```

웹페이지에서 뒤로가기를 넣는 기능이다. 안드로이드에서 뒤로가기를 누르면 실제 웹페이지에서의 뒤로가기가 동작하도록 한다.

---

### 자바스크립트 인터페이스

```java
class javaScriptInterface{
        @JavascriptInterface
        public void makeToast() {
            Toast.makeText(MainActivity.this, "호출 성공!", Toast.LENGTH_SHORT).show();
        }
    }
```

실제 자바스크립트에서 실행시키는 함수가 여기에 작성된다.

`@javaScriptInterface` 어노테이션을 추가하여 자바스크립트에서 사용가능하게끔 만든다.

---

## WEB 부분

본 예제는 이클립스와 Tomcat 8.5, Jquery 기반으로 진행된다.

### html 작성

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="EUC-KR" />
    <title>Webview Test</title>
  </head>

  <style>
    .container {
      width: 100%;
    }

    #btn {
      display: block;
      width: 100px;
      height: 50px;
      background-color: #bbbbbb;
      color: black;
      margin: 0 auto;
      border: none;
      border-radius: 5px;
    }

    #btn:hover {
      border: 2px solid black;
    }
  </style>

  <body>
    <div class="container">
      <div class="content">
        <button id="btn" onClick="javascript:makeToast()">
          <b>토스트 버튼</b>
        </button>
      </div>
    </div>
  </body>

  <script type="text/javascript">
    function makeToast() {
      window.Android.makeToast()
    }
  </script>
</html>
```

html 파일에는 별 내용이 안들어있다.

핵심은 버튼과 script부분이다. 버튼 안에 onClick 속성을 추가했다. 클릭이 동작 할 때, makeToast라는 함수가 동작하고,

makeToast함수는 window.Android.makeToast()를 호출한다.

window.`Android`는 이후 안드로이드에서 name을 설정하게 되는데 이 `Android`(name은 아무렇게 지어도 됨.)를 인식해서 메서드를 찾게된다.
