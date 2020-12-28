---
title: "[React hook] hook에 대한 정리, hook에서의 state관리 useState"
date: "2020-12-21"
description: ""
categories: [React]
tags: [React useState Hook]
comments: true
---

리액트를 `do it 리액트 프로그래밍`으로 시작했다. 근데 이건 hook에 대해 전혀 다루지 않아서 hook에 대한 개념 조차 알지 못했다. 계속 리액트를 공부하다 보니 hook이란 것도 알게되어 정리하려한다.

# hook

기존 리액트는 class기반으로 작성되었다. 클래스는 constructor로 시작해서 render(), this 등의 기능이 존재하고 클래스의 생명주기에 따라서 렌더링된다. 또 생명주기에 따라 state를 언제 변경해야하는지, 변경된건 언제 적용이 되는지 확인할 수 있었다.

하지만, 너무 구조화된 나머지 굳이 쓰지 않아도 되는 함수들을 사용해야하는 번거로움 때문에 코드가 지저분해지고 복잡해지는 현상이 발생했다고한다. 그래서 hook이라는 개념이 나온것이다. 무엇보다 클래스 컴포넌트에서는 component생명주기를 고려해서 componentDidMount(), componentWillMount(), constuctor()에 의존해야한다는 불편함이 크고, this를 매번 사용해야하는 번거로움이 존재한다.

hook은 기본적으로 함수 컴포넌트로 구성되어야한다. 함수컴포넌트로 return값에 render값만 넣으면 render()를 별도로 사용하지 않아도 된다. 또한 state관리, 생명주기 관리, 비동기 처리 등을 하기 위해 hook 함수가 존재한다. 그중 가장 기본적으로 알아야할 것 `useState`를 먼저 정리하려고 한다.

## useState

함수 명에서부터 냄새가 풍긴다. state와 관련된 냄새말이다. `useState`는 컴포넌트 내부 state의 수정 및 불러오는 기능을 한다. useState 에제에 앞서 클래스에서 state를 어떻게 처리했는지에 대한 예제부터 보자.

### Class Component Example

```js
import React, { Component } from "react"

class Redux03Class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      car: "KIA",
    }
  }
  componentDidMount() {
    this.setState({
      car: "HYUNDAI",
    })
  }
  render() {
    const { state } = this.state
    return (
      <div>
        <h1>Ths is Class Component</h1>
        <h2>My car is {this.state.car}.</h2>
      </div>
    )
  }
}

export default Redux03Class
```

state를 간단히 출력하는 예제이다. contructor, componentDidMount(), render() 3개의 함수가 사용되었다. 근데 단순히 state하나만 선언하고, 변경시켜준것밖에 없는데 저렇게 길게 작성해야한다. 위 예제는 간단해서 그렇지 복잡한 코드들은 더욱더 코드가 길어지게 된다. 이러한 것을 보완하기 위해 hook을 사용한다.

### Function Component Example

```js
import React, { useState } from "react"

const Redux03 = () => {
  const [car, setCar] = useState("KIA")

  setCar("HYUNDAI")

  return (
    <div>
      <h1>Ths is Class Component</h1>
      <h2>My car is {car}.</h2>
    </div>
  )
}

export default Redux03
```

함수형 컴포넌트를 사용한 예제이다. useState()만을 사용해서 state를 관리한다. useState의 사용법은 다음과 같다.

```js
const [상태값, 상태변경함수] = useState(초기값)
```

`[]`안에 state값과 state를 변경시킬 함수를 정의한다. 그리고 useState에 파라미터는 초기값으로 값을 넣어준다. 위 예제는 `car`라는 **상태값**과 `setCar`라는 **상태변경함수**, `KIA`라는 **초기값**을 넣어줬다.

---

이렇게 useState를 사용하는 법을 알아봤다. 클래스 컴포넌트 대비 코드가 간결해졌고, 필요 이상의 코드들이 많이 줄어든것을 확인할 수 있었다. 또한 성능 역시 클래스 컴포넌트 보다 더 뛰어나다고 하니 사용하지 않을 수가 없다. 리액트에서도 hook의 사용을 권장하고 현재 대부분 변경하는 과정에 있다고 한다. 그렇다고 해서 현재 클래스 컴포넌트로 작성되어있는 것들을 함수형 컴포넌트로 변경시킬 필요까진 없다. 완벽 호환이 가능하기 때문이다. 앞으로 짜는 코드들은 hook으로 짜는것이 좋을 것 같다.
