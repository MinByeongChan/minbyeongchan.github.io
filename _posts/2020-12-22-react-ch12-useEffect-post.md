---
title: '[React hook] useEffect 기본 개념, 사용법'
description: '이번엔 useState에 이어서 `useEffect`에 대해 정리해보려고 한다.'
date: '2020-12-22'
modified_date: "2020-12-22"
tags: [React, useEffect, Hook]
---

[React 문서 참조해서 정리](https://ko.reactjs.org/docs/hooks-effect.html)

이번엔 useState에 이어서 `useEffect`에 대해 정리해보려고 한다. class에서는 생명주기가 있어 생명주기에 맞는 함수를 작성하면 됐었다. 이제 hook으로 넘어가면서 이 생명주기를 대체할 수 있는 hook함수들이 필수불가결하게 되었다. 그래서 그중 useEffect에 대해 면밀히 살펴 보자.

# SideEffect

useEffect를 사용하면 함수 컴포넌트에서 `side effect`를 수행할 수 있다. `side effect`는 비동기적으로 돌아가는 코드들에 대해서 말한다. 예를들어 rest API를 호출할 때 비동기적으로 데이터를 받게 되는 것도 side effect라고 말할 수 있다. 또, document 정보가 변경되는 것도 side effect이다. side effect를 대비하지 않으면 코드가 정확히 언제 동작하는지 알 수 없기때문에 useEffect hook으로 대처하는 것이다.

useEffect Hook을 `componentDidMount`와 `componentDidUpdate`, `componentWillUnmount`가 합쳐진 것으로 생각해도 좋다. 그냥 이 생명주기에 넣어야될 코드라면 useEffect안에서 처리하면 된다고 생각하자.

## 예시

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // rendering 된 이후 실행
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
      </div>
    );
  }
}
```

[React 문서 참조](https://ko.reactjs.org/docs/hooks-effect.html)

위 예제를 살펴보면 처음에 count state가 0으로 선언 되어 있고, 클릭 할 때 마다 count가 1씩 증가한다. 증가한 카운트는 document 타이틀을 변경하게 된다.

이 document 역시 side effect로 간주되기 때문에 componentDidMount(렌더링이 된 이후)에 처리 된다.

위 코드를 useEffect로 정리하면 다음과 같이 코드를 줄일 수 있다.

```js
const Example = () => {
  const [count, setCount] = useState(0);

  // rendering 된 이후 실행
  useEffect(() => {
    document.title = `You clicked ${this.state.count} times`;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

useEffect()를 사용해서 훨씬 간결하게 되었다. useEffect는 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는지 결정하게 된다. useEffect를 호출하고 안에 함수를 작성해서 사용하는 방식이다. useEffect안에서 count state를 접근할 수 있어 쉽게 변경할 수 있다.

useEffect는 렌더링 이후 매번 실행이 된다. 첫번째 렌더링 후 모든 동작이 업데이트로서 동작한다. 단순히 DidMount, DidUpdate 가 동작할 때 useEffect가 동작하는 것이다 라고 생각하면 된다.

정확히, 컴포넌트가 렌더링 될때, 리액트는 이용했던 effect를 기억했다가 dom이 업데이트 된 이후에 실행된다고 한다. 이러한 동작은 첫렌더링, 이후 렌더링 모든 동작에 똑같이 적용된다. 그럼 렌더링이 여러번 된다면 state값이 정확히 변경되는 것에 대한 걱정을 할 수 있는데 effect는 이전 것과 이후 것을 교체해서 교차적으로 동작한다. 그래서 각각의 effect들은 결국 연관이 되어있기 때문에 최종적으로 변경되는 state에 대해서는 오차 없이 변경시킨다.

다른 말로 바꾸면 effect는 호출 순서에 따라 연쇄적으로 동작하기 때문에 브라우저 화면이 언제 변경되는지에 대한 영향을 받지 않는다. 그렇기 때문에 side effect에 영향을 받지 않게 되는 것이다.

`요약하자면, effect는 호출되는 순서에 따라 연쇄적으로 동작한다. 그래서 dom생성과 관련없이 동작하기 때문에 side effect에 대응할 수 있는 것이다.`

# Multiple Effect

class메서드가 관련이 없는 로직들을 모아놓고 여러개의 메서드에 나누어 놓는 경우가 자주 있다. 이러한 경우를 대비해서 Hook은 useEffect를 여러개 나누어 사용가능하도록 지원한다.

위에서 언급한데로 useEffect을 사용하면 호출 될때마다 업데이트가 된다. 하지만, 업데이트를 위한 특별한 코드가 필요하진 않다.

처음 state가 마운트 되고, 업데이트가 A,B,C 차례로 이뤄난다고 가정해보자.

useEffect는 업데이트 되는데로 순차적으로 동작한다.(useEffect는 한 함수에서 여러번 사용 가능하다.)

1. A-> useEffect()
2. B-> useEffect()
3. C-> useEffect()

```js
function Example = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // A
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    // B
  });

  useEffect(() => {
    // C
  });
}
```

이러한 경우 역시 위에서부터 A, B, C 순으로 effect가 호출된다. effect안에 re-rendering되는 코드가 있어도 호출 순서 역시 같고 호출 될때마다 업데이트 된다. 그리고 effect는 앞서 언급한바와 같이 prev와 next를 비교해서 업데이트가 진행된다.

# 성능 이슈

모든 렌더링 이후 effect를 정리하거나 적용하는 것은 떄떄로 성능 저하를 발생시킬 수 있다.클래스 컴포넌트 경우에는 componentDidUpdate에서 prevProps, prevState와의 비교를 통해서 문제를 해결하기도 한다.

이러한 기능도 Hook에서 지원한다.

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

위의 예시에서 우리는 [count]를 두 번째 인수로 넘긴다. 이것이 의미하는 바는 다음과 같다. 만약 count가 5이고 컴포넌트가 리렌더링된 이후에도 여전히 count는 변함없이 5라면 리액트는 이전 렌더링 시의 값 [5]를 그다음 렌더링 때의 [5]와 비교합니다. `배열 내 모든 값이 같기 때문에(5 === 5) 리액트는 effect를 건너뛰게 됩니다`. 이런 식으로 최적화가 가능합니다.

count가 6으로 업데이트된 뒤에 렌더링하면 리액트는 이전에 렌더링된 값 [5]를 그다음 렌더링 시의 [6]와 비교한다. 이때 `5 !== 6` 이기 때문에 리액트는 effect를 재실행한다. 배열 내에 여러 개의 값이 있다면 그중의 단 하나만 다를지라도 리액트는 effect를 재실행한다.

이렇게 이전 state와 비교 작업을 통해 effect를 반드시 실행시키지 않을 수도 있다.
