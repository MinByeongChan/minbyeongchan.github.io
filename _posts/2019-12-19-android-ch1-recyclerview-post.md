---
title: '[Android] RecyclerView의 개념 및 사용법'
description: 'recyclerview는 ListView를 보완하기 위해 나온것이다.'
date: '2019-12-19'
modified_date: '2019-12-19'
tags: [Android, RecyclerView]
---

# RecyclerView란?

recyclerview는 ListView를 보완하기 위해 나온것이다. ListView는 모든 항목에 대한 메모리를 갖고 있다. 따라서 뷰에 대한 메모리가 모든 항목에 할당되어 리스트 크기가 커지면 메모리 낭비가 일어난다.

이런 메모리 낭비를 보완하기 위해 나온 개념이 recyclerview이다. **recycler**라는 이름에서 알 수 있듯이 recyclerview는 리스트 크기가 커져도 **보이지 않는 리스트**에 대해서는 **메모리 할당을 취소**하여 메모리를 절약할 수 있게 한다.

## recyclerView 생성

---

우선 recyclerView 뷰 객체를 사용하기 위해 build.gradle에 implementation을 해야한다.

[build.gradle]

```kotlin

dependencies{
    ...
    implementation "androidx.recyclerview:recyclerview:1.0.0"
    ...
}
```

버전에 따라 사용법이 달라질 수 있으므로 안될경우 [AndroidDeveloper](https://developer.android.com/reference/androidx/recyclerview/widget/package-summary.html)를 참조하자.

라이브러리를 등록했으면 recyclerView객체를 xml로 만들자.

```xml
<androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recycler_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"/>
```

테스트 환경에서 나타낼 txtView xml파일도 있어야한다.

```xml
<TextView
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/txtView"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:textSize="25dp"
    android:padding="8dp">

</TextView>
```

환경설정 이후 이제 만들어봐야하는데, 먼저 RecyclerView를 만드는데 필요한 구성 요소들을 알아보자.

### 1. ViewHolder

ViewHolder는 view들의 ID를 가져와 등록해주는 역할을 한다. 등록되어있는 View들의 ID를 사전에 전부 등록한다. RecyclerView.ViewHolder를 상속한다.

```kotlin
private class TestViewHolder(
    itemView: View
    ): RecyclerView.ViewHolder(itemView){
        val txtView = itemView.textView
    }
```

### 2. Adapter

Adapter는 recyclerView에 대한 항목을 구성하는 역할을 수행한다. ViewHolder에셔 정의 되어있는 View들을 생성하여 Layout에 보여주는 역할을 한다. 그렇기 때문에 Adapter가 사용되기 전에 반드시 ViewHolder를 만들어줘야한다.

```kotlin
private class TestAdapter(private val list: MutableList<String>) :
        RecyclerView.Adapter<TestViewHolder>() {
        override fun onCreateViewHolder(parent: ViewGroup, i: Int): TestViewHolder {
            return TestViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_main, parent, false))
        }

        override fun getItemCount(): Int {

            return list.size
        }

        override fun onBindViewHolder(holder: TestViewHolder, position: Int) {

            val text = list.get(position)
            holder.txtView.text = text
        }

    }
```

1. getItemCount() : 항목의 개수를 판단하기 위한 함수.
2. onBindViewHolder() : 각 항목을 구성하기 위한 함수.
3. onCreateViewHolder() : 레이아웃XML 파일의 inflate를 담당. inflate된 view객체들을 ViewHolder의 생성자로 넘겨 ViewHolder에서 각 뷰 객체에 대한 ID를 얻는다.
4. 이렇게 얻은 ID를 갖고 Adapter내부에서 ViewHolder에 대한 메모리를 유지한다.

1, 2과정만으로도 RecyclerView는 정상적으로 생성된다. 하지만 layout의 위치나 형태를 설정할 수는 없다. 그래서 필요한 것이 layoutManager이다.

### 3. LayoutManager

LayoutManager는 RecyclerView를 유지하기위한 필수 구성 요소이다. recyclerView가 linear하게 구성될지, grid하게 구성될지 등등 구성 방식들을 정의한다. LayoutManager는 다양한 Layout을 구성할 수 있도록 지원한다.

1. LinearLayout
2. RelativeLayout
3. GridLayout 등등

```kotlin
val linearManager = LinearLayoutManager(this) // LinearLayoutManager에 대한 객체 생성
linearManager.orientation = LinearLayoutManager.HORIZONTAL
recycler_View.layoutManager = linearManager
```

xml에서 설정하던 것 처럼 orientation을 사용하여 orientation을 설정할 수 있다. vertical 또는 horizontal 모두 가능하다.
마지막은 recyclerView에 linearLayout을 적용하는 코드이다.
("recycler_View"는 ID를 의미)

여기까지 해서 RecyclerView를 구성하는 작업을 마쳤다. 마무으리로 recyclerView를 생성해주면 된다.

```kotlin
    val list = mutableListOf<String>()
    for(i in 1..10){
        list.add("RecyclerList" + i)
    }
    recycler_View.layoutManager = LinearLayoutManager(this@MainActivity)
    recycler_View.adapter = TestAdapter(list)
```

recycler_View는 kotlin의 SAM을 적용하여 findViewByID를 생략하여 xml의 ID를 곧바로 가져온 것이다.

먼저 LayoutManager를 호출하고, 위에서 작성한 Adapter를 실행시키면 끝이다.
