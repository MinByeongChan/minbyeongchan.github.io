---
title: "[React] 컴포넌트 개념, props 데이터 전달방법"
description: '리액트는 기본적으로 컴포넌트별로 동작한다.'
date: "2020-07-26"
modified_date: "2020-07-26"
tags: [React, 컴포넌트, props, children]
---

[React 가이드 참조해서 공부](https://ko.reactjs.org/docs/rendering-elements.html)
[di-it-라액트프로그래밍 정석 교재 참조해서 공부]()

# 컴포넌트

리액트는 기본적으로 컴포넌트별로 동작한다. 컴포넌트란, 각 HTML DOM에 대한 정보가 담겨있는 것이다. DOM에 대한 정보를 갖고 있다는것은 단순히 태그요소들만 있는 것 같은데, 데이터도 같이 같고 있다. 여기서 데이터를 props라 한다.

컴포넌트 별로 동작하기 때문에 함수의 재활용 및 재사용이 훨씬 수월하고 Jquery와 달리 트리 형태로 컴파일 되면 속도가 현저히 느려지고, 순서대로 DOM 에 대한 정보를 불러오기 때문에 속도, 성능에서 모던 웹에서는 사용하기 불편하다. 하지만 리액트에서는 컴포넌트 별로 DOM 을 불러오기 때문에 (비동기적으로 불러온다) 모던웹에 적합하다 할 수 있다.

리액트는 컴포넌트라는 강력한 요소를 갖고있어 여러 컴포넌트별로 DOM을 구성한다. 이렇게 컴포넌트로 구성하면 코드의 `재사용률이 높아져` 프로젝트의 중복되는 코드가 현저히 줄어든다.

# props

props는 컴포넌트에서 사용되는 데이터이다. 예를 들어 `<input data="">`라는 태그에서 data는 props가 된다. html에서 사용했듯이 form으로 데이터를 보내거나 name을 참조하는 등 props는 다양한 방법으로 사용된다.

props는 `읽기전용`이다. 따라서 `수정이 불가능한 요소`이다. 부모 컴포넌트로 전달받아 사용하는 것만 가능하다.

# props 데이터 전달

컴포넌트에 데이터를 선언하는 방법을 보겠다. propsComponent라는 컴포넌트가 있고 안에는 특별한 것이 없는 DOM을 반환한다.

## PropComponent 컴포넌트

```JSX
import React, { Component } from "react";
import PropTypes from "prop-types";

class PropComponenet extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

export default PropsComponenet;
```

`<div>`태그 안에는 {}안에 데이터가 담겨 있는게 있는데 이것은 props 데이터를 적용하는 부분이다. 그럼 props.name이라는 데이터는 어디서 올까? 메인에서 온다.

## App.js (메인)

```JSX
class App extends React.Component{
  render() {
    return (
      <PropComponent name="James">
    )
  }
}
```

# children

부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달하는 방법이 한가지가 더 있는데 바로 `children`이다.
children은 태그 사이의 값을 전달한다.

```jsx
<PropComponent>Hello World</PropComponent>
```

PropComponent 태그사이에 Hello World라는 값을 넣어줬다.

```jsx
class PropComponenet extends Component {
  render() {
    const { chidlren } = props

    return <div>chidlren</div>
  }
}
```

위 부모에서 Hello World라는 값을 PropComponenet 컴포넌트에 전달했다. 자식 컴포넌트는 그 데이터를 props로 전달 받는다. props는 여러값을 갖는 객체로서 그 중 children을 참조하여 값을 가져온다.

```jsx
const chidlren = props.chilren // 1
const { chidlren } = props // 2
// 1, 2 같은 의미.
```

참고로 위 코드는 같다

# Prop-types, 데이터 타입 명시

자바스크립트는 알다시피 var, let 처럼 데이터 타입을 선언하지 않는다. 어떻게 보면 편리한 것 같은데 불편한 점이 생긴다. 이를 방지하기 위해 prop-types라는 것이 있는데, 이는 데이터 타입을 고정시키는 것이다. 데이터 타입을 명시하고 초기값을 선언할 수도 있다.

```JSX
import PropType from 'prop-types';
```

위 코드를 import 해서 불러온다.

## PropComponent 컴포넌트 with PropTypes

```JSX
import React, { Component } from "react";
import PropTypes from "prop-types";

class PropComponenet extends Component {
  const { valueString, valueFunc } = this.props;

  render() {
    return (
      <div className="message-container" >
        <span>valueString: {valueString}</span>
        <span>valueFunc: {valueFunc}</span>
      </div>
    );
  }
}

// 데이터 타입 명시
PropComponenet.PropTypes = {
  valueString: PropTypes.string,
  valueFunc: PropTypes.func,
};

export default PropComponenet;
```

PropTypes를 사용해서 데이터 타입을 명시한 코드이다. valueString이라는 변수는 string으로 명시해주었다. 따라서 valueString에는 string 이외에 다른 데이터타입이 올 수 없다. 함수도 마찬가지로 적용 가능하다. `func`를 명시하면 다른 데이터 타입은 올 수 있다.

## 필수 props

props 중 필수적으로 들어가는 데이터를 명시하고 싶다면 `isRequired`를 사용하면 된다.

```JSX
// 데이터 타입 명시
PropComponenet.PropTypes = {
  valueString: PropTypes.string.isRequired,
  valueFunc: PropTypes.func,
};
```

위처럼 설정하면 valueString은 필수적으로 작성해야 컴파일이 완료된다.
