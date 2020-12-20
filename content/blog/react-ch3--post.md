---
title: "[React] React State, 컴포넌트의 상태 관리"
date: "2020-11-10"
categories: [React]
tags: React State
comments: true
---

[React 가이드 참조해서 공부](https://ko.reactjs.org/docs/rendering-elements.html)
[do-it-라액트프로그래밍 정석 교재 참조해서 공부]()

# State

리액트는 컴포넌트 별로 구성되어 있기 때문에 각 각 컴포넌트마다 상태값이 존재한다. 그것을 `state`라 한다. `state`는 컴포넌트 안에서 변수처럼 사용할 수 있고, true,false 처럼 상태값을 나타낼때, Object로 활용 하는 등 다양한 방식으로 사용될 수 있다.

# setState()

state를 변경하는 함수이다. setState는 호츌 될 때마다 re-rendering 되기 때문에 상황에 맞게 사용해야한다.

또한, 생명주기에서 `componentDidMount`에서 호출되는 함수이므로 render()가 완료된 후 호출이 된다.

# Example1

```jsx
class Test01 extends Component {
  constructor(props) {
    super(props)
    // State initialization
    this.state = {
      arr: [
        { id: "1", name: "MBC1", age: "26" },
        { id: "2", name: "MBC2", age: "24" },
        { id: "3", name: "MBC3", age: "23" },
      ],
      flag: false, // 토글버튼 상태값
      str: "문자열",
    }

    // onClick 바인딩
    this.onClickFlag = this.onClickFlag.bind(this)
  }

  // onClick 토글버튼
  onClickFlag = () => {
    this.setState({ flag: !this.state.flag })
  }

  render() {
    const flag = this.state.flag

    return (
      <div>
        <button onClick={this.onClickFlag}>Flag Button</button>
        <div>{flag ? <div>On</div> : <div>Off</div>}</div>
      </div>
    )
  }
}
```

state를 변경하는 토글버튼 예제이다. 버튼을 클릭할 때 마다 `setState()`함수를 호출하여 state를 변경시킨다.

constructor안에 `this.onClickFlag = this.onClickFlag.bind(this)`가 있는데 보통 constructor 생성자 안에 바인딩 시킨다. 바인딩 시켜야만 onClick이 활성화 되니 반드시 해줘야한다.

# Example2

```jsx
class Test01 extends Component {
  constructor(props) {
    super(props)
    // State initialization
    this.state = {
      arr: [
        { id: "1", name: "MBC1", age: "26" },
        { id: "2", name: "MBC2", age: "24" },
        { id: "3", name: "MBC3", age: "23" },
      ],
      flag: false, // 토글버튼 상태값
      str: "문자열",
    }

    // onClick 바인딩
    this.onClickFlag = this.onClickFlag.bind(this)
  }

  render() {
    return (
      <div>
        <Example01_1 state={this.state} />
      </div>
    )
  }
}

function Example01_1({ state }) {
  const { arr, flag, str } = state

  return (
    <div>
      <ul>
        <span>{arr[0].id} </span>
        <span>{arr[0].name} </span>
        <span>{arr[0].age} </span>
      </ul>

      <ul>
        <span>{arr[1].id} </span>
        <span>{arr[1].name} </span>
        <span>{arr[1].age} </span>
      </ul>

      <ul>
        <span>{arr[2].id} </span>
        <span>{arr[2].name} </span>
        <span>{arr[2].age} </span>
      </ul>
    </div>
  )
}
```

state가 배열로 되어있을 때 활용하는 간단한 예제이다. arr안에는 각각 object가 초기화 되어있다. `Example01_1`함수는 function 컴포넌트로 단순히 출력 기능만 담당하는 함수이다.
