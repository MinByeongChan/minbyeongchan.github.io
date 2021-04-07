---
title: "[Jquery] AJAX의 기초 / 사용 방법"
description: ''
date: "2020-03-23"
modified_data: "2020-03-23"
tags: [Jquery]
---

<style>
    .test01 {
        border-radius: 5px;
        background-color: black;
        color: white;
        margin: 20px;
        padding: 10px
    }
</style>
<head>
<script src="https://code.jquery.com/jquery-1.11.3.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
            $("#execute").click(function() {
                $.ajax({
                    type: "GET",
                    url:"./test.json",
                    dataType:"JSON",
                    success: function(data) {
                        $(".content").html("name: "+ data.name+"<br/>"
                            +"age: "+ data.age+"<br/>"
                            +"major: "+data.major+"<br/>");
                    },
                    error: function(xhr, status, error) {
                        alert("ERROR!!");
                    }
                })
            })
        })    
</script>
</head>

[w3schools.com 참조해서 공부](https://www.w3schools.com/jquery/jquery_ajax_intro.asp)

AJAX( Asynchronous Javascript and XML )란, 자바스크립트와 XML을 `비동기`적으로 처리하는 기법을 말한다.

여기서 `비동기`라는 것은 일반적인 코드의 흐름이 아닌 다른 흐름으로 접근한다는 의미이다. 쓰레드로서 여러가지 방법으로 설명될 수 있는 개념이지만, 단순하게 일반적인 흐름과는 다르게 동작한다고 이해하고 넘어가면 될 것 같다.

그럼 웹에서 비동기적인 방법은 어떻게 사용될까?

네이버 메일을 예로 들어보면, 메일을 체크하고 검색하고 삭제 등 처리를 할 때 페이지가 새로고침 되지 않고 메일 리스트 바뀌는 것을 확인할 수 있다. AJAX는 웹에서 전체 페이지를 reload할 필요없이 특정 영역만을 reload하는 것을 말한다.

이곳에서는 `json으로부터` value를 얻는 방법을 정리할 것이다.

## JSON 파일

```json
{
  "name": "MBC",
  "age": "26",
  "major": "info-communication"
}
```

json은 {}안에 `key`와 `value`로 이루어져있다. `:` 기준으로 왼쪽이 key, 오른쪽이 value이다. key값을 불러와 그 키에 해당하는 value를 가져올 때 유용하게 사용된다.

위 예제에서는 name, age, major 3개의 key값으로만 구성했다.

## Jquery에서 AJAX 기본 사용법

Jquery에서는 AJAX를 지원하는 다양한 함수들이 있다. 여기서는 그 중 JSON통신만 하기 위해 사용되는 함수만 사용하려고 한다.

자세한 함수는 [w3schools.com](https://www.w3schools.com/jquery/jquery_ref_ajax.asp) 여기를 참조!

### AJAX 예제 1 (GET)

```html
<html>
  <head>
    <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
    <script type="text/javascript">
      $(document).ready(function () {
        $("#execute").click(function () {
          $.ajax({
            type: "GET",
            url: "./test.json",
            dataType: "JSON",
            success: function (data) {
              $(".content").html(
                "name: " +
                  data.name +
                  "<br/>" +
                  "age: " +
                  data.age +
                  "<br/>" +
                  "major: " +
                  data.major +
                  "<br/>"
              )
            },

            error: function (xhr, status, error) {
              alert("ERROR!!")
            },
          })
        })
      })
    </script>
  </head>
  <body>
    <input type="button" id="execute" value="execute" />
    <div>
      <p>this is MBC</p>
      <p class="content"></p>
      <p>Hello</p>
    </div>
  </body>
</html>
```

<body>
    <div class="test01">
        <input type="button" id="execute" value="execute" />
        <div>
            <p>this is MBC</p>
            <p class="content"></p>
            <p>Hello</p>
        </div>
    </div>
</body>

`$.ajxa()`는 JQuery에서 지원하는 함수이다. 이 함수 안에 AJAX를 정의하는 내용을 작성한다.

`type` : http 통신 방식인 GET / POST를 선택한다. JSON데이터를 받으려 하니 GET으로 설정했다. POST는 데이터를 보낼때 사용된다.

`url` : 비동기적으로 데이터를 받을 url을 설정한다. JSON데이터를 받기위해 json파일로 설정했다.

`dataType` : 말그대로 dataType이다.

`success` : AJAX 통신이 성공할 때 동작한다. 위 예제는 function이 바로 실행되게 만들었고 data라는 매개변수를 받는다. `data 매개변수`는 json으로 부터 받는 데이터를 말한다.

`error` : AJAX 통신이 실패할 때 동작한다. 간단하게 에러코드를 작성하면 된다.

대표적인 예를 살펴보았으니 이제 버튼을 클릭해보자.

error가 발생하는 것이 당연한데, json 통신은 서버가 실행된 상태에서 동작해야한다. 로컬에서 바로 접근할 수는 없는 듯 하다. 서버를 구동시키는 것은 여기서 다루지 않겠다.

서버가 정상적으로 동작하고 있는 상태라면 json.json파일에 있던

"name": "MBC",
"age": "26",
"major": "info-communication"

가 출력될 것이다.

### AJAX 예제 2 (POST)

```html
<html>
  <head>
    <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
  </head>
  <body>
    <input type="button" id="execute" value="execute" />
    <div>
      <p>this is MBC</p>
      <p class="content"></p>
      <input id="testData" value="1111" />
    </div>
  </body>
  <script type="text/javascript">
    $("#execute").click(function () {
      var testDataObj = { data: $("#testData").val() }
      $.ajax({
        type: "POST",
        url: "./test2.html",
        dataType: "JSON",
        data: testDataObj,
        success: function (data) {
          console.log(data)
        },

        error: function (xhr, status, error) {
          alert("ERROR!!")
        },
      })
    })
  </script>
</html>
```

이번엔 POST 방식으로 데이터를 넘기는 예제이다.

데이터를 넘기는 방식은 JSON, text 등으로 넘겨줄 수 있는데 이번 예제에서는 json으로 넘겨준다.

json으로 넘겨줄 때 자바스크립트 오브젝트를 생성해 주면서 "data"라는 key, input에 저장되어있는 1111 value를 넣어주었다.

test2.html에서 key "data"를 받아서 데이터를 확인해보면 정상적으로 데이터 송수신이 이뤄지는 것을 확인 할 수 있다.

이처럼 POST나 GET, CRUD OPERATION을 적용해 데이터를 다른 웹 페이지 또는 DB로 넘겨줄 수 있다.
