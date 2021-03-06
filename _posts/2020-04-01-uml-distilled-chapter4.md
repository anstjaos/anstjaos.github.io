---
title: "[UML Distilled] 4장"
excerpt: "UML Distilled 4장 요약"

categories:
 - Study
tags:
 - UML
 - Study
 - 요약
 - 정리
---



# 4장. 시퀀스 다이어그램

* **교류 다이어그램(Interaction diagram)** 은 어떤 행동 안에서 객체 그룹들이 어떻게 협력하는지를 설명한다. 그 중 가장 많이 쓰이는 것이 **시퀀스 다이어그램**이다.
* 시퀀스 다이어그램은 한 가지 시나리오에 대한 행동을 묘사한다.



![4.1](https://i.imgur.com/HY1J7qD.png)<br>

<i>**그림 4.1** 중앙 집중형 제어를 나타내는 시퀀스 다이어그램</i>



* 시퀀스 다이어그램에서 참가자를 표현하는 완전한 문법은 **이름 : 클래스**이다.
* 각각의 **생명선(lifeline)** 은 교류에서 참가자가 언제 활성한지를 보여주는 **활성 막대(activation bar)** 를 가지고 있다.
* 실선으로 표시된 부분은 **리턴 화살표**이다. 추가적인 정보를 줄 경우에만 사용하는 것이 좋다.
* 첫 번째 메시지는 확인되지 않은 소스에서 오기 때문에 **발견된 메시지(found message)** 라고 불린다.



![4.2](https://i.imgur.com/P2tXEX9.png)<br>

<i>**그림 4.2** 분산 제어를 나타내는 시퀀스 다이어그램</i>



* 그림 4.1과 4.2는 서로 다른 접근 방법을 나타낸다.
* 두 다이어그램을 볼 때 주목해야하는 부분은, 시퀀스 다이어그램이 **참가자들이 교류하는 방법의 차이**를 아주 분명히 나타내고 있다는 것이다.
* 교류 다이어그램은 **루프나 조건문을 나타내기는 힘들지만, 참가자들 사이의 호출**을 아주 명확하게 보여주며 **어떤 참가자가 어떤 일을 수행**하고 있는지를 아주 잘 나타낸다.
* **그림 4.1**은 **중앙 집중형(centralized control)** 로서 한 참가자가 거의 모든 처리를 하고 다른 참가자들은 데이터를 제공한다.
* **그림 4.2**는 **분산 제어(distributed control)** 를 사용하므로 처리 작업이 **여러 참가자에게 분산**되어 각각의 참가자는 **전체 알고리즘의 작은 부분만 수행**한다.
* 좋은 설계의 목표 중 하나는 **변경의 영향을 최소화**하는 것이다.
* 따라서 **분산 제어** 방식을 선호한다.



## 참가자의 생성과 삭제

![4.3](https://i.imgur.com/ejXU93J.png)<br>

<i>**그림 4.3** 참가자의 생성과 삭제</i>



* 참가자를 **생성**하려면, 참가자 상자를 향하여 메시지 화살표를 직선으로 그린다.
* 참가자의 **삭제**는 큰 X 표로 표시한다.



## 루프, 조건문 등등

* 시퀀스 다이어그램은 **루프**와 **조건문**을 표현하는데 좋지 않다.
* 루프와 조건문은 **교류 프레임(interaction frame)** 을 사용한다.

![4.4](https://i.imgur.com/n2xjKcu.png)<br>

<i>**그림 4.4** 교류 프레임</i>



| 연산자 | 의미                                                         |
| ------ | ------------------------------------------------------------ |
| alt    | 선택적 : 여러 개의 부분 중 조건에 만족하는 단 한 개만 실행된다. |
| opt    | 부가적 : 주어진 조건이 참일 때만 실행된다.                   |
| par    | 병렬 : 각각의 부분이 병렬로 실행된다.                        |
| loop   | 루프 : 여러 번에 걸쳐 실행된다. 반복의 조건이 가드에 명시된다. |
| region | 크리티컬 영역 : 한 번에 한 스레드만 이 부분을 실행할 수 있다. |
| neg    | 무의미한 : 의미 없는 교류를 가진 부분이다.                   |
| ref    | 참조 : 다른 다이어그램에 정의된 부분을 참조한다. 교류에 포함되는<br>생명선들을 덮도록 프레임을 그린다. 매개변수와 리턴값을 정의할 수도 있다. |
| sd     | 시퀀스 다이어그램 : 원할 경우, 시퀀스 다이어그램 전체를 둘러쌀 때 사용한다. |

<i>**표 4.1** 교류 프레임에 사용하는 일반적 연산자</i>



## 동기 호출과 비동기 호출

* **동기 메시지(synchronous message)**
    * 내부가 채워진 화살표 머리를 사용한다.
    * 서브루틴을 호출하는 것처럼 메시지가 끝날 때까지 기다린다.
* **비동기 메시지(asynchrounous message)**
    * 선으로만 그려진 화살표 머리를 사용한다.
    * 호출하는 쪽이 응답을 기다릴 필요 없이 처리를 계속할 수 있다.
    * **더 나은 응답성(responsiveness)** 를 주며 **일시적인 결합(temporal coupling)** 을 줄이지만, 디버그는 더 어렵다.



## 언제 시퀀스 다이어그램을 사용하는가

* 하나의 유스 케이스 내에서 여러 객체의 행동을 보고 싶을 때 사용한다.
* 객체 간의 협력을 보여주는 데에는 좋지만, 행동의 정의를 자세히 나타내는 데에는 적합하지 않다.