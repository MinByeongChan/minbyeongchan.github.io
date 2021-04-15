---
title: "[Javascript] dataset 속성 정리"
description: 'dataset은 읽기 전용 속성이다. HTML과 DOM 양측에서 제공한다.'
date: "2021-04-15"
modified_date: "2021-04-15"
tags: [Javascript, dataset]
---

React에서 DOM element를 접근할 때 `ref`를 사용한다. element가 여러개 있을 경우(Element Array의 경우) 여러 props를 가져올 때 불편할 경우가 있었다. 그래서 dataset을 사용하여 해당 data를 가져오는 방식을 사용했었다.

 ref로 가져오는 케이스와 dataset을 사용하는 케이스 두가지를 정리하고자 한다.

# dataset

`dataset`은 HTML DOM에 속성을 할당하는 것을 말한다. 속성을 할당하면 해당 DOM의 속성을 가져와 사용할 수 있다. 에를들어, id, name, value 등의 값을 부여하여 해당 DOM을 접근할 때 다양한 값으로 접근이 가능하게 된다.

- dataset은 읽기 전용 속성이다. HTML과 DOM 양측에서 제공한다.

- 반환값은 DOMStringMap으로 각 데이터 특성마다 하나의 항목을 가진다고 한다.

- HTML의 사용지 지정 특성이름이 data- 으로 시작한다. `,`  `.`  `:`  `_`으로 대체 가능하다.

- DOMStringMap으로 반환될 때 dataset은 data-의 -뒤 문자부터 반환한다.

- data-abc 이면 abc만을 가져온다는 의미이다.

## 문법

```javascript
DOMStringMap = element.dataset.[camelCasedName];
```

## 사용 예시

아래 에제에서 useRef를 사용해서 element를 접근하는 경우와 dataset을 사용해서 접근하는 경우 모두 알아보자.

## ref로 element array 접근하는 방법

리스트를 출력하는 예제이다. 이때 각 `<li>` Element들은 useRef에 의해 참조되어 Element가 저장된다.

>엘리먼트를 저장하기에 앞서 먼저 useRef를 []로 초기화 해야한다. 배열로 초기화 해야만 ref변수를 Array로 인식한다.

useEffect에서 arr길이만큼 useRef를 초기화 해주고, `<li>`태그에서 ref를 접근하게 된다.

console에서 ref.current를 확인해보면 Array 형식으로 엘리먼트가 저장된 것을 확인할 수 있다.

```javascript
const List = () => {
  const arr = ["A", "B", "C", "D"];

  const [list, setList] = useState(arr);
  const ref = useRef([]);

  useEffect(() => {
    ref.current = ref.current.slice(0, list.length);
    console.log("ref", ref.current);
  }, [list]);

  return (
    <ul >
      {list.map((data, index) => (
        <li
          key={index}
          ref={(el) => {
            ref.current[index] = el;
          }}
        >
          {data}
        </li>
      ))}
    </ul>
  );
};
```

### dataset으로 element array 접근하는 방법

react에서도 dataset의 사용법은 동일하다. 태그 안 속성에 `data-abc`를 붙여주고 이후에 abc 속성을 참조하여 접근하게 되는 방식이다.

아래 예제는 클릭시 data-idx를 가져오는 이벤트를 추가했다.

```javascript
const List = () => {
  const arr = ["A", "B", "C", "D"];

  const [list, setList] = useState(arr);

  const onClickLi = (e) => {
    const idx = e.target.dataset.idx;
    console.log("idx", idx);
  };

  return (
    <ul >
      {list.map((data, index) => (
        <li
          key={index}
          data-idx={index}
        >
          {data}
        </li>
      ))}
    </ul>
  );
};
```

엘리먼트에 접근하는 방법 2가지를 알아봤다. 엘리먼트에 접근해서 width를 제어하거나 class를 추가 또는 제거해서 css를 컨트롤 할 수도 있다.

