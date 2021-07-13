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


## CSS를 header에 위치시키는 이유

렌더링과 관련이 있습니다. 





# 렌더링 과정에 대해 설명하라.

렌더링 엔진은 `HTML 문서`를 받아 `HTML 파서`에서 문서를 파싱하고 콘텐츠 트리 내부에서 태그를 DOM 노드로 변환한다. 이후 외부 CSS 파일과 함께 포함된 스타일 요소도 같이 파싱한다. 스타일 정보와 HTML 표시 규칙은 `렌더 트리`라고 부르는 또 다른 트리를 생성한다.

렌더링 과정은 HTML 문서를 파싱할 때 까지 기다리지 않고 배치와 그리기 과정을 시작한다. 나머지 HTML 문서를 네트워크로부터 받는 것을 기다리는 동시에 내용의 일부를 먼저 그리게 된다.

이후 자바스크립트 해석기를 통해 JS 동작과정을 그리고 UI 백엔드, 통신 관련된 서비스를 수행하게 된다.

# CSR vs SSR

## CSR(Client Side Rendering)

CSR은 모든 HTML소스, static파일들을 한번에 받아온 후, data 요청이 있을 때 비동기 통신을 통해 데이터를 가져온다. 데이터를 가져오고 DOM을 수정하여 화면을 렌더링 하는 방법이다.

CSR은 마찬가지로 한번에 많은 static 데이터를 가져오기 때문에 초기에 로딩속도가 길다. 이후 동작에서는 js에 의해 빠르게 렌더링 된다.

하지만, js에 의해 비동기적으로 제어되는 것 까지 SEO로 잡지 못한다. 따라서 SSR에 비해 SEO는 떨어진다.

## SSR(Server Side Rendering)

SSR은 한 페이지를 가져올 때 모든 데이터가 함축된 상태의 페이지를 가져오는 것을 말한다. 한 페이지의 속한 문서만을 로드하기 때문에 CSR에 비해 빠르다. 또한 한 페이지에 대한 소스를 모두 가져오기 때문에 **SEO가 우수**하다.

하지만, CSR에 비해 페이지 전환 속도가 느리고, 이동시 **새로고침이 되어 UX면에서 퍼포먼스가 떨어진다.** 또한 매번 서버에 데이터를 요청해야하는 작업을 거쳐야 한다.

# SPA vs MPA
## SPA(Single Page Application)

SPA는 **단 하나의 페이지로 이루어진 어플리케이션**이다. 하나의 **html파일을 렌더링 하고 이후에 가상돔으로 렌더링을 하는 방법**을 말한다. 프레임워크 3대장인 ReactJS, VueJS, AngularJS가 SPA를 위한 것들이다.

기존 HTML을 SSR(Server Side Rendering)으로 받을 때, URL 마다 한번씩 문서(HTML, CSS, Javascipt, img)들을 받아왔다. 매번 서버로부터 받기 때문에 상대적으로 로딩되는 시간이 길어질 수 밖에 없다.

SPA는 첫 HTML을 로드할 때, **관련된 모든 소스를 가져온다**. 그렇기 다른 URL로 들어갈 때 많은 로딩 시간이 필요하지 않고 JS 동작 시간만 소요되기 때문에 상대적으로 속도가 빠르다. 사용자 입장에서 로딩없이 페이지가 변경되는 것을 느낄 수 있어 **UX가 뛰어나다.**

## MPA(Multiple Page Rendering)

MPA는 **여러 개의 페이지로 구성된 어플리케이션**이다. SSR방식으로 렌더링 되어 새로운 페이지에 접근할 때마다 페이지와 관련된 문서 및 리소스를 요청한다.

그렇기 때문에 페이지 전환시 새로고침이 발생하는 등 **SSR 특징을 대표한다.**



