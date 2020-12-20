---
title: "[React] Redux, connect dispatch를 이용한 스토어 데이터 가져오기"
date: "2020-12-19"
categories: [React]
tags: [React Redux]
comments: true
---

# 개요

앞서 리덕스에 대한 개념들을 정리하고, 액션, 리듀서의 사용법 그리고 실제 예제를 통해 액션, 리듀서를 구현시켰다.

액션과 리듀서를 만드는건 알겠는데, 그래서 어떻게 사용하는가, 이제 간단한 컴포넌트 예제를 통해서 그 스토어에 데이터를 저장하는 방법(dispatch)과 불러오는 방법(getState)를 알아볼 것이다.

# 적용 예제

```js
import React, { useState } from "react"
import { connect } from "react-redux"
import { addFood } from "./action/FoodAction"

const Redux02 = ({ foods, addFood }) => {
  const [input, setInput] = useState("")

  const onInputChange = e => {
    setInput(e.target.value)
  }

  const onClickBtn = () => {
    addFood(input)
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
            <li>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  foods: state.foodReducer.foods,
})

const mapDispatchToProps = dispatch => ({
  addFood: food => dispatch(addFood(food)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Redux02)
```

이 예제에서 중요한 함수들이 몇가지 있다.

1.  dispatch()

    - `dispatch()`는 리듀서를 실행시키는 함수이다. 리듀서는 어떤 동작을 실행시켜 스토어에 데이터를 적용하는 것을 말한다. 예를 들어 카운트를 덧뺄셈하는 동작을 시키기 위해 덧뺄셈리듀서를 dispatch하면 덧뺄셈이 되는것이다.

2.  mapStateToProps()

    - 스토어에 있는 데이터를 가져오는 함수이다. 오브젝트라 리턴되는데 오브젝트 안에는 가져올 데이터의 state를 가져온다.
    - state.[reducer명].[state명]을 참조해서 가져온다.
    - 리턴되는 오브젝트의 KEY 값은 임의로 설정한다.

3.  mapDispatchToProps()

    - dispatch를 파라미터로 가져오는 함수이다.
    - mapStateToProps와 마찬가지로 오브젝트를 반환한다.
    - 다른점은 KEY에 대한 value를 dispatch를 넣고,dispatch안에 파라미터는 액션함수를 사용한다.
    - 액션 함수는 /src/actions를 import해서 가져온다.

4.  connect()
    - 앞서 작성한 mapStateToProps, mapDispatchToProps를 파라미터로 받는다.
    - 하이오더 컴포넌트로 곧바로 데이터 컴포넌트를 불러온다.
    - 데이터 컴포넌트는 mapStateToProps와 mapDispatchToProps에서 리턴하는 state와 액션함수들을 Props로 받는다.

이제 음식을 추가하는 예제에 대해서 간단히 설명하자면,

데이터 컴포넌트는 state인 foods와 액션함수인 addFoods를 Props로 받는다.

input에 음식에 대한 값을 입력하고 버튼을 클릭하면 addFoods액션 함수가 동작한다. 이떄 파라미터로 input 데이터를 넘겨주고 리덕스 스토어에 올라가게 된다.

삭제, 변경도 만드려고 했지만 귀찮아서 생략하도록 한다.

아, 그리고 foods는 Array로 map()를 사용해서 컴포넌트를 불러왔다.

음식을 추가하는 리덕스 간단한 예제를 살펴봤다. 이제 리덕스를 자신있게 할 수 있을것만 같았지만 참... 그렇지 못한다는게 현실이다.

전개연산자도 봐야하고, 경우에 따라서 또 미들웨어도 사용해야하고, 여간 할게 많다.

그리고 예전에 리덕스를 사용하고 update를 하려다가 하드코딩으로 변경하려던 적이 있었는데 먹히질 않아 삽질한적이 있다. 정확히는 모르지만, 리덕스는 백단에서 동작하는듯 하여 하드코딩으로 변경시키는 것은 한계가 있는듯 하다. 리덕스를 사용하면 리덕스로 CRUD를 유지하는 것이 좋을듯 하다.

<iframe src="https://codesandbox.io/embed/admiring-ritchie-3gngs?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="admiring-ritchie-3gngs"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
