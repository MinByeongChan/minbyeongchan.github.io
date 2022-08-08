---
title: "[Spring Boot] 스프링 부터 기본 개념 정리"
description: '스프링에 대한 개념이 부족해서 공부할 겸 정리하려고 한다...'
date: "2021-04-19"
modified_date: "2021-04-19"
tags: [Spring Boot, IOC, DI]
---
# 스프링 부트란?

기존 스프링을 그대로 사용하면 설정해야할게 너무 많다. 설정하는데만 상당한 시간이 소요되므로 그러한 불필요한 작업을 최소하하기 위해 개발된 것이 `스프링 부트`이다.

- 프로젝트를 만들고 단순히 실행만 하면 되므로 편리하다.

- Tomcat9이 내장되어있어 `별도의 WAS를 구축하지 않아도` 되는 장점이 있다.

- 환경설정이 간편하다. properties와 XML설정만 건드리면 된다.

- Maven, Gradle와 같은 `빌드 시스템`을 사용해서 라이브러리를 보다 쉽게 불러올 수 있다.

- [퀵스타트 가이드](https://spring.io/quickstart)에서 가이드만 참고하면 스프링 부트 프로젝트를 빠르게 생성할 수 있다.


# 기본 개념

- 스프링 컨테이너가 관리하는 객체를 보통 `빈(bean)`이라고 한다.

- 스프링은 객체간 의존성을 줄여 
# IoC(Inversion of Control)

IoC에 대해 알기 위해 먼저 `의존성`에 대한 사전지식이 필요하다.
## 의존성이란?

스프링에서의 의존성을 다루기 전에 의존성에 대한 개념을 집고 넘어가야할 것 같다. 의존성이란, 자바 클래스 안에서 객체가 생성 될 때, 객체간 서로 의존적인지 여부를 판단하는 것을 말한다. 의존성에 대한 제어권을 기존에는 자기가 갖고 있었지만, 다른 객체를 사용함으로써 생성자를 통해 받아오기 때문에 의존성을 관리하는 일은 다른 클래스에서 하게 된다.

```java 
class Person {
  public void Person(String name1, int age1) {
    this.name = name1;
    this.age = age1;
  }

  public void print() {
    System.out.println("이름 : "+this.name + " / 나이 : "+this.age);
  }
}

class main {
  public static void main(String[] args) {
    Person p1 = new Person("Byeong Chan", 27);  // 의존성 관게를 갖는다.
  }
}

```

main() 안에서는 Person이란 public 클래스를 참조해서 객체를 생성한다. 

이때, `main은 Person이란 클래스를 참조한다는 점에서 main은 Person에 의존적이다.`라 할 수 있다. 

--- 

결국 main은 `혼자 컴파일 될 수 없고` Person이란 클래스와 같이 있어야 컴파일이 가능하게 된다. 제어가 Person이 되므로 이것을 `제어의 역전`이라고 한다.

자바에서는 객체의 의존성을 관리하기 위한 2가지 방법이 존재한다. 첫번쨰는 객체가 의존관계에 있는 객체들의 생성자를 호출하는 것, 두번째는 룩업(look-up)패턴을 활용해 의존성들을 찾아 배치하는 것이 있다.

# DI(Dependency Injection)

의존성을 주입해주는 것을 말한다. Spring에서 제공하는 특정 어노테이션을 보고 주입을 해준다.

- @Autowired를 통해 Field, setter 등에서 사용하여 의존성 주입이 가능하다.(굳이 생성자에 주입하지 않아도 된다)
- `빈이 아닌 일반 객체`에 대해서 의존성 주입을 시도하면 무조건 에러가 발생한다. @Autowired는 스프링 빈에 대해서만 의존성 주입을 한다.
- 순환참조(Circuler Reference)
  : A <-> B 상호 참조하게 되어 서로 의존성을 못받아오는 현상이다.

# Bean

스프링에서 사용하는 객체이다.

- `IoC Container`에서 관리하는 객체이다.

- Application Context가 가져온 객체들만 Bean이라고 부른다. 이렇게 가져온 Bean들만 Application Context 안에서 상호 연동 된다.

- SpringBootApplication 에서는 @ComponentSpan이란 어노테이션에 의해 전체 프로젝트를 스캔해서 Bean을 찾는다.
  - @Repository는 예외적으로 JPA라는 라이브러리에서 처리하여 Bean으로 등록한다.

- `@Autowired` 라는 어노테이션을 사용하면 빈을 직접 의존성 주입이 가능하다.

# IoC 컨테이너

Spring을 사용하면 기본적으로 Application Context를 주로 사용하게 된다. 직접적으로 사용하는 것이 아닌 Spring을 실행하게 되면 내부적으로 알아서 실행시킨다. Application Context는 Bean Factory를 상속받고, 다양한 기능을 제공한다.

- 빈을 생성하고, 빈들 사이에서 의존성을 엮어준다. 또, 그 빈들 서로간에 기능을 제공해주는 역할을 한다.

- Controller, Repository 등 빈으로 등록된 객체들을 서로 엮어주는 역할을 한다.

- Bean은 어노테이션을 생성하여 스프링 객체, 빈으로 등록된다.

- IoC 컨테이너는 컨테이너 안에 있는 빈에게만 의존성을 주입시킬 수 있다. 또는 의존성을 가져온다.

- Application Context는 @Bean 또는 스프링에서 제공하는 어노테이션을 사용하면 알아서 등록 또는 연동 시켜주기 때문에 Application Context의 객체를 불러와서 getBean을 사용할 일은 거의 없다.

- 이러한 객체들을 Singleton Scope 객체라고 부른다. 하나를 갖고 계속 재사용 가능하게끔 만든다.

# AOP(Aspect Oriented Programming)

Spring은 관점 지향적인 프로그래밍을 지향한다.

- 클래스 또는 메서드에서 공통적으로 사용되는 동일한 메서드를 별도의 클래스, 메서드로 빼내는 것을 말한다.

- 즉, 중복되서 사용되는 코드들을 줄이기 위한 프로그래밍을 추구한다.

- @Transactional
 Spring AOP가 적용된 어노테이션이다.

- AOP 구현 방법
  - 컴파일A.java => (AOP) => A.class(AspectJ)
  - 바이트 조작 : A.java -> A.class -- (AOP) -- 메모리(AspectJ)

- 빈이 등록될 때, 스프링 내부적으로 AOP가 이뤄지고 `기존 소스를 건드르지 않고 기능을 추가`한다.

- Proxy 패턴 등 다양한 구현 방식이 있다.

# PSA (Portable Service Abstraction)

- Spring을 사용하고 있으면서 서블릿을 전혀 사용하지 않는다.
  (HttpServlet 사용해서 매핑하는 작업은 하지 않음)

- @GetMapping, @PostMapping 어노테이션을 사용해서 요청작업을 진행

- 어노테이션을 사용하면 곧 HttpMapping이 사용된다. 즉, Service Abstraction을 사용하게 되어 개발자가 보다 편리하게끔 작업할 수 있다.

- Spring MVC를 편리하게 사용되는 것은 Spring이 제공하는 추상화 객체들을 제공하기 때문이다.

- HttpServlet을 직접 사용하지 않고 서비스를 추상화하여 코드를 늘리지 않고, 작업할 수 있다.

- Spring boot는 톰캣이 기본 내장되어 있기 때문에 스프링 실행 시, Tomcat이 실행되는 것을 확인할 수 있다.

- 톰캣과 같은 서버를 변경하여 사용할 수도 있다. 톰캣 이외의 네티, 제티 등으로 변경 가능.

- Transaction
  - A, B, C 작업이 모두 완료되어야 실행이 되는 구조. (All OR Nothing)
  - 기존에 Transaction 이 보장되도록 코딩을 해야했지만, Spring에서 제공하는 @Transactional 어노테이션을 사용하면 이러한 작업을 하지 않아도 된다. 이것 역시 PSA 중 하나 라고 한다.


# 프로젝트 실행

## 프로젝트 빌드

```bash
$ mvnw package
또는
$ mvn clean install
```

명령어를 통해 `패키지를 빌드를` 하게되면 프로젝트 루트 폴더 안에 `target`폴더가 생성된다. 안에 생성된 `jar` 또는 `war` 파일을 실행해서 스프링을 시작한다.
(jar : Java Archive war: Web Application Archive)

## 프로젝트 실행

```bash
$ java -jar [실행파일.jar]
```

배포 후에는 저렇게 target폴더 내부 실행파일을 직접 접근해서 실행시킨다. 

하지만, 개발할 때에는 eclipse, intellij 또는 vscode 툴을 사용하므로 에디터에서 실행시키는 기능을 이용한다.

mvnw package를 하지않고 실행시키면 스프링 관련 플러그인을 가져오지 못한다.(실행이 안되거나 문제가 발생한다.)





