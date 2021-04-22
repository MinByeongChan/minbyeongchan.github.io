---
title: "[Jquery] HTML 요소 접근 방법, GET/SET"
description: ''
date: "2020-03-21"
modified_date: "2020-03-21"
tags: [Jquery]
---

[w3schools.com 참조해서 공부](https://www.w3schools.com/jquery/jquery_dom_get.asp)

jquery에서 html 요소에 접근하는 방법이 있다. 요소에 대한 정보를 얻을 수도 있고(GET), 요소를 수정할 수도 있다(SET).

## HTML 정보 가져오기

### text()

`text()`는 html 태그에 작성되어 있는 모든 text를 가져온다.

```html
<head>
  <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      $(".test_btn").click(function () {
        alert($(".test").text())
      })
    })
  </script>
</head>
<body>
  <div>
    <p class="test">
      Hello MBC
    </p>
    <button class="test_btn">버튼</button>
  </div>
</body>
```

위 예제에서 버튼을 클릭하면 alert가 동작하도록 되어있다. alert 내용은 test 클래스에 대한 text를 가져오게 되어있는데 여기서 text는 `<p>`태그 안에 존재하는 text를 가져온 후 alert로 출력한다.

그럼 child에 대한 text도 다 가져오는가? 아니다. child에 대한 text는 가져오지 못하고 오로지 test의 p태그에 대한 text만 가져온다.

### html()

```html
<head>
    <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $(".test_btn").click(function() {
                alert($(".test").html());
            });
        });
    </script>
</head>
<body>
    <div>
        <p class="test"> Hello MBC
            <div>hello1</div>
            <div>hello2</div>
            <div>hello3</div>
        </p>
        <button class="test_btn" >버튼</button>
    </div>
</body>
```

위 예제는 html을 사용해서 가져온다. text()와는 다르게 html성분을 모두 가져온다.

그런데 `<p>`안에 요소인 div는 못가져온다. 왜그럴까. 아마 div태그가 p보다 상위 태그이기 때문에 그런듯 하다.

위 코드를 아래와 같이 수정해보자.

```html
<head>
  <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      $(".test_btn").click(function () {
        alert($(".test").html())
      })
    })
  </script>
</head>
<body>
  <div>
    <div class="test">
      Hello MBC
      <div>hello1</div>
      <div>hello2</div>
      <div>hello3</div>
    </div>
    <button class="test_btn">버튼</button>
  </div>
</body>
```

div끼리는 관계가 동등하니 html성분 모두 가져오는 것을 확인할 수 있다.

### attr()

attr은 셀렉터가 가리키는 태그의 속성을 가져오는 것이다. 속성이란 해당 태그가 갖고 있는 id, class. style, href 등을 말한다.

```html
<head>
  <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      $(".test_btn").click(function () {
        alert($(".test").attr("style"))
      })
    })
  </script>
</head>
<body>
  <div>
    <div
      class="test"
      style="width: 100px; height: 100px; background-color: brown;"
    >
      Hello MBC
    </div>
    <button class="test_btn">버튼</button>
  </div>
</body>
```

alert 내용을 보면 style의 내용을 출력되는 것을 확인할 수 있다.

## HTML 정보 넣기(SET)

각 요소들의 속성들을 GET 하는 방법을 봤다. SET도 역시 비슷한 방식으로 진행하면 된다.

### SET 예제

하나하나 귀찮으니 대표적인 예로 알아보자.

```html
<html>
  <head>
    <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
    <script type="text/javascript">
      $(document).ready(function () {
        $(".test_btn").click(function () {
          $(".test").text(function (i, origText) {
            return (
              "Hi, This is OldText : " +
              origText +
              " Hi This is Horse ! by" +
              i +
              " index."
            )
          })
        })
      })
    </script>
  </head>
  <body>
    <div>
      <div class="test" style=" background-color: brown;">Hello MBC</div>
      <button class="test_btn">버튼</button>
    </div>
  </body>
</html>
```

text()안에 function을 새롭게 정의했다. 함수에서 리턴되는 스트링 값을 text가 출력할 수 있도록 하였다. 이렇게 함수를 내부에 새롭게 정의하여 구성할 수도 있다. 그렇지 않고 그냥 텍스트만 넣어도 텍스트를 추가할 수 있다.
