---
title: "[React] Redux hook으로 Redux 편하게 사용하기"
description: '이전 예제에서 데이터 컴포넌트가 리덕스 스토어를 불러오는, 그리고 리듀서를 dispatch하는 것 까지 해봤다.'
date: "2020-12-20"
modified_date: '2020-12-20'
tags: [React, Redux]
---

# 개요

이전 예제에서 데이터 컴포넌트가 리덕스 스토어를 불러오는, 그리고 리듀서를 dispatch하는 것 까지 해봤다. 그런데 리덕스를 사용하기 위해 번거로운 작업들이 좀 많다. connect를 사용하는 별도의 컨테이너까지 만들어서 사용하기도 한다. 이러한 작업을 좀 줄이기 위해 hook이 도입됐다.

리액트에서 hook이 도입되면서 부터 리덕스 마찬가지로 hook사용을 권장하고 있다. 그래서 리덕스 hook을 간단히 정리하려 한다.

# 적용 예제

```js
import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect, useDispatch, useSelector } from "react-redux"
import { addFood } from "./action/FoodAction"

const Redux02 = () => {
  const [input, setInput] = useState("")
  const { foods } = useSelector(state => ({ foods: state.foodReducer.foods }))
  const dispatch = useDispatch()

  const onInputChange = e => {
    setInput(e.target.value)
  }

  const onClickBtn = () => {
    dispatch(addFood(input))
  }

  return (
    <div>
      This is Redux Test
      <div>
        <input type="text" id="input1" onChange={onInputChange} />
        {"    "}
        <button onClick={onClickBtn}>추가</button>
        <h1>Foods List</h1>
        <ul>
          {foods.map((data, id) => (
            <li key={id}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Redux02
```

저번 예제를 동일하게 가져왔다. 그리고 connect함수를 사용하지 않고, `useSelector`, `useDispatch`라는 훅 함수를 대체하기만 했다.

1. useSelector

   - 리덕스 스토어에 있는 state를 가져오는 함수이다.
   - getStore(), mapStateToProps함수의 기능을 담당한다.
   - 파라미터로 state를 받고 state에 대한 key값을 가져와 변수에 저장해야한다.

2. useDispatch
   - dispatch()를 가져오는 함수이다.
   - mapDispatchToProps()의 기능을 담당한다.
   - 이전 dispatch사용법과 동일하다.

이렇게 리덕스 hook을 사용해서 이전보다 깔끔하고 편리하게 코드를 짤 수 있게 됐다.

굿굿

<iframe src="https://codesandbox.io/embed/festive-hooks-su4hv?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="festive-hooks-su4hv"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
