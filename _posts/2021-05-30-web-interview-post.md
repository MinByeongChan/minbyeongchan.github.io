---
title: '[WEB] 프론트엔드 기술면접 대비 질문 정리'
description: "프론트엔드 주니어 개발자로서 기본적으로 알아야할 것들, 또는 질문 들어올만한 개념들을 정리하려고한다."
date: '2021-05-30'
modified_date: '2021-05-30'
tags: [WEB, 프론트엔드, 기술면접]
---

프론트엔드 주니어 개발자로서 기본적으로 알아야할 것들, 또는 질문 들어올만한 개념들을 정리하려고 합니다.

# HTML

## meta 태그

메타태그는 웹서버와 웹 브라우저간에 교환되는 정보를 정의하는데 사용된다.

HTML문서의 <head>와 </head> 사이에 들어가며 현재 HTML문서가 어떤 문서인지 알려주는 기본적인 설명구가 들어간다.

페이지의 인코딩 방식(Content-Type), 제작일(Date), 검색엔진 제어(Robots), 페이지 설명(Description) 등 페이지를 설명하는 여러 메타 데이터를 넣을 수 있다.

meta데이터를 강화시키므로서 SEO를 향상시킬 수 있다.

---
# CSS

## grid vs flex

### flex 

flex속성은 html 태그 컨텐츠를 수평적 또는 수직적으로 정렬시킬 수 있다. 수평 또는 수직 둘 중 하나만 가능하다는 것이 특징이다. 
flex-direction으로 row 또는 column 방향을 설정할 수 있다. 또한 justify-content로 flex 컨테이너 자식 컴포넌트 위치를 제어할 수 있다.

### grid

grid속성은 flex와 다르게 수평과 수직 동시에 제어가 가능하다.

grid-template-columns로 열의 갯수를 제어하고, grid-template-rows로 행의 갯수를 제어한다. grid-gap으로 grid컨테이너의 자식 컴포넌트 간에 간격을 조절할 수도 있다.

## box-model

크롬 개발자모드에서 Element탭을 보면 해당 컴포넌트마다 아래와 같은 그림을 갖게된다. 이것은 각 태그들이 갖고있는 박스 모델이다. HTML에서 각 컴포넌트는 박스를 갖게되고 margin, padding, content의 값이 존재한다.

주의할 점은 width나 height값을 구할 때, padding은 고려하지만, border를 고려하지 않는 경우가 있다. border값도 박스의 width에 영향을 끼치기 때문에 고려해야한다.

