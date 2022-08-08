---
title: '[React] react에서 애니메이션 처리, react-spring'
description: "먼저 css로 애니메이션을 일일이 매번 처리하려고하다 보니, 귀찮았다..."
date: '2021-01-17'
modified_date: '2021-01-17'
tags: [React, useSpring]
---

# 리액트에서 애니메이션 처리

[5가지 리액트 애니메이션 사용방법 비교 참조](https://minoo.medium.com/%EB%B2%88%EC%97%AD-5%EA%B0%80%EC%A7%80-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%9E%A5-%EB%8B%A8%EC%A0%90-%EB%B9%84%EA%B5%90-react-animations-in-depth-884ff6e61b88)

먼저 css로 애니메이션을 일일이 매번 처리하려고하다 보니, 귀찮았다. 그래서 라이브러리를 찾게 되었는데 위 사이트에서 좋은 정보를 얻어 정리하려고 한다.

위 사이트에서는 5가지 정도를 소개하는데, `Motion`을 소개하면서 `react-spring`이라는 개념을 잠깐 언급했다. Motion을 사용하기 위해선 spring알아야한다고 하길래 먼저 spring을 알아보고 정리하려고 한다.

## react-spring 설치

```bash
$ npm install react-spring
```

## react-spring 사용 함수

먼저 react-spring에서는 spring이라는 애니메이션 객체를 사용한다. 이 객체를 이용해서 애니메이션 props를 생성해 애니메이션을 구현 시킨다.

아래는 react-spring에서 제공하는 spring 함수 종류이다.

> - `useSpring`: 단일 스프링이다. A에서 B로 애니메이션을 변경시킬 때 사용한다.
> - `useSprings`: 다중 스프링이다. 리스트이고, 여러개의 스프링을 A에서 B로 애니메이션을 변경시킬 때 사용한다
> - `useTrail`: 데이터셋의 다중 스프링이다. 하나의 스프링은 다른 스프링에 연결되어 있어 하나가 끝나면 다음 스프링이 실행되는 구조이다.
> - `useTransition`: 스프링을 변형시킬 수 있다.
> - `useChain`: 스프링을 useTrail처럼 만들 수 있고, 여러 체인의 형태로 애니메이션을 묶을 수 있다.

## fadeIn, fadeOut

```jsx
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function App() {
  const [toggle, setToggle] = useState(true);
  const [scroll, setSroll] = useState(window.pageYOffset);

  const props = useSpring({
    config: { duration: 2000, tension: 10 },
    opacity: toggle ? 1 : 0,
  });

  const onClickBtn = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App" style={{ margin: '0 auto' }}>
      <animated.div style={props}>
        <h1>This is Props1 Fade In</h1>
      </animated.div>

      <div>
        <button style={{ padding: '10px', fontSize: '20px' }} onClick={onClickBtn}>
          click!
        </button>
      </div>
    </div>
  );
}
```

간단하게 버튼 클릭할 때 마다 fadeIn - Out 되는 스프링 객체를 하나 생성해봤다. **toggle**이 변경될 때 마다 감지해서 opacity를 변경시킨다.

**useSpring**은 단일 스프링 객체를 만드는 Hook이다. hook을 하나 생성해 <animated.div> style에 넣어 주었다.

**config**는 애니메이션의 속성 설정을 담당한다. duration, tension, ... 여러 기능이 존재한다. 자세한건 [react-spring](https://www.react-spring.io/docs/hooks/api)을 참조하길 바란다.

## scroll 변경 시 애니메이션

```jsx
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';

export default function App() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const propsScroll1 = useSpring({
    opacity: scrollTop > 70 ? 1 : 0,
  });

  const propsScroll2 = useSpring({
    opacity: scrollTop > 300 ? 1 : 0,
  });
  const propsScroll3 = useSpring({
    opacity: scrollTop > 550 ? 1 : 0,
  });

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App" style={{ margin: '0 auto' }}>
      <animated.div style={propsScroll1}>
        <div
          style={{
            width: '80%',
            height: '300px',
            backgroundColor: 'rgb(123,123,123)',
            borderRadius: '8px',
            margin: '200px auto 0 auto',
            lineHeight: '300px',
          }}
        >
          <h1>1</h1>
        </div>
      </animated.div>

      <animated.div style={propsScroll2}>
        <div
          style={{
            width: '80%',
            height: '300px',
            backgroundColor: 'rgb(63,72,123)',
            borderRadius: '8px',
            margin: '20px auto',
            lineHeight: '300px',
          }}
        >
          <h1>2</h1>
        </div>
      </animated.div>

      <animated.div style={propsScroll3}>
        <div
          style={{
            width: '80%',
            height: '300px',
            backgroundColor: 'rgb(11,200,255)',
            borderRadius: '8px',
            margin: '20px auto',
            lineHeight: '300px',
          }}
        >
          <h1>3</h1>
        </div>
      </animated.div>
    </div>
  );
}
```

scroll State를 생성하여 state 변경시마다 fadeIn-Out이 되는 애니메이션을 생성해봤다. 스크롤을 내리거나 올릴 때 마다 특정 스크롤이 되면 Fade-In 또는 Out이 된다.

간단한 예제를 통해서 useSpring을 사용해봤는데 사용 방법은 무궁무진 한 것같다. [react-spring_Example](https://www.react-spring.io/docs/hooks/examples)에서 예제를 사용할 수도 있다. 훌륭한 소스들이 많이 있다.

요런 소스를 참고해서 애니메이션 하나를 만들어봐야겠다.

<iframe src="https://codesandbox.io/embed/cocky-lalande-tww5m?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="cocky-lalande-tww5m"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

[React-spring 문서 참조](https://www.react-spring.io/docs/hooks/basics)
[5가지 리액트 애니메이션 사용방법 비교 참조](https://minoo.medium.com/%EB%B2%88%EC%97%AD-5%EA%B0%80%EC%A7%80-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%9E%A5-%EB%8B%A8%EC%A0%90-%EB%B9%84%EA%B5%90-react-animations-in-depth-884ff6e61b88)
