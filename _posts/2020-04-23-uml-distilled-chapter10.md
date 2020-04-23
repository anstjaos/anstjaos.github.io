---
title: "[UML Distilled] 10장"
excerpt: "UML Distilled 10장 요약"

categories:
 - Study
tags:
 - UML
 - Study
 - 요약
 - 정리
---



# 10장. 상태 기계 다이어그램

* **상태 기계 다이어그램(State Machine Diagram)** 은 시스템의 행동을 기술하는 잘 알려진 기술이다.
* 객체 지향적인 접근 방법에서는 단일 객체가 활성인 시간 동안 어떤 행동을 하는지 나타내기 위해서 그린다.

![10.1.png](https://i.imgur.com/23sCcXn.png)
<br><i>**그림 10.1** 간단한 상태 기계 다이어그램</i>
<br>

* 상태 다이어그램은 객체가 생성되었을 때의 상태에서 시작한다.
* **초기 의사 상태(initial pseudostate)** 는 실제의 상태는 아니지만 초기 상태를 가리키는 화살표를 가지고 있다.
* **전이(transition)** 는 한 상태에서 또 다른 상태로의 이동을 나타낸다.
* 모든 전이는 3부분으로 이루어진 레이블을 가지고 있다.
    * 레이블의 형태는 **트리거-서명 [가드] / 액티비티**의 형태이다.
    * 전이 표기법의 세 부분은 모두 선택 사항이다.
    * **트리거-서명(trigger-signature)** 은 상태의 변화를 유발할 수 있는 단일 이벤트이다. 트리거-서명이 없는 경우는 전이가 즉시 일어나는 것을 의미한다.
    * **가드(guard)** 는 트랜지션이 이루어지기 위해서 만족해야하는 부울린(Boolean) 조건이다. 가드가 없는 것은 이벤트가 일어나면 무조건 전이가 일어난다는 것이다.
    * **액티비티(activity)** 는 전이 동안 수행되는 어떤 행동이다. 액티비티가 없는 것은 전이 동안 아무 일도 하지 않는 것을 의미한다.
* 어떤 상태에서 이벤트가 발생하면, 상태에서부터 나가는 방향의 전이 중 **하나만을** 취할 수 있다.
* 같은 이벤트에 대한 여러 개의 전이가 있다면, 가드가 **상호 배제(mutually exclusive)** 여야만 한다.
* 이벤트가 발생했는데도 유효한 전이가 하나도 없다면 이벤트는 무시된다.
* **최종 상태(final state)** 는 상태 기계가 끝났음을 의미하며, 객체가 삭제되는 것을 암시한다.
* 상태 기계는 객체가 직접 관찰하거나 작동시키는 것만을 보여줄 수 있다.



## 내부 액티비티

* 어떤 상태에서 이벤트가 발생했을 때 전이 없이 반응할 수 있다. 이때 **내부 액티비티(internal activity)** 를 사용한다.

![10.2.png](https://i.imgur.com/CJ7HfvP.png)
<br><i>**그림 10.2** 테스트 필드 입력 상태에서 생길 수 있는 내부 이벤트</i>
<br>

* 내부 액티비티는 **자기-전이(self-transition)** 과 유사하다. 자기-전이란 같은 상태로 돌아오는 전이이다.
* **입장 액티비티(entry activity)** 는 상태에 들어올 때, **퇴장 액티비티(exit activity)** 는 상태를 떠날 때 수행된다.



## 활동 상태

* 객체가 무엇인가 작업을 하고 있는 상태를 **활동 상태(activity state)** 라고 한다. **do-액티비티**라는 용어를 쓴다.

![10.3.png](https://i.imgur.com/iUJiErx.png)

<br><i>**그림 10.3** 활동 상태</i>

* do-액티비티와 일반 액티비티는 모두 어떤 행동을 수행하는 것을 나타낸다. 이 둘의 중대한 차이는 일반 액티비티가 **"순간적으로"** 일어나며 일반 이벤트에 의해서 **멈출 수 없는 것**에 비해서 do-액티비티는 **일정한 시간** 동안 일어나며 **멈출 수 있다.**



## 상위 상태

![10.4.png](https://i.imgur.com/KekHZi1.png)
<br><i>**그림 10.4** 하위 상태를 포함하는 상위 상태</i>

* 몇 개의 상태가 공통적인 전이와 내부 액티비티를 공유한다.



## 동시 상태

![10.5.png](https://i.imgur.com/Mh6CrFE.png)
<br><i>**그림 10.5** 동시 직교 상태</i>

* 상태들은 동시에 진행되는 몇 개의 직교 상태(orthogonal state) 다이어그램으로 나누어질 수 있다.
* **과거 의사 상태(history pseudostate)** 에서 나가는 화살표는 최초의 내역이 없을 때 가는 상태를 가리킨다.



## 상태 다이어그램의 구현

* 상태 다이어그램은 크게 세 가지 방법으로 구현될 수 있다. **내장 스위치(nested switch), 상태 패턴(state pattern), 상태 표(state table)** 이다.

``` java
public void HandleEvent(PanelEvent anEvent) {
    switch (CurrentState) {
        case PanelState.Open :
            switch (anEvent) {
                case PanelEvent.SafeClosed :
                    CurrentState = PanelState.Wait;
                break;
            }
            break;
        case PanelState.Wait :
            switch (anEvent) {
                case PanelEvent.CandleRemoved :
                    if (isDoorClosed) {
                        RevealLock();
                        CurrentState = PanelState.Lock;
                    }
                break;
            }
            break;
        case PanelState.Lock :
            switch (anEvent) {
                case PanelEvent.KeyTurned :
                    if (isCandleIn) {
                        OpenSafe();
                        CurrentState = PanelState.Open;
                    } else {
                        ReleaseKillerRabbit();
                        CurrentState = PanelState.Final;
                    }
                    break;
            }
            break;
    }
}
```

<i>**그림 10.6** 그림 10.1의 상태를 구현하는 C# 내장 스위치 구문 예</i>

* **내장 스위치** 구문은 직접적이기는 하나 이렇게 단순한 경우에 대해서도 너무 장황하다.

![10.7.png](https://i.imgur.com/Nl2Dwhh.png)
<br><i>**그림 10.7** 그림 10.1을 상태 패턴으로 구현한 예</i>

* **상태 패턴(state pattern)** 은 상태의 행동을 다루기 위해서 상태 클래스의 계층 구조를 만들어낸다.
* 컨트롤러는 각각의 이벤트에 대해서 메소드를 가지고 있으며, 이것은 단순히 상태 클래스로 보내진다.
* 계층 구조의 맨 위에는 아무 것도 하지 않는 이벤트 처리 메소드를 구현하는 **추상 클래스**가 있다.

<i>**표 10.1** 그림 10.1에 대한 상태 표</i>

| 현재 상태 | 다음 상태 | 이벤트        | 가드                 | 프로시저          |
| --------- | --------- | ------------- | -------------------- | ----------------- |
| 대기      | 잠김      | 양초가 옮겨짐 | 문이 닫혀 있음       | 자물쇠를 드러낸다 |
| 잠김      | 열림      | 열쇠를 돌림   | 양초가 제자리에 있음 | 금고를 연다       |
| 잠김      | 최종      | 열쇠를 돌림   | 양초가 제자리에 없음 | 자물쇠를 내보낸다 |
| 열림      | 대기      | 금고가 닫힘   |                      |                   |

* **상태 표(state table)** 는 상태 다이어그램 정보를 데이터로 여긴다.



## 언제 상태 다이어그램을 사용하는가

* 상태 다이어그램은 몇 개의 유스 케이스에 걸쳐진 객체의 행동을 묘사하는 데 좋다.
* 많은 객체들이 협력해서 이루어지는 행동을 설명하는 데에는 그다지 좋지 않다.