---
title: "[Android] 쓰레드 개념, 사용법, UI 처리"
description: '쓰레드는 작업(실행)의 단위이다. 어떤 프로세스가 자원을 할당 받고, 프로그램이 실행이 될 때...'
date: "2020-03-01"
modified_date: "2020-03-01"
tags: [Android, Coroutine]
---

<style>
    .android {
        color: green;
    } 
</style>

[광부 금광캐는광부 참조해서 공부](https://itmining.tistory.com/4)

# Thread란?

쓰레드는 작업(실행)의 단위이다. 어떤 프로세스가 자원을 할당 받고, 프로그램이 실행이 될 때, 작업의 수행을 쓰레드가 담당하게 된다. 한개의 작업을 수행하는데 10초가 걸린다고 가정하자. 10초 후에 다른 작업을 수행해야하므로 비효율 적일 수 있다. 이러한 경우에 쓰레드를 사용하게 되어 작업을 병렬적으로 수행하여 다른 작업을 동시에 수행할 수 있다.

쓰레드는 효율적으로 사용할 수도 있지만, 리소스를 많이 사용하게 된다. 실제로 쓰레드 전환 시 사용되는 컨텍스트 스위치는 많은 자원을 소비하는 것으로 알고 있다. 그래서 너무 많은 쓰레드를 사용하는 것은 오히려 비효율적으로 다가올 수 있다.

---

# 기본적인 쓰레드 사용방법

```java
public static void main() {
    ...

    new Thread(new Runnable() {
        @override
        public void run() {
            System.out.println("Hello World");
        }
    });

    ...
}
```

kotlin 에서 더 좋게 표현 할 수 있는 방법이 있을지 모르겠지만, 위 소스는 자바 기반의 소스를 코틀린에 그대로 옮긴 코드다.

쓰레드를 생성할 때 Runnable객체를 같이 사용하게 된다. runnable은 단순히 인터페이스이고 run()메서드에서 쓰레드 동작이 이뤄진다. 위 예제는 별 특이점이 없이 출력만을 한다.

하지만, 다른 메인스레드가 어떤 수행을 할 때, 새롭게 생성된 쓰레드는 병렬적으로 동작해서 작업의 효율을 높일 수 있다.

---

# 쓰레드 종료

```java
public class MainActivity extends AppCompatActivity {

    private ExampleThread thread;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Log.d("TAG", "메인스레드 시작");
        for(int i=0; i<3; i++) {
            thread = new ExampleThread(i);
            thread.start();
        }
        try{
            thread.join();
        }catch (InterruptedException e){
            e.printStackTrace();
        }
        Log.d("TAG", "메인스레드 종료");
    }

    private class ExampleThread extends Thread {

        private int num;

        public ExampleThread(int i) {
            //init
            num = i;
        }

        @Override
        public void run() {

            Log.d("TAG", "Thread start"+num);
            try {
                Thread.sleep(1000);

            }catch (InterruptedException e) {
                e.printStackTrace();
            }
            Log.d("TAG", "Thread end"+num);
        }
    }
}

```

결과 :

```java
D/TAG: 메인스레드 시작
D/TAG: Thread start0
D/TAG: Thread start2
D/TAG: Thread start1
D/TAG: Thread end2
D/TAG: Thread end0
D/TAG: 메인스레드 종료
D/TAG: Thread end1
```

join()은 메인 쓰레드의 종료를 기다리는 함수이다. 결과를 보면 메인쓰레드보다 늦게 종료되는 쓰레드를 발견할 수 있다. 뭔가 잘못된건가 싶을 수 도 있지만 잘못된게 아니다. 쓰레드는 순서가 없다. 따라서 실행되는 시점은 정해졌으나 종료되는 시점은 각각 다를 수 있다. 그래서 쓰레드가 점점 많이 지면 다루기가 힘들 수 있다는 얘기다.

---
