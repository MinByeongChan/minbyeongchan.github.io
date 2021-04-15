---
title: "[Javascript] 깊은복사와 얕은복사의 차이점"
description: ''
date: "2020-08-17"
modified_date: "2020-08-17"
tags: [Javascript, 깊은복사, 얕은복사]
---

JS에서는 얕은 복사, 깊은 복사 두가지로 나뉘는 방식으로 값 할당이 이뤄진다. 어떤건지 정리하고 넘어가자.

# 깊은 복사

```javascript
var a = 100
var b = a

alert(a)
alert(b)
```

a, b 두 변수는 완전히 독립된 변수이다. 2번 라인에서 b = a 이니 `a, b 둘다 100`이라는 값이 할당된다.

```javascript
var a = 100
var b = a
a = 200

alert(a)
alert(b)
```

위 코드에서 a에 다시 200을 할당했다. 이렇게 되면 a는 200, b는 100이 나온다.

이 결과로 두 변수가 `완전히 독립`되었다는 것을 알 수 있다. 두 변수에 별에 별짓을 해도 a는 b에, 또는 b는 a에 어떠한 영향을 미치지 않는다. 이것을 `깊은 복사`라고 한다.

# 객체의 복사

```javascript
var A_object = {
  a: 100,
  b: 100,
}
var B_object = A_object

alert(JSON.stringify(A_object))
alert(JSON.stringify(B_object))
```

이번엔 객체이다. 위 number와 같이 A, B 두개의 오프젝트가 있고 할당을 시킨다. 결과는 동일하게 나올것이다.

객체에 변수를 저장하면 실제 값을 저장하는 것이 아닌 객체를 메모리 어딘가에 만들고 객체의 위치값을 저장

```javascript
var A_object = {
  a: 100,
  b: 100,
}
A_object.a = 200

var B_object = A_object

alert(JSON.stringify(A_object))
alert(JSON.stringify(B_object))
```

다음은 A오브젝트의 a값을 변경시켜보자. A만 변경시켰을 뿐인데 B까지 변경되었다.

JS에서 오브젝트는 `=`으로 깊은 복사가 되지 않는다. JS에서 오브젝트는 `참조에 의한` 복사가 이뤄진다. 값을 할당 받는 것이 아닌 A오브젝트의 `주소`값을 받게 된다.

## 객체의 깊은 복사

따라서, 단순히 `=`을 사용해서 복사할 수 없다. 객체에서의 깊은 복사를 하려면 별도의 함수를 만들어야 한다.

```javascript
function deepCopy(obj) {
  var newObj = {}
  for (var i in obj) {
    newObj[i] = obj[i]
  }
  return newObj
}
var A_object = {
  a: 100,
  b: 100,
}

var B_object = A_object // 얕은 복사
var cloned_object = deepCopy(A_object) // 깊은 복사
A_object.a = 200

alert(JSON.stringify(A_object))
alert(JSON.stringify(B_object))
alert(JSON.stringify(cloned_object))
```

별도의 함수를 만들었다. 오브젝트를 파라미터로 받고 안에서 하나하나 손수 새로운 오프젝트에 값을 할당시켜준다. 이렇게 새로운 오브젝트를 만들어 새로운 주소값을 갖는 하나의 객체를 만들어낸다.
