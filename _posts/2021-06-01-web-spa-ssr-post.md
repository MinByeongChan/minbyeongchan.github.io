---
title: '[WEB] 프론트엔드 기초(1) - SSR, SPA 장단점 및 차이점'
description: "이전에 면접을 보다 들어온 질문 중 SPA, SSR의 차이점과 어떤 기준으로 구분해서 사용하는지 물어보는 질문이 있었습니다..."
date: '2021-06-01'
modified_date: '2021-06-01'
tags: [WEB, SSR, SPA, 프론트엔드]
---


이전에 면접을 보다 들어온 질문 중 SPA, SSR의 차이점과 어떤 기준으로 구분해서 사용하는지 물어보는 질문이 있었습니다. 제대로 답변을 못했었고 얼머부렸던 기억이 있어 정리해보려고 합니다.

# SPA 렌더링 방식

SPA(Single Page Application)는 단일 페이지 어플리케이션으로, 웹페이지를 구성하는 HTML 소스가 단 하나만 존재합니다.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <title>타이틀 명</title>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>

</body>

</html>
```

create-react-app으로 react 프로젝트를 생성하면 위처럼 `하나의 HTML소스`만 존재합니다. 이외의 소스는 Javascript에서 가상돔을 생성하고 렌더링하게 됩니다.

클라이언트 입장에서는 HTML소스 하나와 관련된 리소스(Javascript, CSS)를 `한번에` 가져옵니다. 그래서 처음 로딩은 일반적인 웹서비스보다 길어질 수 있습니다. 하지만, 데이터를 받아온 이후에 다른 페이지로 이동할 때, Javascript에 의해 내부 데이터만 수정되어 보여지게 됩니다. 페이지 전환이 될 때, 변경되야할 컴포넌트만 변경되고, 나머지 컴포넌트는 `그대로 유지`시켜버립니다. HTML을 다시 렌더링하지 않기 때문에 속도가 빠르고, 그만큼 사용자가 느끼기에 최적화된 웹서비스를 경험할 수 있습니다.

SPA 프레임워크 중 `ReactJS`, `VueJS`, `AngularJS` 등이 대표적인 프레임워크로 알려져 있습니다.

단, SPA 구조상 HTML소스가 하나만 존재하고, 내용은 없기 때문에, `검색엔진최적화(SEO)`에서 좋지 않습니다. 회사나 본인 웹사이트가 검색엔진에서 검색했을 때 최상단에 나오게 하기 위해서는 SEO가 좋아야 합니다. 검색에 노출이 잘 될 수록 회사나 개인으로서 얻는 이득이 많아지니까요. 구글같은 검색엔진에서는 내부 소스까지 분석해서 SEO를 적용하기 때문에 잘 보여지는 반면에, 다른 일반적인 검색엔진은 그렇지 못합니다.

## SPA 장점

- 리소스를 한번에 가져오기 때문에 처음 로딩 이후엔 페이지 전환이 빠릅니다.
- 따라서 사용자 경험(UX)가 우수합니다.

## SPA 단점

- 첫 로딩이 그만큼 빡셉니다.(시간이 오래걸림)
- 검색엔진 최적화(SEO)에서는 좋지 않습니다.
  - 회사에서 운영하는 웹서비스에서 SEO를 위해 별도로 처리를 해야 합니다..

# SSR 렌더링 방식

일반적인 웹서비스 방식은 `SSR` 입니다. 여러 페이지를 구성하고 해당 URL 마다 페이지가 연결되어있는 구조가 전통적인 방식입니다. 이것을 SPA의 반대인 `MPA`(Multiple Page Application)이라고 합니다.

MPA는 페이지를 이동할 때마다 해당 URL에 필요한 리소스를 불러옵니다. 리소스는 서버로 부터 받아오게 되는데 서버에서 요청하고 받아온 후 렌더링이 진행됩니다. 이러한 렌더링 방식을 `SSR(Server Side Rendering)`이라고 합니다.

SSR은 SPA에 비해 SEO가 우수한 편입니다. 검색에 노출될 필요한 정보들이 HTML 파일에 담겨 있어 검색엔진이 읽어 오기 좋습니다.

UX(사용자경험) 측면에서는 SPA에 비해 떨어집니다. SPA는 리소스가 불러와진 상태이기 때문에 페이지 이동에 있어 매우 빠르고, 리로딩도 없습니다.

하지만, SPA는 페이지 이동마다 리소스를 서버로부터 다시 불러와야하기 때문에 리로딩이 발생하게 되는데 즉, 매 페이지마다 페이지 전체를 다시 렌더링시켜야 합니다. 이렇게 리로딩과 리소스 불러오는 과정 때문에 속도가 느려져 UX(사용자 경험)측면에서는 SPA에 비해 떨어진다.

## SSR 장점

- 첫 로딩은 SPA 비해 상대적으로 빠릅니다.
- 전통방식이기 때문에 Spring과 같은 프레임워크와 연동 소스 잘 나와있습니다.(Spring-jsp 구조)
- SEO가 우수합니다.

## SSR 단점

- UX가 좋지 않습니다.
- 페이지 이동시 로딩과 끊김 현상이 존재합니다.
  - 페이지가 reload되기 때문.


# SSR VS SPA 어떤 경우에 사용해야 가장 이상적일까?

SPA, SSR 둘 다 좋은 옵션이고 뭐가 정답인지 정해져있지 않습니다. 각 서비스에 적절한 것을 골라서 사용하면 되는거죠.

`SPA`는 앱개발에서 많이 사용되곤 합니다. 앱에서 리로딩되는 현상이 생기면 사용자 입장에선 앱이 아니라고 생각할 것 입니다. 웹뷰가 적용된 하이브리드 앱에서는 SPA를 사용하는 것이 올바릅니다.

`SSR`은 SPA에 비해 `처음 로딩속도가 빠르다는 장점`이 있다. 네이버나 구글과 같은 웹페이지에 들어갈 때 로딩이 심하게 걸리면 사용자 입장에서 답답함을 느낄 것 입니다.(한국사람은 빨리빨리). 그렇기 때문에 일반적인 웹사이트나 페이지가 많은 서비스는 SSR을 사용하는 것이 유리하다고 생각합니다.