![박스모델 이미지](http://tcpschool.com/lectures/img_css_boxmodel.png)

[TCPSCHOOL.COM 이미지 참조](http://tcpschool.com/css/css_boxmodel_boxmodel)


## CSS를 head에 위치시키는 이유

[CSS를 head에 놓는 이유](https://medium.com/@schizdazzle/whats-with-putting-the-css-in-the-head-24888fbbd2e2)

렌더링과 관련이 있습니다. 기본적인 방법중에 하나는 CDN으로 외부의 CSS파일을 불러오는 방식이 있다. 여러 서버에 종속되어있는 CSS파일을 가져오므로 서버의 지연속도에 따라 렌더링 시간이 달라질 수 있다.

자바스크립트 태그가 읽혀지면 브라우저는 수많은 동작들을 중단시킨다. CDN과 같이 외부 파일을 다운로드하고 난 후, DOM을 빌딩을 수행한다. 또한, CSS가 불러와지지 않은 상태(CSSOM이 생성되지 않은 상태)에서는 자바스크립트 코드를 실행시키지 않게 되어있다. 자바스크립트 코드에서 CSS파일을 참조할 수 있기 때문에 사전에 차단한다.

그래서 CSS를 head에 위에 놓는 이유는 CSS파일을 가능한 빨리 불러오기 위해서이다. HTML소스 안에서 아래에 놓을 경우 컴파일러에 의해 늦게 읽히고 그만큼 다른 리소스에 비해 늦게 불러오게 될 수 있다. 가능한 빨리 읽어와 렌더링 시키고, 이후 자바스크립트 소스까지 읽어오기 위해 불러오기 위해 위치시킨다.

---

# Javascript

## JS를 밑에 둬야하는 이유

CSS와 마찬가지로 HTML이 렌더링 되기 전에 javscript 소스를 불러오게 되면 네트워크 레이턴시가 높아진다. js코드는 렌더링이 모두 완료된 이후에 읽혀지게 되므로 HTML 코드를 먼저 읽고 DOM을 생성한 후에 js코드를 불러오는 것이 올바르다.

가끔, js 코드가 위에있을 경우 렌더링 되기 전에 HTML 태그 ID 또는 class에 접근할 수 있다. 이러한 경우 렌더링이 되기 전에 javascript가 접근하기 때문에 undefined가 나올 수 있다.

## let vs var vs const

var는 이전에 선언된 변수와 상관없이 새로이 생성이 가능하다. 하지만, let, const는 한번 생성한 변수를 다시 생성하면 `has already been declared`라는 에러가 발생한다.

let과 const는 `immutable`이란 차이점이 있다. 즉, 변경 하냐 불가능하냐의 차이다. let은 재선언은 불가능하지만 수정은 가능하다.

하지만 const는 단 한번만 할당이 가능하다. 유일한 값(상수)이 된다.

```js
let name = "mbc";
name = "Min Byeong Chan"; // OK

const age = 27;
age = 20;                  // 에러 발생
```

---


### scope에서 동작 차이

[let, var, const에 대한 차이점](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d)

## Block-scoped vs Function-scoped

function-scoped는 함수를 선언할 때 항상 마주하게 된다. 또한, top-level scope의 global scope로도 보게 된다. global 변수는 window객체에 의해 제어된다는 뜻이기도 하다.

block-scoped는 for, while, if 문을 사용 할 때 사용되는 block을 말한다. 

function-scoped는 함수를 호출할 때 사용되는 block을 말한다. 함수 안에서 사용되는 변수를 `var`으로 선언하느냐 또는 `let`으로 선언하느냐에 따라 호이스팅 여부가 갈린다. 

## 이벤트 버블링(Bubbling) vs 이벤트 캡처링(Capturing)

### Bubbling

특정 엘리먼트에 이벤트가 발생할 때 엘리먼트 DOM의 parent까지 이벤트가 전달된다. 이것을 bubbling이라고 한다.

```html
<form onClick="alert('form')">
    Form
    <div onClick="alert('div')">
        Div
        <p onClick="alert('p')">P</p>
        <p onClick="alert('p2')">P2</p>
    </div>
</form>
```

위 예제에서 P를 클릭하면 P -> div -> form 순으로 alert가 발생하는 것을 확인할 수 있다. nested 엘리먼트부터 parent 엘리먼트까지 이벤트가 버블링 되는 것이다. Sibling인 P2는 상위 엘리먼트가 아니므로 전달되지 않는다.

### 버블링 막는 법

버블링은 nested 엘리먼트에서 parent 엘리먼트까지 이벤트가 전달된다고 한다. 하지만 이벤트 전달을 막고 싶을 때가 있는데 stopPropagation()을 사용하면 된다.

```
<button onClick="event.stopPropagation()">클릭</button>
```

event.propagation()을 사용하면 해당 엘리먼트는 이벤트가 발생하지 않도록 제어할 수 있다.





## IIFE(Immediately Invoked Function Expression) 

함수를 선언함과 동시에 실행시키는 기능을 말한다. 호이스팅을 피하거나 사이드 이펙트에 의한 변수의 취약성을 노출시키는 것을 방지하기 위해 사용된다.

```js
void function() {
// do something 
}()
```

# WEB

## 렌더링 과정에 대해 설명하라.

렌더링 엔진은 `HTML 문서`를 받아 `HTML 파서`에서 문서를 파싱하고 콘텐츠 트리 내부에서 태그를 DOM 노드로 변환한다. 이후 외부 CSS 파일과 함께 포함된 스타일 요소도 같이 파싱한다. 스타일 정보와 HTML 표시 규칙은 `렌더 트리`라고 부르는 또 다른 트리를 생성한다.

렌더링 과정은 HTML 문서를 파싱할 때 까지 기다리지 않고 배치와 그리기 과정을 시작한다. 나머지 HTML 문서를 네트워크로부터 받는 것을 기다리는 동시에 내용의 일부를 먼저 그리게 된다.

이후 자바스크립트 해석기를 통해 JS 동작과정을 그리고 UI 백엔드, 통신 관련된 서비스를 수행하게 된다.

## CSR vs SSR
### CSR(Client Side Rendering)

CSR은 모든 HTML소스, static파일들을 한번에 받아온 후, data 요청이 있을 때 비동기 통신을 통해 데이터를 가져온다. 데이터를 가져오고 DOM을 수정하여 화면을 렌더링 하는 방법이다.

CSR은 마찬가지로 한번에 많은 static 데이터를 가져오기 때문에 초기에 로딩속도가 길다. 이후 동작에서는 js에 의해 빠르게 렌더링 된다.

하지만, js에 의해 비동기적으로 제어되는 것 까지 SEO로 잡지 못한다. 따라서 SSR에 비해 SEO는 떨어진다.

### SSR(Server Side Rendering)

SSR은 한 페이지를 가져올 때 모든 데이터가 함축된 상태의 페이지를 가져오는 것을 말한다. 한 페이지의 속한 문서만을 로드하기 때문에 CSR에 비해 빠르다. 또한 한 페이지에 대한 소스를 모두 가져오기 때문에 **SEO가 우수**하다.

하지만, CSR에 비해 페이지 전환 속도가 느리고, 이동시 **새로고침이 되어 UX면에서 퍼포먼스가 떨어진다.** 또한 매번 서버에 데이터를 요청해야하는 작업을 거쳐야 한다.

## SPA vs MPA

### SPA(Single Page Application)

SPA는 **단 하나의 페이지로 이루어진 어플리케이션**이다. 하나의 **html파일을 렌더링 하고 이후에 가상돔으로 렌더링을 하는 방법**을 말한다. 프레임워크 3대장인 ReactJS, VueJS, AngularJS가 SPA를 위한 것들이다.

기존 HTML을 SSR(Server Side Rendering)으로 받을 때, URL 마다 한번씩 문서(HTML, CSS, Javascipt, img)들을 받아왔다. 매번 서버로부터 받기 때문에 상대적으로 로딩되는 시간이 길어질 수 밖에 없다.

SPA는 첫 HTML을 로드할 때, **관련된 모든 소스를 가져온다**. 그렇기 다른 URL로 들어갈 때 많은 로딩 시간이 필요하지 않고 JS 동작 시간만 소요되기 때문에 상대적으로 속도가 빠르다. 사용자 입장에서 로딩없이 페이지가 변경되는 것을 느낄 수 있어 **UX가 뛰어나다.**

### MPA(Multiple Page Rendering)

MPA는 **여러 개의 페이지로 구성된 어플리케이션**이다. SSR방식으로 렌더링 되어 새로운 페이지에 접근할 때마다 페이지와 관련된 문서 및 리소스를 요청한다.

그렇기 때문에 페이지 전환시 새로고침이 발생하는 등 **SSR 특징을 대표한다.**


