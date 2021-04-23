---
title: "[Spring Boot] 스프링 부터 기본 개념 정리"
description: '스프링에 대한 개념이 부족해서 공부할 겸 정리하려고 한다...'
date: "2021-04-19"
modified_date: "2021-04-19"
tags: [Spring Boot, IOC, DI]
---

스프링에 대한 개념이 부족해서 공부할 겸 정리하려고 한다.

# 스프링 부트란?

기존 스프링을 그대로 사용하면 설정해야할게 너무 많다. 설정하는데만 상당한 시간이 소요되므로 그러한 불필요한 작업을 최소하하기 위해 개발된 것이 `스프링 부트`이다.

- 프로젝트를 만들고 단순히 실행만 하면 되므로 편리하다.

- Tomcat9이 내장되어있어 `별도의 WAS를 구축하지 않아도` 되는 장점이 있다.

- 환경설정이 간편하다. properties와 XML설정만 건드리면 된다.

- Maven, Gradle와 같은 `빌드 시스템`을 사용해서 라이브러리를 보다 쉽게 불러올 수 있다.

- [퀵스타트 가이드](https://spring.io/quickstart)에서 가이드만 참고하면 스프링 부트 프로젝트를 빠르게 생성할 수 있다.






- 스프링 컨테이너가 관리하는 객체를 보통 `빈(bean)`이라고 한다.

# IoC(Inversion of Control)

## 의존성이란?

스프링에서의 의존성을 다루기 전에 의존성에 대한 개념을 집고 넘어가야할 것 같다. 의존성이란, 자바 클래스 안에서 객체가 생성 될 때, 객체간 의존적인지 여부를 판단하는 것을 말한다.

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

main() 안에서는 Person이란 public 클래스를 참조해서 객체를 생성한다. 이때, `main은 Person이란 클래스를 참조한다는 점에서 main은 Person에 의존적이다.`라 할 수 있다. 결국 main은 혼자 컴파일 될 수 없고 Person이란 클래스와 같이 있어야 컴파일이 가능하게 된다. 제어가 Person이 되므로 이것을 `제어의 역전`이라고 한다.

자바에서는 객체의 의존성을 관리하기 위한 2가지 방법이 존재한다. 첫번쨰는 객체가 의존관계에 있는 객체들의 생성자를 호출하는 것, 두번째는 룩업(look-up)패턴을 활용해 의존성들을 찾아 배치하는 것.
