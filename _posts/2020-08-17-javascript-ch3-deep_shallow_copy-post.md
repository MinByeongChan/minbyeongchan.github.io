---
title: "[Spring] "
description: ''
date: "2021-04-19"
modified_date: "2021-04-19"
tags: [Spring, IOC, DI]
---

스프링에 대한 개념이 부족해서 공부할 겸 정리하려고 한다.

- 스프링 컨테이너가 관리하는 객체를 보통 `빈(bean)`이라고 한다.




# IOC

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

자바에서는 객체의 의존성을 관리하기 위한 2가지 방법이 존재한다. 첫번쨰는 객체가 의존관계에 있는 객체들의 생성자를 호출하는 것, 두번째는 룩업(look-up)패턴을 활용해 의존성들을 찾아 배치하는 것.
