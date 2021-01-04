---
title: '[React hook] useMemo, 컴포넌트 성능 최적화'
date: '2021-01-04'
categories: [React]
tags: [React useMemo Hook]
comments: true
---

[React 문서 참조해서 정리](https://ko.reactjs.org/docs/hooks-reference.html#usememo)

# useMemo

성능을 최적화하기 위한 hook, `useMemo`이다.

일반적으로 **state가 변경될때 마다, re-rendering**이 되는것을 알 수 있다. 또는, 불필요한 상황에서 re-rendering이 되는데, 이것은 본인이 원하는 상황이 아닐것이다. 효율성이 매우 떨어지기 때문이다.

이러한 점을 개선하기 위해 useMemo라는 hook이 있다. useMemo에서 Memo는 알고리즘에서 `Memoization`이라는 개념을 말한다.

자세한 개념은 [메모이제이션](https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98)을 참조.

## useMemo 사용법

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

useMemo안에는 함수를 넣게 된다.

초기값 a,b는 메모이제이션 기법에 의해 값이 저장이 된다. 그리고 동일한 연산이 나올 경우 다시 연산을 하지 않고 기존에 연산했던 값을 바로 가져와 효율을 높이게 된다.

useMemo는 렌더링 중에 사용된다. 따라서 렌더링이 되지 않는 함수를 넣는것은 불필요한 작업이다. 오히려 성능을 떨어뜨릴 수 있으니 상황에 맞게 useMemo를 사용하는 것이 바람직하다고 한다.

## 예제

리덕스정리할 때 사용했던 Food 리스트 예제를 다시 사용해보려고 한다.

```jsx
import React, { useMemo, useState } from 'react';
import './styles.css';

const countFood = (foods) => {
  console.log('countFood is called');
  return foods.length;
};

const Food = () => {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState('');

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onClickBtn = () => {
    setFoods([...foods, input]);
  };

  const count = countFood(foods);

  return (
    <div>
      <input type="text" onChange={onInputChange} />
      <button onClick={onClickBtn}>Add</button>
      <div>Food 갯수 : {count}</div>
      <div>
        {foods.map((data, id) => (
          <li key={id}>{data}</li>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello useMemo Test</h1>
      <Food />
    </div>
  );
}
```

위 예제는 단순히 foods 배열을 **map()**함수를 사용해서 출력만을 담당한다. 그리고 countFood라는 함수를 통해서 foods의 길이를 출력하는 예제이다.

countFood()가 호출 될 때 마다 `countFood is called`라는 콘솔을 출력하는데 input을 입력할때마다, 그리고 버튼을 클릭할 때 마다 콘솔이 호출되는 것을 확인할 수 있다.

이유는 단순하다. onChange가 bind되어 있기 때문에 변경될때마다 re-rendering이 되는 것이다. 개발자 입장에서 단순히 입력과 버튼만 동작 시키고 싶은데, input이 변경되거나, 버튼이 클릭되거나, 배열이 수정될 경우 의도치 않게 re-rendering이 된다.

이런 경우 useMemo를 사용하면 이렇게 빈번한 re-rendering을 방지할 수 있다.

```jsx
import React, { useMemo, useState } from "react";
import "./styles.css";

const countFood = (foods) => {
  console.log("countFood is called");
  return foods.length;
};

const Food = () => {
  ...

  // useMemo 사용
  const count = useMemo(() => countFood(foods), [foods]);
  //const count = countFood(foods);

  return (
    ...
  )
);
```

useMemo는 렌더링 됫던 연산 결과들을 `메모이제이션 기법`을 사용해서 내부에 저장한다. 그래서 **동일한 연산이 나올경우 저장된 결과를 바로 가져오기 때문에 효율성이 높아진다**.

하지만, 굳이 렌더링이 그렇게 많이 사용되지 않는 경우에는 오히려 독이 될 수 있으니, 경우에 맞는 상황을 잘 파악해서 사용해야한다.

아래는 sandbox에 예제를 작성해 놨으니 참고하자.

<iframe src="https://codesandbox.io/embed/zealous-hypatia-t9fqz?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="zealous-hypatia-t9fqz"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
