---
title: '[React] Ducks Pattern 구조에 대해 알아보기'
description: 'React, Redux의 근본이 되는 ducks 패턴에 대해 알아보자'
date: '2023-02-25'
modified_date: '2023-02-25'
tags: [React, 프론트엔드, 디자인패턴]
---

이번달은 디자인패턴과 클린코드를 통한 리팩터링을 진행하느라 기본 패턴에 대해 공부를 하게 됐다.

리팩터링 도중 근본없는 컨텍스트API(React에서 제공하는 API) 구조를 사용했던 것이 보였고, 이 구조를 Redux, Jotai같은 스토어로 마이그레이션 하지 않고, 기존 패턴을 개선하고자 했다.

중구난방으로 사용되던 컨텍스트 API구조를 Redux에서 사용하는 패턴으로 변경하려고 했고, 거기에서 사용했던 `Ducks`패턴에 대해 잠깐 짚고 넘어가는게 좋을 것 같다.

# Redux 동작 과정

리덕스는 FE에서 사용되는 전역 스토어이다. 컴포넌트에서 넘겨주는 props가 너무 많아 질때 우리는 `props drilling`이 심해진다고 한다. 너무 많은 props는 코드의 가독성이 떨어지게 만들고, 개발했던 사람의 이직이나 다른 부서로 이동한다면 이것은 곳 레거시코드가 된다. 인수인계를 받은 사람은 코드를 파악하는데에 많은 시간을 할애하게 될 것이다.

이런 상황을 방지하기 위해 프론트엔드에서는 스토어를 사용하는데, 여기서는 디자인패턴에 대한 내용을 다룰 것이기 때문에 리덕스를 언급할 것이다. 리덕스의 구조는 다음과 같다.

<img src="https://images.prismic.io/zalando-jobsite/ff54323021b8177c0c6cf0a03bfbd1edcc08c276_redux-flow.png?auto=compress,format" alt="ReduxFlow" />
</div>

> [그림 참조](https://engineering.zalando.com/posts/2016/08/design-patterns-redux.html)

리덕스는 `액션`, `스토어`, `리듀서` 3개로 구성된다.

1. `액션`은 어떤 행위를 뜻한다.

```typescript
// actions
export const OPEN_MODAL = 'OPEN_MODAL' as const;
export const CLOSE_MODAL = 'CLOSE_MODAL' as const;
```

"모달을 열자!", "닫자!"와 같은 행위를 값으로 표현한다. 액션을 생성하면 보통 액션 실행함수까지 만들어준다. 액션 실행함수는 아래와 같다.

```typescript
// 액션실행함수
export const openAlert = (message: Props) => {
  return { type: OPEN_ALERT, payload: { ...message } };
};
```

함수 시그니처를 정의해주고, props는 함수에서 받는 payload를 뜻한다. 예제에서는 alert를 띄우는 예제이니 props에 message를 받도록 하였다.

2. dispatch
   액션의 대한 정의를 마쳤으면 액션을 실행시켜줘야 한다. 액션 실행시키는 것을 `dispatch`라 한다. react에서 제공하는 hook인 useContext를 사용해서 dispatch를 이용하자. dispatch안에 액션실행함수를 불러와 실행시킨다.

```typescript
// dependency
import { useContext } from 'react';

const dispatch = useContext();
dispatch(openAlert('모달 얼러트 열기'));
```

3. reducer
   dispatch으로 액션을 실행시켜줬다면 이제 어떤 행위에 대한 정의가 필요하다. 동작을 하고 스토어에 저장까지 하는 기능이 필요할 것이다. 이러한 과정을 reducer에서 수행한다. 액션실행함수에서 넘겨주었던 props를 reducer에서 처리를 한다. type은 `OPEN_ALERT`, payload는 `{ message: message}`니깐 modal은 열리고 payload에 message가 전달될 것이다.

```typescript
export default function modalReducer(state: State, action: Action): State {
  const { type } = action;

  switch (type) {
    case OPEN_ALERT:
      return { ...state, modal: { isOpen: true, payload: action.payload } };
    case OPEN_ALERT:
      return { ...state, modal: { isOpen: false } };
  }
}
```

위에서 여태 다뤘던 action, action 실행함수, 리듀서 이 3가지를 갖는 구조를 `Ducks패턴`구조라 한다. Redux에서 흔하게 사용되는 구조이니 익혀두는 것이 좋을 듯 하다.
