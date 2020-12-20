---
title: "[React] 초기설정, JSX, 렌더링 및 기본 개념"
date: "2020-07-05"
categories: [React]
tags: React
comments: true
---

[React 가이드 참조해서 공부](https://ko.reactjs.org/docs/rendering-elements.html)

# 초기 설정

0. `Visual Studio Code` 설치.

1. `node.js` 설치.

2. `npm -v` 명령어로 설치 확인.

3. `npm create-react-app` 으로 create-react-app 설치

4. `npm create-react-app [프로젝트 명]`;

5. cd [프로젝트 명];

6. `npm start`;

# JSX에 대한 간단한 개념

JSX는 'JavaScript XML'의 줄임말로 자바스크립트에 XML을 추가한 확장형 문법이라고 한다. 기존에 자바스크립트와 HTML파일 두개를 작성하는 번거로움이 있었지만, JSX를 사용하면 하나의 파일안에 XML 형식의 문법을 작성하여 컴포넌트를 불러오게 된다.

컴포넌트별로 불러오기 때문에 코드를 표현하기 좀 더 수월하더라.

```html
<script>
    const element = <h1>Hello, World</h1>;
<script>
```

표현식은 위와같이 나타내며 변수 안에 태그 식을 저장할 수도 있다. 물론 태그 안에 자식 태그, object 사용 등 `자바스크립트와 연동` 가능하게 만들 수 있다.

# Render

## JSX파일 생성

RCC.JSX을 생성하자.

```JSX
import React, { Component } from "react";

class RCC extends Component {
  render() {
    return <div>
      <span>Hello React!!</span>
    </div>;
  }
}

export default RCC;

```

여기에서 봐야할 것은 return 반환되는 값이다. class는 React.Component라는 컴포넌트 작성 클래스를 상속한다. Component를 상속하므로서 RCC 클래스는 리액트에서 컴포넌트로 동작하게 된다.

컴포넌트는 html 코드를 반환하는데 `div`만 반환되는것으로 보인다. div안에 뭐 여러가지 태그를 넣으면 되니 크게 문제는 안될것같다.

암튼 반환값이 html코드라는것이 핵심이다.

## App.js

리액트에서 가장 먼저 실행되는(java에서 main())파일은 `App.js`이다. App.js에서 `import`를 하여 컴포넌트를 불러온다.

처음에 App.js가 defalut 로 설정 되어있다. 이것들을 rcc컴포넌트를 불러오기 위해 수정을 하자.

```js
import React from "react"
import RCC from "./03/rcc.jsx"

function App() {
  return (
    <div className="App">
      <RCC />
    </div>
  )
}
export default App
```

위와 같이 설정하면 Hello world가 출력되는 것을 확인할 수 있다.

그렇다면 어떠한 구조로 hello world가 출력될까.

먼저 index.js를 보자.

## index.js

```js
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(<App />, document.getElementById("root"))

serviceWorker.unregister()
```

위 import부터 보면, react를 사용하기 위해 가장 기본적으로 `react`를 가져온다. 또 `react-dom`이라는 것을 가져오는데 이것은 `ReactDOM.render()`을 사용하기 위해 필요하다.

index.js에서는 render를 시켜서 처음 시작되는 js파일을 불러온다. 앞서 언급한 App.js가 먼저 실행된다고 했는데, index.js에서 App을 root로 불러오기 때문에 먼저 실행되는 구조로 동작하는 것이다.

## 리액트와 첫 대면. (정확히는 두번째)

컴포넌트는 리액트에서 어떤 역할을 할까.

JS, Jquery를 쓰다가 리액트를 써보니 확실히 유지보수성에서 편리하다는 느낌을 받았다.

JS에서 컴포넌트를 작성할 수 있지만, 날코딩 느낌이 강하다. 물론 내가 코딩을 잘 못해서 그런걸수도...

하지만 리액트에선 구조 자체가 컴포넌트별로 동작이 이뤄지게끔 구성되어있다. 이것은 오류를 발견할 때에도 비교적 빠르게 찾을 수 있고 무엇보다 코드의 재사용이 매우 간편하게 가능할 것 같다. 재사용하기에 너무 좋게 구성되어 있기 때문에 여기에 좀 반했다.

앞으로 리액트에 대해 공부하고, 숙지했던 내용들을 간단히 정리하려고 한다. 최근 일하기 시작하면서 일에 치여살고, 정신없이 살다보니 벌써 4개월이 지났다. 다시 시작해야지. 오늘은 여기까지...
