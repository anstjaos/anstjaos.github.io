---
title: "JPA 로딩"
excerpt: "즉시 로딩과 지연 로딩"

categories:
  - JPA
tags:
  - Study
  - 개인공부
  - JPA
---



# 즉시 로딩과 지연 로딩

* 즉시 로딩 : **FetchType.EAGER**
* 지연 로딩 : **FetchType.LAZY**



## 프록시와 즉시로딩 주의

* **가급적 지연 로딩만 사용(특히 실무에서)**
* 즉시 로딩을 적용하면 예상치 못한 SQL이 발생
* **즉시 로딩은 JPQL에서 N+1 문제를 일으킨다.**
* **@ManyToOne, @OneToOne은 기본이 즉시 로딩 -> LAZY로 설정**
* @OneToMany, @ManyToMany는 기본이 지연 로딩



## 지연 로딩 활용 - 실무

* **모든 연관관계에 지연 로딩을 사용해라!**
* **실무에서 즉시 로딩을 사용하지 마라!**
* JPQL fetch 조인이나, 엔티티 그래프 기능을 사용해라!
* 즉시 로딩은 상상하지 못한 쿼리가 나간다.