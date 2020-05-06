---
title: "[UML Distilled] 15장"
excerpt: "UML Distilled 15장 요약"

categories:
 - Study
tags:
 - UML
 - Study
 - 요약
 - 정리
---



# 15장. 협력

* 협력에서 클래스라고 불리는 것은 실제로 클래스가 아니라 **역할(role)** 이다.
* 클래스에서 협력으로 연결된 링크는 클래스들이 협력에서 정의된 여러 가지 역할을 어떻게 수행하는지를 나타낸다.

![15.1.png](https://i.imgur.com/7PACrrG.png)<br>

<i>**그림 15.1** 역할을 명시한 협력</i>

![15.2.png](https://i.imgur.com/NxJQTDo.png)<br>

<i>**그림 15.2** 경매 협력에 대한 시퀀스 다이어그램</i>

![15.3.png](https://i.imgur.com/R1vEOPy.png)<br>

<i>**그림 15.3** 협력 사건</i>

![15.4.png](https://i.imgur.com/9quHnQ3.png) <br>

<i> **그림 15.4** JUnit 내에서 패턴 사용을 나타내는 비표준적인 방법([junit.org](http://junit.org))</i>



## 언제 협력을 사용하는가

* 협력은 서로 다른 클래스들이 여러 가지 역할을 수행할 때 교류 행동을 묶는 방법이다.