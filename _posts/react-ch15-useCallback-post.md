---
title: '[React hook] useCallback, 컴포넌트 성능 최적화'
date: '2021-01-05'
categories: [React]
tags: [React useCallback Hook]
comments: true
---

[React 문서 참조](https://ko.reactjs.org/docs/hooks-reference.html#usecallback)
[daleseo 참조](https://www.daleseo.com/react-hooks-use-callback/)

# useCallback

이번엔 `useCallback`이다.

`useMemo`와 마찬가지로 메모이제이션 기법을 사용하여 성능을 최적화 시킨다.

useMemo와 차이점이 있는데, useMemo는 값을 메모이제이션시키고 메모이제이션 된 값을 받는다면, useCallback은 메모이제이션 된 콜백을 반환한다.

## useMemo 사용법

사용법은 다음과 같다

```jsx
// useCallback(함수, [배열]);
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

useCallback 안에 함수는 재사용하고 싶은 함수를 선언한다. 렌더링이 되는데 함수를 재사용? 무슨소린가 싶었는데,

컴포넌트가 렌더링 될때 컴포넌트 안에 있는 함수 역시 선언이 `재선언`된다.

함수가 재사용되는 시점은 배열이 변경되는 시점이다. 배열은 dependency array(의존 배열)로써 메모이제이션에 의존되는 배열을 말한다.

요즘같은 시대에 이런 것들로 성능이 저하 될 일은 극히 드물지만, 좋게 만들어야 나쁠건 없지 않나.

그리고 컴포넌트가 가벼운것은 괜찮지만 무거워 진다면 useCallback 또는 useMemo와 같은 메모이제이션 기법으로 최적화 시킬 수 있을것이다.

## useCallback을 사용하지 않을 때

예제를 보며 useCallback의 사용 용도를 살펴보자.

```jsx
import React, { useCallback, useEffect, useState } from 'react';
import './styles.css';

export default function App() {
  const [user, setUser] = useState({});
  let userId = 1;

  const getUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUser(json);
      });
  };

  useEffect(() => {
    console.log(`useEffect is called`);
    getUser();
  }, [getUser]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <span>title : {user.title}</span>
      </div>
    </div>
  );
}
```

위 예제는 fetch를 사용해서 user를 가져오는 예제이다.

이때, useEffect를 사용해서 sideEffect의 경우 fetch로 동작시킨다.

이때, useEffect에서의 의존 배열을 getUser로 선언했는데 결과적으로는 무한루프가 발생한다. getUser()안에 setUser가 있고 setUser는 리렌더링을 유발한다.

useEffect의 의존배열에서 함수를 받는다. useEffect는 에서의 의존배열은 이전과 비교해서 같으면 useEffect를 동작시키지 않고, 다르면 동작시키는 형태이다.

그래서 의존배열을 받아 이전 함수와 비교를 하는데, JS에서 함수를 비교하는 것은 **깊은복사(===)** 로 이뤄진다. 즉, 주소값을 비교한다고 생각하면 된다.

하지만, 함수가 재선언 될때마다 주소값은 변경되기 때문에 useEffect는 배열이 계속 변경된다고 판단하여 무한루프가 돌게 되는 것이다.

이러한 문제점을 해결하기 위해 useCallback을 사용한다.

## useCallback 사용할 때

```jsx
import React, { useCallback, useEffect, useState } from "react";
import "./styles.css";

export default function App() {

  ...

  const getUser = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUser(json);
      });
  }, [userId]);

  ...
}
```

useCallback을 사용해서 현재 함수를 메모이제이션 되도록하고, useEffect에서 불러올때는 메모이제이션 된 함수를 가져오기 때문에 리렌더링이 되지 않고, 무한루프도 돌지 않게 된다.

<iframe src="https://codesandbox.io/embed/quirky-meninsky-qsvfc?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="quirky-meninsky-qsvfc"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
