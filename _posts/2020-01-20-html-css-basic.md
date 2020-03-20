---
title: "HTML/CSS Basic"
excerpt: "HTML과 CSS 기본"

categories:
 - Study
tags:
 - Web
 - HTML
 - CSS
---

#### 출처: NHN 기술교육 - HTML/CSS (성슬기 선임님/최민호 선임님)

## 01. HTML 기본 구조와 영역을 나누는 Element

### 웹의 구성요소

### HTML

- 구조와 내용을 잡는 역할
- HTML 문서에 대한 정보
- 내용을 서술하고 정의



### CSS

- 모양과 표현을 잡는 역할
- 모양을 추가하거나 변경
- 디자인을 입히는 개념



### Javascript

- 기능과 액션
- HTML 문서 안의 동작을 추가



### 웹 제작 시 고려사항 

### 웹 표준

- W3C에서 권고한 표준 지키기
- 웹 접근성
  - 물리적 또는 인적 환경에 제약 없는 접근성
  - 마우스 또는 키보드가 없는 환경
  - 시각적으로 문제가 있는 상황
- 웹 호환성
  - 브라우저 버전, 종류에 관게없는 접근성



## 02 HTML 엘리먼트 구성 요소

#### <h1 class ="foo">News</h1>

- 여는 태그
- 어트리뷰트
- 내용
- 닫는 태그 



### DOCTYPE

- 항상 써줘야 한다.



### html

- html 전체를 감싸는 태그
- lang 속성
  - 웹 접근성을 준수하기 위함
  - 검색(SEO)과 음성장치에서 활용



### head

- html 문서에 대한 정보를 나타내는 태그



### meta

- **문서에 대한 정보** 요약
  - 인코딩, 저자, 대표 이미지 등
- 사용자에게 보이지 않음
- 인코딩 설정 - <meta charset="UTF-8">
- IE 호환성
- Viewport 설정 미디어쿼리 사용
- Open Graph Protocol
  - 페이스북에서 만든 meta tag
  - 페이지에 대한 요약 정보



### title

- 문서의 제목을 나타내는 태그



### body

- 문서에서 사용자에게 보이는 부분



### p 태그

- paragraph의 약자로 일반적인 텍스트의 **단락을 표현**



### ol, li 태그

- 계층구조(리스트)를 표현
- ol: **순서 있는 리스트**



### ul, li 태그

- ul: **순서 없는 리스트**



### strong, em 태그

- 강조 표현
- strong : 강조, em : 기울이기



### blockquote 태그

- 인용구 표현



### pre, code 태그

- pre : 미리 지정된 서식 그대로 표현
- code : monospace 글꼴로 표현 (모든 글짜 너비가 같다. 코드 표현이 좋다)



### a 태그

- 하이퍼링크를 표현
- href : 이동할 주소
- target : 페이지 이동 방식



### img 태그

- 이미지 넣어줌
- src : 이미지 경로
- alt : 이미지가 보이지 않을 때 텍스트



### div 태그

- Division의 약자로 영역을 나눌 때 사용
- display 속성이 block



## 03 Semantic Element

#### 의미를 가진 Element

div와 같은 역할

- 개발자 가독성이 좋아짐
- 검색 엔진이 논리적으로 필요한 부분을 찾기 쉬움



| Tag 명  | 역할                                                         |
| ------- | ------------------------------------------------------------ |
| main    | 문서의 주요 콘텐츠를 포함, 문서 내에 단 하나만 존재          |
| header  | 문서 소개나 탐색을 돕는 것의 그룹                            |
| nav     | 현재 페이지 내, 또는 다른 페이지로의 링크                    |
| aside   | 주요 내용과 간접적으로만 연관된 부분                         |
| section | 문서의 일반적인 구획                                         |
| footer  | 문서의 푸터 부분 작성자 구획, 저작권 데이터, 관련된 문서의 링크에 대한 정보 |
| figure  | 문서의 멀티미디어 요소                                       |
| article | 글자가 많이 들어가는 부분                                    |



## 04 CSS 기본 구조와 셀렉터

### CSS

- Cascading Style Sheet



### CSS의 구성요소

셀렉터

div, p {

​	color: sky-blue;

}



### CSS 적용 방법

