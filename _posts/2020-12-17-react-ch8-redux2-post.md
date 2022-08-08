---
title: "[React] Redux, 스토어에 데이터 저장하는 방법"
description: '리덕스는 크게 액션, 리듀서, 스토어 3개로 구분된다. 앞서 동작 원리를 알아봤으니, 실제 사용 방법을 다시한번 복기하자.'
date: "2020-12-17"
modified_date: "2020-12-17"
tags: [React, Redux]
---

리덕스는 크게 액션, 리듀서, 스토어 3개로 구분된다. 앞서 동작 원리를 알아봤으니, 실제 사용 방법을 다시한번 복기하자.

# 리덕스 설치

먼저 리액트에 적용시킬 리덕스부터 설치해야한다. 명령어는 다음과 같다.

```bash
yarn add redux react-redux
```

# 리덕스 패턴

## 덕스(DUX) 패턴

리덕스가 기본적으로 가이드하고 있는 덕스 패턴이라는 것이 존재한다. 프로젝트 구조상 특이한 점이 없다면 덕스패턴으로도 충분히 커버가 가능하다.

```bash
-ProjectRoot
  -src
    -reducers
      -index.js
      -A_action.js

    -actions
      -index.js
      -A_reducer.js

    -App.js
```

리액트는 기본적으로 폴더 안에 index.js를 가장 먼저 실행시키도록 구성되어있다. 따라서 reducers를 import하면 reducers 안에 index.js가 실행된다.

이렇게 리듀서와 액션을 구분해서 관리하면 프로젝트를 유지보수면에서 훨씬 수월하게 만들 수 있다. 이제 덕스패턴을 사용해서 구조를 짜보자.

아래부터는 먹을 것을 등록하는 리덕스 예제를 구현해보았다.

# 리덕스 액션

액션은 말그대로 행동만 취해주면 된다. 리듀서를 실행시키기 위한 하나의 신호로 생각하자.

## action 선언

### src/actions/food.js

```js
// 액션
export const ADD_FOOD = "ADD_FOOD"

// 액션 동작 함수
export const addFood = food => {
  return {
    type: ADD_FOOD,
    payload: food,
  }
}
```

액션은 기본적으로 타입과 동작 함수로 구성된다. 먹을것을 더해주는 `ADD_FOOD`타입과 payload로 food 파라미터를 받아 넘겨주도록 구성된다.

### src/actions/index.js

```js
export { ADD_FOOD, addFood } from "./FoodAction"
```

지금은 액션이 음식에 대한 액션밖에 없지만 다른 액션이 여러개 존재할 수 있다. 액션들이 많아짐에 따라 묶어주기 위해 index.js에 액션들을 모아주자.

## Reducer 선언

### src/reducers/FoodReducer.js

```js
// 액션
import { ADD_FOOD, addFood } from "../action/FoodAction"

const initState = {
  foods: [],
}

// 리듀서(reducer)
const foodReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, payload],
      }

    default:
      return state
  }
}

export default foodReducer
```

리듀서는 액션을 받아 동작을 실행시켜준다고 언급했다. 어떻게 동작하는지 아라보자.

리듀서 함수는 state와 action을 파라미터로 받는다. `state는 현재 스토어의 데이터를 의미`한다. 처음 초기값을 넣기 위해 initState라는 값을 넣었다.

잎사 등록한 액션을 action/index.js에서 불러온다. 액션은 리듀서 내부 `switch-case 문` 안에서 구분되어 해당 case에서 처리되는 구조로 동작한다.

위 예제는 food를 추가만 해주기 때문에 번거로운 과정 없이 `전개연산자(Spread Oprator)`를 사용하여 추가한다.

### src/reducers/index.js

```js
import { combineReducers } from "redux"
import foodReducer from "./FoodReducer"

const rootReducer = combineReducers({ foodReducer })

export default rootReducer
```

액션에서와 마찬가지로 여러개의 리듀서를 reducers/index.js에서 묶어주자. 묶어줄 떄, redux에서 제공하는 `combineReducers` 함수를 사용한다.

---

액션과 리듀서 설정을 모두 마쳤다. 이제 스토어를 등록해야한다.

## 스토어 선언

### /configureStore.js

```js
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/reducer"

export const store = createStore(rootReducer, composeWithDevTools())
```

redux에서 제공하는 `createStroe`함수를 사용해서 스토어를 생성한다.

스토어에는 앞서 생성한 reducer를 넣고, 2번째 파라미터로 `composeWithDevTools`가 온다. `composeWithDevTools`는 크롬에서 제공하는 툴이다.

F12 -> redux를 확인해보면 리덕스의 액션, 스토어의 히스토리 등이 확인 가능하다. 리덕스를 사용한다면 이러한 미들웨어를 설치하는 것이 편리하다. (이외에 logger들도 존재한다.)

### /App.js

```js
import logo from "./logo.svg"
import "./App.css"
import Redux02 from "./Redux/Redux02"
import { store } from "./configureStore"
import { Provider } from "react-redux"

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Redux02></Redux02>
      </div>
    </Provider>
  )
}

export default App
```

설정한 스토어를 `Provider`에 넣으면 내부 App 내부에 쌓여있는 Component들은 스토어를 사용할 수 있게 된다.

---

모든 설정이 끝났다. 이제 설정한 액션 및 리듀서를 갖고 컴포넌트에서 스토어를 활용하면 된다. 근데 너무 힘들다. 나머진 내일해야지.

리덕스는 위처럼 설정 및 추가해야하는 것들이 몇가지 존재한다. 그리고 리덕스의 패턴, 기본 개념도 알고있어야한다. 하지만, 아는 만큼 혜택이 어마어마하게 다가온다. 스토어를 간편하게 관리할 수 있다. 그리고 각 컴포넌트들은 스토어를 찾고 갖다 쓰기만 하면 된다. 감히 리덕스의 꽃이라고 말하고 싶다.
