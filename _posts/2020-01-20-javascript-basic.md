---
title: "Javascript 기본"
excerpt: "Javascript 기본 교육 정리"

categories:
 - Study
  tags:
 - Web
 - Javascript
---

### 웹 언어를 배울 때 Todolist를 만들자

#### SPEC

- TODO 추가, 완료할 수 있다.
- TODO는 미완료 상태와 완료된 상태 디자인 적용
- 종류에 따라 갯수 카운팅(전체/활성/완료)
- TODO를 삭제할 수 있다.
- 종류별로 보기(전체/활성/완료)



### 자바스크립트의 사용

- 스크립트 파일을 인클루드하는 방식

  ```html
  <script src=""></script>
  ```

  

- 스크립트를 직접 코딩하는 방식

``` html
<script>
	~~~
</script>
```



- 'use strict';는 항상 써주는게 좋다.



### 스크립트와 DOM과의 상호작용 시점

- DOM: 자바스크립트로 HTML 문서를 다룰 수 있게 브라우저 환경 제공하는 API
- 브라우저는 HTML문서를 첫줄부터 순서대로 파싱하며 필요한 정보를 수집하고 렌더링
- JS가 평가되는 시점에 Document에 렌더링되어 있는 시점



## TODO 추가하기

- DOM 상의 엘리먼트 탐색
- 엘리먼트에 이벤트 핸들러 적용



### 엘리먼트 찾기

```javascript
document.getElementById('myId');
document.getElementsByTagName('div');
document.getElementsByClassName('myClass');
```

#### document

- 브라우저상의 HTML 문서를 모델링한 객체
- DOM API의 시작점



#### HTMLCollection

- 유사 배열 : Array 비슷하게 사용가능하지만 Array가 아님
  - 숫자로 인덱싱 가능, length 존재
  - Array가 아니라서 Array의 API를 사용할 수 없음
  - Array의 API를 사용하려면 Array로 변환한 뒤 사용
- live한 컬렉션



#### 엘리먼트안의 엘리먼트를 찾을 수 있다.



### 엘리먼트에 이벤트 핸들러 적용

```javascript
element.addEventListener("click", function() {

}, false);
```

#### Parameters

1. 이벤트명 ex) click, focus, mouseover, etc...
2. 이벤트 핸들러
3. 캡쳐링을 사용할지 여부

이벤트 핸들러 안에서의 **this**는 이벤트가 적용된 엘리먼트



### 엘리먼트 이벤트 해제

```javascript
element.removeEventListener("click", handler, false);
```

#### Parameters

1. 이벤트명 ex) click, focus, mouseover, etc...
2. 이벤트 핸들러(함수의 참조를 저장해놔야함)
3. 캡쳐링을 사용할지 여부



### 동적으로 엘리먼트 만들기

**document.createElement(tagName)**

```javascript
var newDiv = document.createElement("div");
var newP = document.createElement("p");
```



**document.createTextNode(text)**

```javascript
var newText = document.createTextNode("텍스트 노드");
var newText2 = document.createTextNode("HELLO WORLD");
```

만들고 **BODY** 엘리먼트에 붙이지 않으면 화면에 나타나지 않는다.



### 엘리먼트에 자식 엘리먼트 추가하기

**element.appendChild(node)**

```javascript
var newDiv = document.createElement("div");
var newP = document.createElement("p");
var newText = document.createTextNode("HELLO ROOKIES");

newP.appendChild(newText);
newDiv.appendChild(newP);

document.body.appendChild(newDiv);
```

After

```html
<body>
  <div>
    <p>HELLO ROOKIES</p>
  </div>
</body>
```

```javascript
document.body.childNodes[0].tagName == 'DIV';
document.body.childNodes[0].childNodes[0].tagName == 'P';
document.body.childNodes[0].childNodes[0].childNodes[0].nodeValue == 'HELLO ROOKIES';
```