- Inline
  - 각 태그마다 스타일을 모두 적어야 하므로 **관리가 쉽지 않음**
  - 우선순위가 가장 높기 때문에 **상속 면에서 좋지 않음**
- Embedded
  - heade 안에 style로 감싸서 넣음
  - **CSS가 간단한 페이지인 경우 사용**
- External
  - 별도의 CSS 파일로 분리
  - **가장 일반적인 방법**



### CSS 셀렉터

CSS를 적용할 요소를 지칭

html에서 id는 Unique하게 사용한다.

class는 별명



### CSS ID 셀렉터

- id값 앞에 #을 붙여서 선택
- 우선순위 때문에 **쓰지 않는게 좋음**



### CSS 속성 셀렉터

- 대괄호 안에 속성명="값" 형태로 사용



### CSS 유사 엘리먼트 셀렉터

- 보관함 row 이미지 삽입 시 사용



### CSS 우선순위

- 하나의 엘리먼트에 여러 가지 셀렉터 적용 가능

- 클래스 셀렉터 > 태그 셀렉터

  ``` css
  .title {
      color: red;
  }
  
  main.title {
      color: green;
  }
  ```

  

## CSS 박스 모델과 Flexible 박스

### CSS 박스 모델

- CSS 레이아웃에 기본이 되는 개념
- 브라우저가 엘리먼트를 렌더링 할 때 참고하는 값



### CSS 박스 모델 - 구성요소

- Margin : 바깥 여백
- Border : 테두리
- Padding :  안쪽 여백
- Content : 내용



### CSS 박스 모델 - width, height

``` html
<div class="box"></div>
```

``` css
.box {
    width: 250px;
    height: 300px;
}
```



### CSS 박스 모델 - margin

- 엘리먼트의 **바깥 여백**을 지정



### CSS 박스 모델 - padding

- 엘리먼트의 **안쪽 여백**을 지정



### CSS 박스 모델 - border

- 엘리먼트의 **테두리** 지정



### CSS display

- 엘리먼트를 **블록과 인라인** 중 어느 쪽으로 처리할지 결정



### CSS Flexible 박스

- 유연하게 조정한다는 뜻의 **html5의 새로운 display 속성**
- **모든 모던브라우저**에서 지원
- 성능면에서도 이전 레이아웃 모델과 비교해서 렌더링 시간이 발라짐



## 05 가로 정렬과 세로 정렬

### 가로 / 세로 정렬

- block과 inline 정렬 방법이 다르다



### inline의 세로 정렬

- 줄을 부모와 같이 맞추면 텍스트가 가운데 정렬된다.



### Flex 가로 / 세로 정렬

#### justify-content

- flex-direction과 같은 방향으로 정렬

#### align-items

- flex-direction과 수직 방향으로 정렬



## 06 포지션과 오버플로우 속성

### text-overflow

- 텍스트가 부모요소를 벗어났을 때 사용
- 말줄임 표시를 위해 사용
- overflow: hidden과 white-space: nowrap을 같이 써야함.



### z-index

- 어떤게 화면의 가장 위로 올라갈 것인지 결정
- position 속성이 static이 아닌 다른 값으로 설정돼 있어야 함



## 07 글자 속성

### 글자 크기 표현 단위

브라우저의 기본값은 12pt, 16px

| 단위   | 설명                            |
| ------ | ------------------------------- |
| px     | 화소 단위                       |
| em     | 부모 요소의 글자 크기 기준 배율 |
| rem    | HTML 글자 크기 기준 배율        |
| pt     | 글꼴에 많이 쓰임                |
| %      | 기본 글꼴의 상대적인 크기       |
| vw, vh | 뷰포트 기준 너비, 높이          |



### font 적용하기

#### 글자에 적용할 수 있는 속성

| 속성        | 설명                            | 값                                            |
| ----------- | ------------------------------- | --------------------------------------------- |
| font-style  | 화소 단위                       | Normal \| italic \| oblique                   |
| font-weight | 부모 요소의 글자 크기 기준 배율 | lighter \| normal \| bold \| bolder \| 1- 100 |
| font-size   | HTML 글자 크기 기준 배율        | <숫자><단위>                                  |
| font-family | 글꼴에 많이 쓰임                | 글꼴 이름                                     |
| line-height | 기본 글꼴의 상대적인 크기       | normal \| <숫자> \| <숫자><단위>              |

