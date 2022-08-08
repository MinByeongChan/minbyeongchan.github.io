---
title: '[Webpack] 강의내용 정리'
description: ''
date: '2021-07-24'
modified_date: '2021-07-24'
tags: [WEB, 프론트엔드, 기술면접]
---

엔지니어라면 AS를 기다리지 않고 직접 부품을 다룰 줄 아는 것도 개발자의 역량이라고 생각합니다. 그렇기 때문에 webpack이란 개념을 배우고 싶었고, 강의를 찾아보던 중 좋은 강의가 있어 정리하고 또 공유하려고 합니다.

# NPM

## 빌드 자동화

프로젝트에서 사용하는 라이브러리를 다운받고, 각종 테스트를 용이하게 한다.

# 개발환경 커스터마이징

react나 여러 환경을 커스터마이징 할 수 있다. 결국 커스터마이징할 필요가 닥치는데 이때, nodeJS 기본적인 지식을 알아야한다.

## package.json

npm 프로젝트와 관련된 프로젝트 기본 정보들과 사용할 수 있는 명령어를 커스터마이징 할 수 있다.

```json
{
  "name": "inflearn-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

## 명령어

npm 을 이용하려 scripts를 실행할 수 있다.

위 package.json에 있는 scripts의 test를 사용하면 아래와 같이 나온다.

```bash
$ npm test

> inflearn-webpack@1.0.0 test C:\GitHub\inflearn-webpack
> echo "Error: no test specified" && exit 1

"Error: no test specified"
npm ERR! Test failed.  See above for more details.
```

이처럼 npm을 이용하여 scripts에 여러 커맨드를 추가할 수 있다.

# 패키지 설치

## CDN 방식

## 직접 다운로드 하는 방식

## NPM 방식

npm은 패키지 라이브러리를 관리할 수 있는 기능을 제공한다. 또한, 라이브러리의 버전을 관리하는 기능을 제공한다.
라이브러리의 버전을 엄격하게 또는 느슨하게 설정할 수도 있다.

버전을 관리하기 위한 방법을 `유의적 버전`이라고 한다.

- 주 버전(Major Version)
- 부 버전(Minor Version)
- 수 버전(Patch Version) : 기존 버전과 호환되면서 버그를 수정한 경우

## 버전 범위를 관리하는 방식

```json
{
    ...
  "dependencies": {
    "react": "^17.0.2"
  }
  ...
}
```

`"react": "^17.0.2"`

- `틸트(~)` : 마이너 버전이 명시되어 있으면 패치버전을 변경

- `캐럿(^)` : 패치버전만 변경

- ES5부터 import/export가 나왔지만, webpack이 등장하고 나서부터 import/export가 제대로 사용되기 시작했다.

- 과거에는 `<script src='src/math.js'>`와 같이 script파일을 불러와서 js를 적용시켰다.
  하지만 이것은 전역 스코프에 할당이 되기 때문에 자바스크립트의 전역스코프가 오염되고 결국에는 사이드 이펙트가 발생해 오류발생률이 높아진다.

- IIFE(Immdiately )

함수를 선언과 동시에 실행되기 때문에 함수 내에 선언된 변수들은 외부와 독립적으로 동작한다. 그래서 IIFE를 사용하므로써 객체화 하여 전역스코프의 오염을 방지할 수 있다.

- AMD(Asynchronous Module Definition)

- UMD(Universal Module Definition)

- ES2015에서 표준 모듈 시스템을 내 놓았다.
  위에서 언급한 import / export를 말한다.

# webpack

app.js에서 math.js를 가져온다. 그래서 js간에 의존관계가 생성되는데 이것을을 합쳐서 만드는 과정을 번들링이라고 하고, 의존관계가 성립된 파일을 하나의 번들이라고한다.

- npm install -D webpack webpack-cli

- 필수적인 옵션이 존재
- mode 옵션 : development, production, none 이 필수
  개발용은 development, 운영은 production 옵션을 설정

- 모듈의 시작부분을 entry 또는 entry 포인트 라고 한다. 필수 옵션

- 경로를 저장해야하는데 output이라는 옵션을 사용해서 경로를 저장

- node_modules/.bin/webpack --mode development --entry ./src/app.js 명령어로 webpack을 실행시킨 후 --mode, --entry를 설정하게 되면 webpack에 의해 번들링이 된다. --output설정은 별도로 하지 않아도 ./dist/main.js로 output이 생성된다.

- 기존 webpack을 사용하지 않으면 서버를 가동시킨 후 js를 불러왔어야했지만, webpack으로 번들을 만든 후 main.js를 불러오도록 하고 html파일을 실행하면 서버를 가동하지않고 바로 실행되는 것을 확인할 수 있다.

- webpack이 번들링을 해준 이후 타임 모듈을 제공하면서 다양한 브라우저에서 (크로스 브라우징) 동작이 가능하게 만든다. 또한

- `webpack.config.js` 파일을 생성 후, 이전에 명령어로 입력했던 설정들을 config 파일로 생성해 webpack 설정을 관리할 수 있다.

### webpack.config.js

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
};
```

