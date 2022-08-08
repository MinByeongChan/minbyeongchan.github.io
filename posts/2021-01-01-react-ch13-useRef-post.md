---
title: '[React hook] useRef, 데이터 참조, 리렌더링 시 state변경 안되는 현상 해결'
description: "이번엔 `useRef`이다. DOM의 Focus를 제어할 때, ref라는 프로퍼티로 제어하기도 했다."
date: '2021-01-01'
modified_date: '2021-01-01'
tags: [React, useRef, Hook]
---

[React 문서 참조해서 정리](https://ko.reactjs.org/docs/hooks-reference.html#useref)

이번엔 `useRef`이다. DOM의 **Focus를 제어할 때**, ref라는 프로퍼티로 제어하기도 했다. 마찬가지로 ref의 hook인 useRef는 DOM의 focus제어가 가능하다. 이것 뿐만 아니라, 여러 상황에서 상용이 된다.

얼마전 useState를 handler를 통해 update를 시키려 했었는데 이상하게 변경이 되지 않았다. 정확히는 변경이 되는데 컴포넌트 자체는 최신 컴포넌트로 변경이 되질 않았다. 그래서 어떻게 해결해야 하는지 알아보는 도중, useRef라는 개념을 알게되어 정리하려 한다.

# useRef

useRef는 **ref의 hook 변형한 형태**이다. hook에서의 useRef가 어떤것인지, 사용용도는 어떻게 되는지 정리해보자.

useRef는 **참조값**, **고정값**이라고 생각하면 좋다. **DOM을 선택하는 용도로 사용**되기도 하나 **컴포넌트 안에서 state가 handler로 수정 또는 조회** 될 때, 사용되기도 한다.

**useRef는 state가 변경된다고 해서 리렌더링이 되지 않는다.** state는 변경될때(setState) 리렌더링이 되는점과 차이점이 있다. 이 점을 유의해서 사용해야한다.

## 사용법

```jsx
const ref = useRef(initialValue); // initialValue : 초기값
```

**initialValue로 useRef는 초기값을 의미**한다. 이렇게 초기화된 ref는 컴포넌트가 없어질때까지 유지한다. state가 변경되고 리렌더링이 되어도 ref값을 그대로 유지된다.

## .current

.current로 useRef값을 가져와서 사용하거나(get), 수정(update)할수도 있다.

# 용도

- setTimeout, setInterval 을 통해서 만들어진 id
- 외부 라이브러리를 사용하여 생성된 인스턴스
- scroll 위치
- child 컴포넌트와 bind 된 함수에서 state 제어

# 예제

```jsx
import React, { useRef, useState } from 'react';
import './styles.css';

const Select = ({ handleInputChange }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
    handleInputChange(event.target.value);
  };

  return (
    <>
      <select type="text" onChange={handleChange}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
};

export default function App() {
  const [state, setState] = useState({
    text: '',
  });

  const onSelectChange = (value) => {
    var obj = { ...state, text: value };

    setState(obj);
  };

  return (
    <div className="App">
      <h1>useRef Test</h1>
      <Select handleInputChange={onSelectChange} />
      <div>select value is : {state.text}</div>
    </div>
  );
}
```

위 예제를 보면 Select 컴포넌트라는 커스텀 select가 존재한다. Select 컴포넌트는 props로 onChange 함수를 parent로 부터 전달받고 binding된 onChange 함수는 parent로 전달된다. 그렇게 변경된 select 값이 parent에 반영이 된다.

하지만, select의 값이 정상적으로 변경이 안된다. 왜 그럴까. App컴포넌트에서 리턴받은 value를 받아도 컴포넌트는 re-rendering이 되지 않는다. 그렇기 때문에 state는 변경이 되어도(componentDidMount에서 동작이 되어 변경된 상태) 컴포넌트에 반영되지 않는 상황이 발생할 수 있다.

이러한 경우 렌더링이 되지 않는데 state 값을 어떻게 최신 state로 반영할 수 있을까?

이럴 경우 useRef를 사용하면 해결할 수 있다.

```jsx
export default function App() {
  const [state, setState] = useState({
    text: '',
  });
  // useRef 선언 / 초기값 "" 선언
  const selectRef = useRef('');

  const onSelectChange = (value) => {
    var obj = { ...state, text: value };
    // ref 업데이트
    selectRef.current = value;

    setState(obj);
  };

  return (
    <div className="App">
      <h1>useRef Test</h1>
      <Select handleInputChange={onSelectChange} />

      {/* selectRef로 변경*/}
      <div>select value is : {selectRef}</div>
    </div>
  );
}
```

`current`를 사용해서 ref의 값을 참조 또는 업데이트 할 수 있다.

useRef를 사용해서 변경된 값을 받고, 반영되는 값을 **selectRef로 변경**한다. 그러면 ref값을 가져오게 된다. **useRef는 변경되어도 re-rendering이 되지 않아 얼마든지 변경하여 사용해도 된다.** 하지만 re-rendering이 되지 않는 것을 고려해서 변경해야 할 것이다.

<iframe src="https://codesandbox.io/embed/runtime-brook-c46gb?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="runtime-brook-c46gb"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