### 자식 엘리먼트 삭제하기

**element.removeChild(node);**

지우려는 대상의 참조를 들고있어야 한다.

```javascript
var newDiv = document.createElement("div");
var newP = document.createElement("p");
var newText = document.createTextNode("HELLO ROOKIES");

newP.appendChild(newText);
newDiv.appendChild(newP);

document.body.appendChild(newDiv); //추가했지만
document.body.removeChild(newDiv); // 바로 삭제됨
```



### innerHTML을 이용해 동적으로 엘리먼트 만들기

```javascript
element.innerHTML = '<div>text</div>';
```

- html 텍스트를 이용해 자식 노드를 생성

```javascript
document.body.innerHTML = "<div><p>HELLO ROOKIES</p></div>";
```

```html
<body>
  <div>
    <p>HELLO ROOKIES</p>
  </div>
</body>
```



```javascript
element.innerHTML = '<div>text</div>';
```

**장점**

- 새로운 엘리먼트들을 만드는 상황에서는 보통 제일 빠름(엔진 내부에서 생성)
- DOM API를 이용하는것보다 편한 경우가 많다.

**단점**

- 엘리먼트에 작은 변화를 주는 경우 비효율적(돔트리를 모두 지우고 다시 만듬)



**주의점**

값이 세팅 될때마다 모든 자식 엘리먼트를 지우고 다시 만들기 때문에 Addition assginment(+=) 연산자를 직접 사용하는것을 피해야 한다.

```javascript
//wrong
div.innerHTML = '<p>text1</p>';
    // 자식으로 <p>text1</p> 을 만든다.
div.innerHTML += '<p>text2</p>';
    // innerHTML === '<p>text1</p><p>text2</p>'
    // 모두 지우고 <p>text1</p> 다시만들고 <p>text2</p>도 만든다.

//correct
var content = '';

// HTML 스트링을 미리 만든다.
content += '<p>text1</p>'; // 루프에서 사용된다고 가정
content += '<p>text2</p>';

div.innerHTML = content; // innerHTML 할당은 한번만
```

값이 할당되면 다 지워버리고 새로 할당된 엘리먼트를 다시 만들기 때문에 느리다.



### 다른 DOM API 정보

DOM API 정보 검색은

Mozilla developer network(구글에서 mdn 검색) 활용

