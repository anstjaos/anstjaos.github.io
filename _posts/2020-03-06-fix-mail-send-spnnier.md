---
title: "Javascript 로딩창 만들기"
excerpt: "특정 버튼 클릭시 로딩화면 만들기"

categories:
 - Basecamp
tags:
 - NHN
 - Basecamp
 - Javascript
---



## JSP input='file' 사용 시 문제



## 버튼 클릭시 로딩화면 만들기

### 문제

웹 페이지에서 특정 페이지를 클릭 시 로딩 화면을 만들었다.

기존의 화면은 아래와 같이 중앙에 spinner gif가 화면에 보여지는 방식이었다.



![mail_loading](https://i.imgur.com/OzxfI14.png)



gif는 잘 보이지만 하나의 단점이 있었다.

다른 content나 화면 구성요소가 동작을 한다는 것이였다.

예를 들어 제목 텍스트박스를 클릭하고 내용을 적어도 기록이 됐다.

단, 메일 전송시에 해당 내용이 반영되지 않았지만 개선하고자 했다.



### 해결 방안

문제를 해결하고자 기존의 화면에 div를 하나 추가하여 보이는 화면 전체를 덮었다.

``` html
<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>
```

``` html
<div id='loadingImg' style='position: absolute; display: none; top: 50%; z-index: 10000; left: 50%; filter: alpha(opacity=80); background-color: #ffffff; width: 70px; height: 70px; opacity: 0.80; background: url(gif)'></div>
```

css로 style을 분리하는게 맞지만 일단 지금은 같이 붙였다.



위와 같이 화면을 구성하면 다음과 같은 화면이 보인다.

![update_spinner](https://i.imgur.com/NOtriEP.png)

div로 화면을 덮었기 때문에 뒤에 있는 화면 구성요소들에 액션이 먹히지 않는다.

더 좋은 방법이 있으면 추후 수정하겠다.