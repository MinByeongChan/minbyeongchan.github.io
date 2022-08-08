---
title: "[jQuery] 셀렉터 접근 방법, 클릭 이벤트(hide, show, toggle)"
description: 'Jquery는 selector를 빠르고 간편하게 참조할 수 있어 편리하다'
date: "2020-03-21"
modified_date: "2020-03-21"
tags: [jQuery]
---

[w3schools.com 참조해서 공부](https://www.w3schools.com/jquery/jquery_hide_show.asp)

웹 개발에 필요한 정보가 많이 있다. 설명도 너무 잘되어있으니 참고하자.

Jquery는 selector를 빠르고 간편하게 참조할 수 있어 편리하다. selector에 대한 요소를 빠르게 접근하고 그에대한 이벤트 처리, 함수 동작 등 다양한 기능을 접목시킬 수 있다.

## 1. Hide / Show / toggle

### hide

먼저 hide를 보자면, 개체를 숨기고 보여주는 기능을 한다.

```html
<script type="text/javascript">
  $(document).ready(function () {
    $("p").click(function () {
      $(this).hide()
    })
  })
</script>
```

Jquery에서 `ready`는 Web browser의 DOM객체가 모두 생성이 되고 로드시키는 함수를 말한다. 그냥 처음 웹 창이 뜰때 시작된다 라고 생각하면 편할 듯 싶다.

## show

```html
<script type="text/javascript">
  $(document).ready(function () {
    $("p").click(function () {
      $(this).show()
    })
  })
</script>
```

hide와 반대로 작동된다. hide는 숨기는 기능을 하는 반면에 show는 보여주는 기능을 한다. 단순하다.

## toggle

toggle은 키고 끄는 기능을 말한다. 앱에서도 사용되고 범용적으로 쓰이는 용어이다.

Jquery에서도 역시 키고 끄는 기능을 하는데 hide와 show의 기능 두개 다 수행할 수 있다.

```html
<script type="text/javascript">
  $(document).ready(function () {
    $(".test_btn").click(function () {
      $("p").toggle(1000)
    })
  })
</script>
<body>
  <div>
    <p>Hello MBC</p>
    <button class="test_btn">버튼</button>
  </div>
</body>
```

버튼을 누를 떄 마다 click 이벤가 동작한다. click 메서드 안에는 toggle이 있고 이 toggle은 hide 됫다가 show 되기도 한다.

또한 매개변수에 동작 시간을 주어 사라지고 나타나는 시간을 조절시킬 수 있다.

## callback

`syntax: $(selector).hide(speed,callback);`

hide, show, toggle 모두 각각의 신택스가 존재한다. 위에서 매개변수를 통해 시간을 조절할 수 있다고 언급했다. 두번째로 봐야 할 것은 callback이다.

예를 들어 hide할 때 callback함수 안에 또 다른 function을 만들게 되면 hide하면서 function이 동작하게 된다.

```html
<head>
  <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      $(".test_btn").click(function () {
        $("p").toggle("slow")
        alert("hi dsadsa")
      })
    })
  </script>
</head>
<body>
  <div style="width: 100%; height: auto; background-color: #bdbdbd">
    <p>Hello MBC</p>
    <button class="test_btn">버튼</button>
  </div>
</body>
```
    
위 예제는 p태그가 hide되면서 alert가 동작하게 된다.

```html
<head>
  <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      $(".test_btn").click(function () {
        $("p").toggle("slow")
        alert("Hi, This is MBC")
      })
    })
  </script>
</head>
```

callback을 사용하지 않고, 위 예제처럼 callback으로 주어지지 않고 click 안에 넣게 되면 정상적으로 동작하지 않는다. 동작하긴 하지만, hide와 alert동작이 각각 이루어지게 되면서 결과적으로 매끄럽지 못하게 반응한다.

## 2. 셀렉터 접근

Jquery에서 셀렉터를 접근하는 방법은 여러가지가 있지만 3가지를 간략하게 언급하겠다.

### 태그로 접근

위 예제처럼 `태그로 접근`하는 방법이다. 위 예제는 p에 접근하므로 p태그로 선언되어있는 모든 요소를 클릭할 때 사라지는 이벤트가 발생하게 된다.

### ID로 접근

p태그를 보면 id가 test로 되어있다. jquery에서 `id test에 접근`하기 위해서는 `#`을 사용해서 접근한다.

```html
<script type="text/javascript">
  $(document).ready(function () {
    $("#test").click(function () {
      $(this).hide()
    })
  })
</script>
<body>
  <p id="test">hello World!</p>
</body>
```

### 클래스

마지막으로 `클래스로 접근`하는 방법이다. 클래스는 `.[클래스명]`으로 접근한다.

```html
<script type="text/javascript">
  $(document).ready(function () {
    $(".test").click(function () {
      $(this).hide()
    })
  })
</script>
<body>
  <p id="test">hello World!</p>
</body>
```
