---
title: '[React, Next.js] Next.js CORS 문제 해결'
description: "먼저 css로 애니메이션을 일일이 매번 처리하려고하다 보니, 귀찮았다..."
date: '2021-05-03'
modified_date: '2021-05-03'
tags: [React, CORS]
---

# Next.js CORS 문제

Next.js와 Spring 서버를 API 연동 작업을 하는 도중에 엄청 해매서 기록을 남기려 합니다. 기존 React에서 사용하던 package.json에 Proxy를 추가하는 방법으로 CORS 를 해결하는 방법이 있었습니다만, next.js에서는 무슨일인지 먹히지 않았습니다. 그래서 이외의 방법은 어떤것이 있는지 알아보려고 합니다.

## Cross-Origin Resource Sharing(CORS)

문제를 다루기전에 CORS애 대해 간단히 개념을 잡고 넘어가야합니다.

CORS는 추가 HTTP헤더를 사용해서 별도의 WAS에서 실행중인 웹 어플리케이션 리소스에 접근할 수 있도록 권한을 부여하는 것을 말합니다. 기본적으로 브라우저(User-Agent), 웹어플리케이션에서 다른 리소스에 접근하지 못하도록 차단하고 있다.(보안때문!)

보통 XMLHttpRequest를 사용해서 uri 요청하게 되는데 보안상 브라우저는 CORS를 제한합니다.

CORS는 `XMLHttpRequest`, `Fetch API`를 사용하여, CSS, Javascript, HTML, img 등과 같은 리소스를 불러올 때 발생합니다.

그래서 이러한 차단을 풀어줘야하는데 Proxy라는 중간에서 데이터를 처리해주는 장치를 중간에 놓고 대신 전달해주는 방식으로 가야한다. 하지만, 요즘 React의 webpack이나 스프링 등 다양한 방식으로 CORS를 처리해주기 때문에 Proxy 서버까지 만들지 않고 해결할 수 있다.

## CORS 오류


서버의 base url이 `http://localhost:8080`, 그리고 request하는 프론트엔드 서버는 `http://localhost:3000`이라고 가정해보자.

아래 예제와 같이 API를 호출하게 되면 CORS 라는 에러가 발생한다. Proxy 설정을 해주지 않았기 때문이다.

### 예제 1

```js
const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // API 호출
    axios.get("[API 호출 URL]", `[config]`).then((data) => {
      console.log("data", data);
      setList(data);
    })
  }, []);


  return <ul>
    {list.map((data) => {
      return <li>{data.name}</li>
    })}
  </ul>
}
```


### package.json에 proxy 추가

package.json에 proxy속성 하나만 추가해주면 CORS를 간단히 해결할 수 있다.

```json
{
  ...
  "license": "ISC",
  "proxy":"http://localhost:8080"   // 백엔드 서버 url을 입력해야한다.
}
```

---

하지만, Next.js에서는 proxy를 추가해도 동작이 되지 않았다. 이것때문에 엄청 애먹었다. 후

기본적으로 SSR로 동작하기 떄문인지 몰라도 proxy가 안먹히더라.

stackoveflow형님들과 공식 문서를 참고해보니 next.js에서는 다른 방식으로 CORS를 해결해야하는 것 같았다.


# Next.js에서 CORS 해결하기

## Spring 또는 서버에서 CORS 제어

가장 간단한 방법으로 서버에서 CORS를 허용해주면 된다. 필자는 Spring boot로 개발했으니, Spring 기준으로 정리하자면 다음과 같다.

### @Configuration 사용

@configuration 어노테이션을 사용하면 스프링에서 빈으로 등록되고, Spring Container는 빈으로 인식하여 연동한다.


```java
package com.mbc.devblog.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry
      .addMapping("/**") // 모든 리소스를 허용
			.allowedOrigins("http://localhost:3000") // localhost:3000 url만 허용
			.maxAge(3000); // 
	}
}
```
- addMapping("/**") : 모든 리소스를 허용
- allowedOrigins() : localhost:3000 url만 허용
- maxAge() : pre-flight 요청으로부터 응답 시간을 설정



### @CrossOrigin

Controller안에 @CrossOrigin("*")이라는 어노테이션을 선언하면 더 편하게 설정이 가능하다.

```java
@RestController
@CrossOrigin("*")
public class Controller {

  @RequestBody
  @ReqstMapping(value="/test", method = RequestMethod.GET)
  public String test() {
    return "test";
  }
}
```

위의 예제는 Controller안에 모든 url에 대해 허용하겠다는 것이다. Controller 자체에 CORS를 설정할 수 있고, 

```java

  @RequestBody
  @ReqstMapping(value="/test", method = RequestMethod.GET)
  @CrossOrigin("*")
  public String test() {
    return "test";
  }
```

각각의 서비스인 test()와 같은 함수에도 CORS를 설정할 수 있다.