**[http://developer.mozilla.org](http://developer.mozilla.org/)**

- 웹플랫폼 -> API와 DOM매뉴에서 element와 node파트 확인
- 웹 기술에 대한 거의 모든 정보를 얻을 수 있다.



## TODO 완료하기

**배울 내용**

- 체크박스 다루기
- 개발자 도구를 이용한 디버깅
- 이벤트 전파
- 자바스크립트를 이용한 CSS 제어



### 체크박스 다루기

**html**

```html
<input type="checkbox" value="someValue" checked />
```

**js**

```javascript
input.value // 값
input.checked // 체크여부(radio, checkbox)
input.type // HTML 어트리뷰트에 접근한다.(스펙상 정의된 어트리뷰트)
input.focus() // 포커스를 준다.
input.blur() //포커스를 해제한다.
// etc...
```



### 이벤트의 전파

```html
<body>
  <ul>
    <li><input type="checkbox" /> TODO</li>
  </ul>
</body>
```

이벤트는 특정한 방향으로 전파된다

자식에 이벤트가 발생했을 때 내가 먼저

- 위에서 아래로 => **Capturing**

body -> ul -> li -> input

자식에 이벤트가 발생했을 때 자식 먼저

- 아래에서 위로 => **Bubbling**

input -> li -> ul -> body

순서: 캡처링 -> 실제 대상 엘리먼트 -> 버블링

input 클릭시 버블링 발생 -> 버튼 활성화 -> li 이벤트 발생 -> 버튼 해제



**이벤트의 전파 제어**

- addEventListener의 세번째 인자로 캡처링/버블링 이벤트를 선택할 수 있다. `true` 면 캡처링
- 이벤트 핸들러에 첫번째 인자로 넘어오는 Event객체로 전파를 차단할 수 있다.

```javascript
var useCapturing = true;

element.addEventListener('click', function(eventObject) {
  eventObject.stopPropagation(); // 캡처링이나 버블링을 취소한다.(이벤트 전파를 차단한다)

  //etc
  eventObject.preventDefault(); // 디폴트 동작을 취소한다.(ex. 링크 이동 차단)
  //체크 박스의 클릭을 취소하는경우 브라우저마다 다른 동작을 한다.
  //그밖에 많에 정보를 포함
}, useCapturing);
```

이벤트 객체에는 흐름제어외에도 많은 유용한 정보를 포함하고 있다. 그 내용은 이벤트 타입에 따라 조금씩 다르다.



### CSS 제어

엘리먼트 객체의 style 어트리뷰트 이용해 CSS를 적용한다.

```javascript
// css 속성을 그대로 사용함
element.style.width = '30px';
element.style.height = '100px';

element.style.display = 'block';
element.style.display = 'none';

// background-color같이 하이픈으로 이어진 속성은 카멜케이스로 변경
element.style.backgroundColor = '#f00';

// border같은 short-hand 속성도 그대로 사용함.
element.style.border = "1px solid red";

// 적용 가능 목록 확인
console.log(element.style);
```



### 엘리먼트에 CSS 아이디 & 클래스 적용

```html
<style>
  .myClass {border:1px solid #f00}
  #myId {padding: 5px}
</style>
```

```javascript
//HTML의 class속성과 동일
element.className = 'myClass';

//다중 적용시 띄어쓰기
element.className = 'myClass1 myClass2';

//아이디도 동일하게 적용가능(다중 적용 X)
element.id = 'myId';
```

- **아이디** 는 **한 개의** 엘리먼트에만 지정이 가능하며 엘리먼트당 **한 개만** 적용된다.
- **클래스** 는 여러 개의 엘리먼트에 적용이 가능하고 한 엘리먼트에 다중 적용이 가능하다.
- 디자인 적용은 **클래스** 를 이용하는것을 추천(재사용)
- 아이디는 엘리먼트를 찾기 위한 식별 용도로만 사용한다.



## TODO 카운팅

### querySelector

```javascript
document.querySelector('.myClass'); // 처음 찾은 한개만 리턴
document.querySelectorAll('.myClass'); // 해당되는 모든 엘리먼트 찾음
```

- element, document 모두 사용가능
- CSS 셀렉터를 이용해 엘리먼트를 찾는다.
- jQuery와 비슷
- 최신브라우저들과 IE8 이상부터 지원



## TODO 삭제하기

### 엘리먼트 노드 속성

DOM상의 엘리먼트들은 트리구조로 서로 연결되어 있다. 그래서 엘리먼트의 노드관련 속성들로 연결되어있는 엘리먼트들을 탐색할 수 있다.

```javascript
element.firstChild // 첫번째 자식
element.lastChild // 마지막 자식
element.parentNode // 부모
element.nextSibling // 다음 형제
element.previousSibling  // 이전 형제
element.childNodes // 자식들을 모두 담고 있는 HTMLCollection
```



## 전체/미완/완료 뷰 구분

### CSS 셀렉터를 이용한 구현

- 완료된 Todo li에는 complete이란 클래스가 추가되도록 작업이 되어 있다.
- Todolist ul에 필요에 따라 hideComplete나 hideIncomplete 클래스를 적용한다.

```html
<style>
  .hideIncomplete li:not(.complete) {display:none}
  .hideComplete li.complete {display:none}
</style>
```

```html
<ul id="todolist" class="hideComplete">
  <li>TODO1</li>
  <li class="complete">TODO2</li>
  <li>TODO3</li>
</ul>
```