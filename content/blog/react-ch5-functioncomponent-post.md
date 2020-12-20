---
title: "[React] map함수를 활용한 리스트 컴포넌트 만들기"
date: "2020-11-27"
categories: [React]
tags: React map
comments: true
---

[do-it-라액트프로그래밍 정석 교재 참조해서 공부]()

# map

map 함수는 javascript에서 새로운 배열을 만드는 매우 유용한 함수이다.

```jsx
var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var list_new = list.map(function (data) {
  return data * 2
})

// list_new = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
```

list를 2배해서 새로운 배열 list_new를 만들었다. 이렇게 간단한 방식으로 배열을 변형해서 사용할 수 있는 함수가 map이다.

이제 map으로 태그를 더해 새로운 컴포넌트를 만들어보자.

# map으로 리스트 컴포넌트 생성

```jsx
import axios from "axios"
export const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})
```

```jsx
import React, { PureComponent } from "react"
import { Typography } from "@material-ui/core"
import { Api } from "../api"

class MainPage extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
    }
  }

  componentDidMount = () => {
    Api.get("/posts", { params: { userId: "1" } })
      .then(response => response.data)
      .then(json => {
        this.setState({ list: json })
      })
  }

  render() {
    const { list } = this.state

    console.log(list)

    return (
      <div style={styles.mainDefault}>
        <div style={{ margin: "1rem" }}>
          <Typography variant="body">테스트 리스트</Typography>
        </div>
        // map함수를 사용하여 리스트 출력
        {list.map(data => (
          <div style={{ padding: "1rem" }}>
            <Typography varient="h5">Title</Typography>
            <Typography>{data.title}</Typography>
            <br></br>
            <Typography varient="h5">Body</Typography>
            <Typography>{data.body}</Typography>
          </div>
        ))}
      </div>
    )
  }
}
```

state에 list라는 배열을 생성한 후, axios라이브러리를 사용해서 json 데이터를 가져왔다.

json array를 list에 초기화 한후 map으로 돌려 컴포넌트를 만든다.

ul안에 li를 생성할 수도 있고 다양한 방법으로 재사용 가능한 컴포넌트가 생성이 가능하다.
