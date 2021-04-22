---
title: "[React] Redux, 공용 데이터 저장소 개념"
description: '리액트는 컴포넌트별로 구성되어있는 자바스크립트 기반 프레임워크입니다.'
date: "2020-12-08"
modified_date: "2020-12-08"
tags: [React, Redux]
---

# 리액트에서의 리덕스 필요성

리액트는 컴포넌트별로 구성되어있는 자바스크립트 기반 프레임워크입니다. 컴포넌트로 구성시켜 구조를 짜야하기 때문에 데이터를 주고 받아야하는 상황이 많아집니다. 데이터 주고 받는 방법은 이전에 `props`를 통해 알아봤지만, 프로젝트를 구성하다 보면 컴포넌트가 당연히 많아져 하드코딩을 할수 밖에 없어졌습니다.

```javascript
const ComponentA = ({ data }) => {
  return (
    <>
      <h1>ComponentA</h1>
      <h2>data : {data}</h2>
    </>
  )
}
const ComponentB = ({ data }) => {
  return (
    <>
      <ComponentB data={data}></ComponentB>
    </>
  )
}
const ComponentC = ({ data }) => {
  return (
    <>
      <ComponentB data={data}></ComponentB>
    </>
  )
}
const ComponentD = () => {
  const data = "hello props"

  return (
    <>
      <ComponentC data={data}></ComponentC>
    </>
  )
}

const App = () => {
  return <ComponentD />
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="Test" src="https://codepen.io/minbyeongchan/embed/RwGpQjM?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/minbyeongchan/pen/RwGpQjM'>Test</a> by ILikeTteokBoKki
  (<a href='https://codepen.io/minbyeongchan'>@minbyeongchan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

위처럼 wrapper가 많은 상황임을 고려해보면, App컴포넌트는 결국 componentD에서의 data를 출력하기 위해 ComponentD, C, B를 거쳐서야 비로소 출력을 할 수 있습니다. 예제가 적절하진 않지만, 이럴 경우 언제나 props을 주고 받는 짓은 하고 싶지 않을 것 입니다.

그래서 리액트에서는 `컨텍스트`라는 개념이 존재합니다. `Provider`와 `Consumer`가 존자해서 Provider는 데이터를 오직 전달만 가능하고 Consumer는 Provider가 제공하는 데이터를 받아서 사용할 수 있습니다. 하지만 이것 역시 불편한 점이 존재하여 Redux를 사용하려고 합니다.(자세한 설명은 생략!)

# Redux 개념

그렇다면 리덕스가 무엇인가. 리덕스는 간단히 말하여 `데이터를 공유하는 저장소`입니다. 위에서 ComponentA, B, C, D, App은 여러 컴포넌트를 거칠 필요없이 리덕스에서 뿌려주는 데이터를 받아서 사용하기만 하면 되는 개념입니다.

<div style="text-align: center;">
<img src="https://blog.codecentric.de/files/2017/12/Bildschirmfoto-2017-12-01-um-08.53.32.png" alt="drawing" width="70%" />
</div>

위 그림처럼 redux에서 제공하는 `store`는 각 컴포넌트에게 데이터를 전달합니다. 그것도 직접적으로 곧바로 전달합니다. 스토어에서 직접적으로 데이터를 받고 수정하고 적용까지 가능하다니 리액트에서 반드시 필요한 개념입니다.

## 리덕스 동작

리덕스는 구조는 다음과 같습니다.

<img src="https://miro.medium.com/max/1838/0*95tBOgxEPQAVq9YO.png" alt="drawing" width="100%"/>

- Action(액션) : 동작을 취하는 값이다. 어떤 작업(리듀서)이 동작하도록 특정 값(action)을 통해서 전달된다.

- Reducer(리듀서) : 실제로 데이터가 처리되는 부분이다. 데이터를 생성, 수정, 삭제, 조회 등 작업을 하는 동작을 말한다.

- Store(스토어) : 데이터가 저장되는 공간이다. 스토어를 통해서 컴포넌트는 데이터를 전달받는다.

- Dispatch (디스패치) : 스토어에 있는 데이터를 수정할 수 있다고 했다. View에서는 dispatch라는 함수를 통해 액션을 호출한다. 액션을 호출함으로서 리듀서를 동작시킨다.

## 동작 흐름

<br>

1. View(Component)에서 원하는 데이터를 dispatch 하여 액션을 불러온다.

2. 특정액션이 호출되면 액션에 해당하는 리듀서 내부에 switch-case 문에 의해 동작을 감지한다.

3. 리듀서가 동작한다.

4. 리듀서는 스토어에 데이터를 전달한다.

5. 스토어에 데이터가 저장된다.

6. connect함수 또는 store.getState로 데이터를 불러온다.

<iframe height="301" style="width: 100%;" scrolling="no" title="RwGpQjM" src="https://codepen.io/minbyeongchan/embed/RwGpQjM?height=301&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/minbyeongchan/pen/RwGpQjM'>RwGpQjM</a> by ILikeTteokBoKki
  (<a href='https://codepen.io/minbyeongchan'>@minbyeongchan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
