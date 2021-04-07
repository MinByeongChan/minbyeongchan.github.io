---
title: "[Javascript] 변수선언 방식의 차이(const, var, let)"
description: ''
date: "2020-01-02"
modified_date: "2020-01-02"
tags: [Javascript, Object, 배열]
---

# Object 란

객체지향은 어떤 Object를 명시하여 보다 코드 구성을 간결하고 개발자가 읽기 쉬운 형태로 구성한다. 여기서 기초가 되는 것은 당연 Object(객체)이다.

JS에서도 Object가 사용되는데, Java와 C++과는 조큼 다른 형식으로 쓰인다.

알아보기 전에 우선 배열부터 알아보자.

## 배열 선언 방법

---

```html
<script>
  var arr = [1, 2, 3, 4]
  document.write(arr[0])
</script>
```

배열선언은 다음과 같이 나타낸다. 다른 프로그래밍 언어와 별반 다르지 않다. 단지 선언 방식이 `[]`안에서 인자들이 선언된다. 호출 방식도 동일하다.

# Object

## Key와 value

JS Object는 배열과 다르게 `key`와 `value`로 구성된다. `key`와 `value`는 매우 유용하게 사용된다. 잘 알아두자.

Key는 어떤 자료를 불러올 때 부르는 **호칭**이고, value는 부르면 나타내어지는 **데이터**를 의미한다. key와 value를 배열로 여러개 선언하여 유용하게 사용할 수 있다.

아래 예제를 보고 key, value를 사용해보자.

```html
<script>
  var arr = { a: 1, b: 2, c: 3 }
  document.write(arr["a"]) // a호출시 1출력
</script>
```

arr안에서 "a"는 key에 해당하고, 1은 value에 해당한다. **:**를 사용하여 key와 value를 구분짓는다.

## 사용 예제

그럼 key와 value를 사용하여 `object`를 구현해보자.

```html
<script>
  var arr = {
    list: { a: 1, b: 2, c: 3 },
    show: function () {
      for (var key in this.list) {
        document.write(key + ":" + this.list[key] + "<br/>")
      }
    },
  }

  document.write(arr.list["a"] + "<br/>")
  document.write(arr.list["b"] + "<br/>")
  document.write(arr.list["c"] + "<br/>")

  grades.show()
</script>
```

**출력 결과 :**

```html
1 2 3 a:1 b:2 c:3
```

arr안에 list와 show라는 key값이 선언 되었다. 또 각 key값은 하위 key값들이 존재한다. list는 3개의 인자가, show는 function()함수가 존재한다.

먼저 list는 a, b, c 3개의 key값을 갖고 그에 대한 value가 존재한다.
그 결과를 확인하기 위해 document.write()를 사용하여 출력 결과를 확인했다.

arr인자를 가져오는 방법은 arr.list[]라고 선언한다. []안에는 list안에 들어있는 인자들의 key값이 된다. list[key]값을 불러오면 그에 대한 value가 출력된다.

show는 function()이라는 인자를 value로 사용됫다. 따라서 show를 불러오면 function내용이 출력되는데 주의할 점은 **show()**라고 선언해야한다. show뒤에 function이라 선언했기 때문에 show는 메소드를 의미한다.

결과적으로 key값인 a, b, c가 출력되고 그에대한 value 1, 2, 3이 차례대로 출력되는 것을 확인할 수 있다.