- 패키지 관리하는 npm으로 webpack 명령어를 설정할 수 있다. scripts의 build에 `webpack`이라고 등록만 해도 npm이 알아서 node_module파일을 탐색해서 webpack을 실행시킨다.

### package.json

```json
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
...
```

# 로더 (loader)

웹팩은 모든 파일로 모듈로 바라본다. 자바스크립트 뿐만 아니라, CSS 이미지, 폰트까지 전부 모듈로 보기 때문에 자바스크립트 코드 안으로 가져올 수 있다.

- webpack.config.js 에서 로더를 추가할 수 있음.

- webpack은 js 소스의 각 파일을 확인하기 위한 것.

# 자주사용되는 로더

## css파일을 위한 로더

- 자바스크립트 파일 안에서 Css를 불러올 수 있다.
- es6 import로 css를 불러오기 위해서 로더의 설정이 필요하다. 로더 없이 import를 하게 되면 css소스를 읽을 수 ㅇㅄ다는 에러가 발생한다.

- `css-loader` 라이브러리를 install 한 후, 웹팩 rules에 추가하게 되면 로더는 모든 css파일을 스캔하고 정상적으로 읽어올 수 있도록 만든다.

- css loader에 의해 불러와 css를 js에 불러오긴 했지만, cssom으로 그리지 못해 렌더링되지 않는다. js소스에 있는 style을 cssom 렌더트리에 적용시키기 위해 `style-loader`를 install해야한다.
  (이때 style-loader를 앞에 추가되어야한다. rules.use 배열이 뒤에서부터 앞으로 인식되기 때문이다.)

- `file-loader`는 프로젝트 안에 파일을 가져오기 위해 사용되는 로더이다. 이미지 파일을 모듈로 사용할 수 있게 만든다.

- build를 하면 dist파일에 내부에 이미지가 생성되는데 이것은 캐시를 의미한다. 브라우저의 성능 향상을 위해 캐시를 생성한다.

- file-loader를 로더에 등록했는데도 불구하고 정상적으로 불러오지 못한다.

- `url-loader` 페이지 안에서 여러 이미지를 불러오게 되면 네트워크 지연이 될 수 있다. 한페이지 안에서 작은이미지 여러개를 사용하게 되면 data url스키마를 사용하는 것이 나을 수 있다.

- data포맷을 정하고 인코딩 방식을 정한 후 값을 넣으면 이미지 파일을 렌더링 하게 된다.

-`url-loader`가 바로 base64로 변환하고 작은 파일로 변환해 주는 기능을 한다.

- webpack.config.js > loader를 file-loader에서 url-loader로 변경한다.
- limit이란 속성으로 파일의 용량에 따라서 limit값 이하의 용량을 가진 파일은 base64로 변경되어 이미지가 로드되고, 이상의 이미지는 그대로 로드하게 된다.

# 플러그인

- 웹팩에서 마지막으로 알아야할 개념.
- 플러그인은 번들된 결과물을 처리
- 자바스크립트를 난독화 한다거나 특정 텍스트를 추출하는 용도로 사용

## BannerPlugin

- main.js 상단에 배너 문구를 작성하기 위해 사용

## DefinePlugin

- API 환경 변수들을 어플리케이션에 제공하기 위해 Define Plugin을 사용한다.

## Clean Webpack Plugin

지금까지 dist폴더를 필요시 삭제했었는데, clean webpack plugin을 설정하면 빌드 할때마다 dist폴더를 삭제 후 새로이 반영시켜준다.

## MiniCssExtractPlugin

스크립트 파일이 많으면 자바스크립트 하나로 결과물을 만드는 것이 부담이 될 수 있다. 번들 결과에서 스타일 시트 모드만 뽑아내서 파일을 분리하도록 한다.
분리하여 페이지 로딩을 할 때 좀 더 빠른 환경을 제공한다.

따라서 빌드된 index.html 결과물을 확인해 보면 CSS와 JS를 따로 받아오는 것을 확인할 수 있다. 개발자모드의 네트워크 모드에서 봐도 css, js를 따로 받아오는 것을 확인할 수 있다.

# 바벨

- 바벨탑 하늘 높이 올라가기 위해 쌓은것. 하나님이 이거보고 실패하도록 함.
- 프론트엔드 코드가 일관적이지 못할 때가 많다.
- 브라우저에서 Promise 패턴을 인식 못하는 경우도 있고, Promise.prototype.finally 같은 메서드를 인식 못하는 크로스브라우징 이슈가 발생하는 경우가 있다.
- 타입스크립트, ES5, JSX처럼 다른 언어로 분류되는 것들을 동작되도록 만들어준다.

## 동작

- 파싱 : 토큰을 받아 모두 분해한다.
- 변환 : ES6로 되어있는 함수를 ES5로 변환
- 출력

## 플러그인

- 바벨의 동작중 변환과정을 담당하는 것이 플러그인이다.
