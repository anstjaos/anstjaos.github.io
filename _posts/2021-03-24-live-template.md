---
title: "IntelliJ Live Template"
excerpt: "Live template 설정 방법"

categories:
  - Development
tags:
  - Study
  - 개인공부
  - Tip
---



## Live Template

최근 TDD를 공부하던 중 매번 똑같은 틀의 메소드를 정의하는게 귀찮아졌다.

```java
@Test
public void test() {
  // given
  
  // when
  
  // then
}
```

그러다 Intellij에서 제공하는 Live Template이라는 기능을 알게 되어서 유용하게 사용하고 있다.



Live Template 설정 방법은 다음과 같다.

1. 먼저 `⌘ + ,` 를 입력하여 `Preferences` 로 들어간다.

2. 좌측 상단 검색창에 `Live Template`을 검색한다.
3. 우측에 `+` 기호를 선택하여 `Template Group` 을 추가한다.
4. 그후 다시 `+` 기호를 선택하여 원하는 Template을 추가한다.



나의 경우 위의 코드를 `tdd` + `tap` 을 이용해서 사용 중인데, 아주 간편하고 좋다. 👍 