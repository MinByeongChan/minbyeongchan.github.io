---
title: "[Android] Retrofit2 GET 사용해서 데이터 조회"
date: "2020-01-15"
categories: [Android]
tags: [Android Retrofit2 RestAPI]
comments: true
---

<style>
    .android {
        color: green;
    } 
</style>

# Retrofit2란?

Retrofit2라이브러리는 안드로이드에서 RestAPI를 사용할 수 있게 하는 기능이다.

---

## 사전 등록

### 라이브러리 등록

먼저 안드로이드 grade(module:app)에서 **dependencies**를 등록해야한다.

```kotlin
// retrofit2
    def gson_ver = "2.7"
    def retro_ver = "2.6.0"
    implementation "com.google.code.gson:gson:$gson_ver"
    implementation "com.squareup.retrofit2:retrofit:$retro_ver"
    implementation "com.squareup.retrofit2:converter-gson:$retro_ver"
```

retrofit2 버전은 [Restrofit](https://square.github.io/retrofit)에서 자세히 살펴볼 수 있다. 뿐만 아니라 각 함수에 대한 정보도 있으니 자세히 살펴보자.

**또다른 방법**은

단축기 `Lctrl+Lshift+Lalt+s` -> `왼쪽 Dependencies` -> `Declared Dependencies에서 +` -> `1. Library dependencies`

에서 검색하고 등록할 수 있다.

---

### manifest 설정

```kotlin
<uses-permission android:name="android.permission.INTERNET"/>

<application>
...
</application>
```

`<application>`태그 위에 인터넷 permission을 설정한다.

---

## 적용 방법

먼저 내가 사용했던 예제는 JSON형식을 GSON변환을 하고 retrofit2에 적용하여 사용했다.

---

### JSON 형식?

적용하기전에 JSON형식에 대해 간단히 언급하자면, JSON은 간단하게 말하면 웹 통신을 하기 위한 파일 형식이다.

```html
{ "statusCode": 200, "body": { "id": 1 "name" : "MBC" } }
```

다음과 같은 형식을 나타내고 "키": "데이터"의 형식으로 구성되어있다. 1번째 인자는 키가 statusCode이고 그에 해당하는 데이터는 200(Integer)이다.

2번째 인자는 특이하다. JSON Array이다. JSON도 데이터를 리스트 형식으로 받을 수 있게 구성되어있다. 이 부분에서 많이 헤맸다...

body는 id와 name인자가 존재한다. 안드로이드에서 구현할 때에도 이 부분을 유념하고 코드를 작성해야한다.

---

### 안드로이드 데이터 클래스(VOClass)

방금 언급한 데이터 클래스에 대한 정보를 작성하겠다.

참고로 [JSON -> Java클래스로 변환해주는 사이트](http://www.jsonschema2pojo.org/)를 참조하면 접근하고 싶은 JSON URL에 대한 정보를 입력만 하면 클래스를 간편하게 구현시켜준다.

```kotlin
data class BodyList(
    @SerializedName("statusCode")
    val statusCode: Int,
    @SerializedName("body")
    val body: Body
)


data class Body (
    @SerializedName("id")
    val id: Int,
    @SerializedName("name")
    val name: String,
)
```

데이터클래스를 작성했는데 BodyList에서 첫번째 인자인 StatusCode에 대한 인자, 두번째는 Body에 대한 인자가 있다.

Body는 아래 데이터클래스로 id와 name을 갖는 인자를 포함한다.

`@SerializeName` : JSON에서 키값에 접근하기 위한 어노테이션이다. GSON에서 제공하며 키를 갖고 JSON과 비교한다.

---

### RestAPI 인터페이스

```kotlin
interface APIService {
    @GET("/prod/products")
    fun getBody() : Call<BodyList>
}
```

GET으로 데이터를 조회만 할 것이기 때문에 리턴 값만을 수정한다. BodyList는 위에 있던 JSON형식을 그대로 딴 것이다.

Body형식은 각 프로젝트마다 다를 수 있으니 잘 알아보고 주의해야한다. 이것땜에 시간 엄청 걸렸다.

json형식이 array인지 단일 인자인지 정확히 인지하고 body를 구성해야한다.

---

### okhttp interceptor 추가

```kotlin
//interceptor 선언
val interceptor = HttpLoggingInterceptor()
interceptor.setLevel(HttpLoggingInterceptor.Level.BODY)
    val client = OkHttpClient.Builder()
        .addInterceptor(interceptor)
        .build()
```

interceptor는 http통신을 하기 위해 사용된다. 연결시도를 지속적으로 해줌으로서 연결이 원활히 가능하게 만들어준다.

### retrofit 객체 생성

```kotlin
private val URL: String = "사용할 base URL"

override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)


        //interceptor 선언
        val interceptor = HttpLoggingInterceptor()
        interceptor.setLevel(HttpLoggingInterceptor.Level.BODY)
        val client = OkHttpClient.Builder().addInterceptor(interceptor).build()

        // 통신하기 위한 retrofit 객체 생성
        val retrofit = Retrofit.Builder()
            .baseUrl(URL)
            .addConverterFactory(GsonConverterFactory.create())
            .client(client) // interceptor 추가
            .build()

        val api = retrofit.create(APIService::class.java)

        api.getBody().enqueue(object : Callback<BodyList> {
            override fun onResponse(
                call: Call<BodyList>,
                response: Response<BodyList>) {
                d("TAG", "onResponse")
            }

            override fun onFailure(
                call: Call<BodyList>,
                t: Throwable) {
                d("TAG", "onFailure")
                t.printStackTrace()
            }
        })
    }
```

- 아까 생성했던 inteceptor를 retorfit객체를 생성할 때 추가한다.
- addConverterFactory는 Gson형식으로 변환해주기 위한 함수이다.
- 마지막에 build()를 해야 retrofit 객체가 동작한다.
- retrofit을 생성하고 객체를 생성한다.
- RestAPI 인터페이스에서 생성했던 함수를 사용한다.
- 통신이 월활하게 되면 onResponse()로 들어가게 된다.
- 통신이 원활하게 안된다면 onFailure()로 들어간다.
- t.printStackTrace()은 http오류를 출력해준다. 오류를 쉽게 확인할 수 있게 해준다.(추가로 interceptor를 추가하면 기존에 못찾던 오류내용을 상세히 보여주기도 한다.)

이번에 GET()만 사용해서 넣었는데 추후 POST도 어느정도 진행되면 추가할 계획이다.
