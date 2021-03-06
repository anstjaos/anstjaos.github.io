---
title: "[UML Distilled] 1장"
excerpt: "UML Distilled 1장 요약"

categories:
 - Study
tags:
 - UML
 - Study
 - 요약
 - 정리
---



# 1\. UML 소개

## UML이란 무엇인가?

* **UML(Unified Modeling Language)** 은 그래픽 표기법의 집합으로, **단일 메타모델**을 기초로 하고 있으며 소프트웨어 시스템, 특히 객체 지향 소프트웨어 시스템을 **표현하고 설계**하는 것을 도와준다.
* 그래픽 모델링 언어(graphical modeling language)가 등장하게 된 근본적인 이유는 **프로그래밍 언어가 설계에 대한 논의에 도움을 줄 수 있을 만큼 충분히 추상적이지 못하기 때문이다.**



## UML을 사용하는 방법들

소프트웨어 개발에서의 UML의 역할은 사용하기를 원하는 방법이 다양한 것과 마찬가지로 다양하게 인식된다.
이러한 인식의 차이를 해결하기 위해 책의 저자와 스티브 멜러는 UML 사용하는 방식을 **세 가지로 특성화**했다.

### 스케치

* 세 가지 방식 중 **가장 보편적이다.**
* 다른 사람과 **의사소통하는 것을 돕는** 목적으로 UML을 사용한다.
* 스케치는 **순공학** 또는 **역공학**에 사용될 수 있다.
    * **순공학**
        * 코드를 작성하기 전에 UML 다이어그램을 그린다.
    * **역공학**
        * 기존 코드의 이해를 돕기 위해서 UML 다이어그램을 그린다.
* 스케치의 핵심은 **선택성**이다.
* 작성하려고 하는 코드에 대해 모두 이야기하는 것이 아니라 하려고 하는 것에 대한 **아이디어와 대안에 대한 의사 소통**을 돕는 것이다.
* 상당히 자유롭고 동적이므로, 빠른 시간에 협력해서 작성할 필요가 있다.
* 완전한 설계 명세보다는 **선택적인 전달성**을 강조한다.

### 청사진

* 청사진의 핵심은 **완전성**이다.
* **순공학**에서는 코드를 작성할 프로그래머에게 상세한 설게를 만들어 주는 **설계자**가 청사진을 만든다.
* **역공학**에서는 **코드의 상세한 정보**를 문서로 만들어내거나 **그래픽 브라우저상**에 보여 주기 위한 것이다.
`스케치는 탐색적인 반면 청사적은 명시적이다.`

### 프로그래밍 언어

* **시스템 전체가 UML로 표현되는 시점**에 도달한 상태이다.
* 개발자가 UML 다이어그램을 그리면 바로 실행 가능한 코드로 컴파일된다.
* 행동 로직을 모델링하는 세 가지 방법이 있다.
    * 교류 다이어그램
    * 상태 다이어그램
    * 액티비티 다이어그램

### UML을 바라보는 다른 관점

* **소프트웨어 관점(software perspective)**
    * UML 속성이 소프트웨어 시스템의 구성 요소에 아주 잘 대응된다.
* **개념적인 관점(conceptual perspective)**
    * 특정 도메인에 대해서 이야기하는 데 필요한 용어 사전을 구축하는 것이다.
    `UML의 핵심 요소를 보는 관점도 다양하지만, 저자는 메타모델이 UML의 정수라고 생각한다.`



## 표기법과 메타모델

### 표기법

* **모델**에서 볼 수 있는 **그래픽 표현**들을 말한다.
* 모델링 언어의 **구문(syntax)** 에 해당한다.
* 그래픽 모델링 언어는 엄밀성이 매우 떨어진다. 표기법은 공식적인 정의보다는 **직관**에 호소한다.
* 방법론이 비공식적일지라도 중요한 것은 **유용성**이다.

### 메타모델

* 방법론이 유용성이 잃지 않으면서 더 견고해질 수 있는 한 가지 방법이다.
* **언어의 개념을 정의하는 다이어그램**을 말하며 주로 클래스 다이어그램이다.
* 메타모델이 해당 언어의 **추상적인 구문**을 정의한다.

![metamodel](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrwPwlYgoq1lyIf49nHzpJWx_kyHxtYNfn3pVU4fhqc8X4uq1) <br>

**그림 1.1** UML 메타모델 일부



## UML 다이어그램

| 다이어그램                          | 용도                                                       | 유래                      |
| ----------------------------------- | ---------------------------------------------------------- | ------------------------- |
| 액티비티<br>(Activity)              | 순차 행동과 병렬 행동                                      | UML 1                     |
| 클래스<br>(Class)                   | 클래스, 특성, 관계                                         | UML 1                     |
| 커뮤니케이션<br>(Communication)     | 연결에 중점을 둔 객체 간의 교류                            | UML 1의 협력 다이어그램   |
| 컴포넌트<br>(Component)             | 컴포넌트의 구조와 연결                                     | UML 1                     |
| 복합 구조<br>(Composite structure)  | 실행 시의 클래스를 분해                                    | UML 2에서 처음 소개됨     |
| 배치<br>(Deployment)                | 노드에 대한 아티팩트의 배치                                | UML 1                     |
| 교류 개요<br>(Interaction overview) | 시퀀스 다이어그램과<br>액티비티 다이어그램의 혼합          | UML 1                     |
| 객체<br>(Object)                    | 인스턴스 구성의 예                                         | UML 1에 비공식적으로 사용 |
| 패키지<br>(Package)                 | 컴파일 시의 계층적 구조                                    | UML 1에 비공식적으로 사용 |
| 시퀀스<br>(Sequence)                | 순서에 중점을 둔 객체 간의 교류                            | UML 1                     |
| 상태 기계<br>(State machine)        | 객체가 살아 있는 동안<br>이벤트에 의해서 어떻게 변화되는가 | UML 1                     |
| 타이밍<br>(Timing)                  | 타이밍에 중점을 둔 객체 간의 교류                          | UML 2에서 처음 소개됨     |
| 유스케이스<br>(Use case)            | 사용자가 시스템과 어떻게 교류하는가                        | UML 1                     |

![image](https://i.imgur.com/FNdqBki.png)<br>

**그림 1.2** UML 다이어그램 타입의 분류

## 적법한 UML이란 무엇인가?

UML이 **규범적인 규칙**을 가지고 있는가? **기술적인 규칙**을 가지고 있는가?

* **규범적인 규칙(prescriptive rules)**
    * 무엇이 적법하고 무엇이 그렇지 않은지, 이 언어가 표현할 수 있는 의미는 무엇인지 정해져있다.
* **기술적인 규칙(descriptive rules)**
    * 실제 사람들이 언어를 어떻게 사용하는지를 보고 규칙을 이해하는 언어다.

`프로그래밍 언어는 표준 협의회나 독도적인 제조사에 의하여 만들어진 규범적 규칙을 가지고 있는 경우가 많지만, 영어와 같은 일반 언어들은 관례에 의해 의미가 부여되는 기술적인 규칙을 가진다.`

* UML은 규범적인 규칙을 가지고 있을 것이라고 생각되지만 그렇지 않다.
* **UML 표준이 UML에 대한 정보의 가장 중요한 원천이지만 유일한 것일 수는 없다.**
* UML의 기본적인 원칙은 **다이어그램에 따라서 어떤 정보는 감춰져 있을 수 있다**는 것이다.
* UML을 **스케치용**이나 **청사진**을 만드는 용도로 사용하는 사람들에게 **적법한 UML 사용을 지나치게 강조하지 않는 것**이 중요하다.
* 시스템에 대해서 더 좋은 설계를 하는 것이 훨씬 더 중요하므로, 저자는 **적법하지 않지만 좋은 설계**가 낫다고 생각한다.



## 그 외

* UML 다이어그램을 보고 그것과 동등한 코드가 어떻게 될 것인지를 정확하게 말할 수가 없다.
* 코드가 어떻게 될 것인지에 대해서 **개략적인 아이디어**를 얻을 수 있다.
* UML은 여러 가지 다이어그램을 꽤 많이 제공하지만, **필요한 다이어그램들을 모두 포함하고 있는 것은 절대로 아니다.**
* UML 다이어그램 중에 목적에 맞는 것이 없다면 UML이 아닌 다이어그램을 쓰는 것을 주저하지 말자.