---
title: "JPA 페치 조인"
excerpt: "JPA fetch join"

categories:
  - JPA
tags:
  - Study
  - 개인공부
  - JPA

---

# JPQL - Fetch Join

### **실무에서 엄청 중요함**



## 페치 조인(fetch join)

* SQL 조인 종류 X
* JPQL에서 **성능 최적화**를 위해 제공하는 기능

* 연관된 엔티티나 컬렉션을 **SQL 한 번에 함께 조회**하는 기능
* join fetch 명령어 사용



## 엔티티 페치 조인

* 회원을 조회하면서 연관된 팀을 함께 조회(SQL 한 번에)
* SQL을 보면 회원 뿐만 아니라 **팀(T.*)**도 함께 **SELECT**
* **[JPQL]**
  select m from Member m **join fetch** m.team
* **[SQL]**
  SELECT M.*, **T.\*** FROM MEMBER M
  **INNER JOIN TEAM T **ON M.TEAM_ID=T.ID



## 페치 조인 사용 코드

```java
String jpql = "select m from Member m join fetch m.team";
List<Member> members = em.createQuery(jpql, Member.class).getResultList();

// 페치 조인으로 팀을 같이 조회해서 지연 로딩 X
members.forEach(m -> "username = " + m.getUsername() + ", " + "teamName = " + m.getTeam().getName());
```

username = 회원1, teamName = 팀A

username = 회원2, teamName = 팀A

username = 회원3, teamName = 팀B



## 컬렉션 페치 조인

* 일대다 관계, 컬렉션 페치 조인

* **[JPQL]**
  select t
  from Team t **join fetch t.members**

  where t.name = '팀A'

* **[SQL]**
  SELECT T.*, **M.\***
  FROM TEAM T
  INNER JOIN MEMBER M ON T.ID=M.TEAM_ID
  WHERE T.NAME = '팀A'



## 페치 조인과 DISTINCT

* SQL의 DISTINCT는 중복된 결과를 제거하는 명령
* JPQL의 DISTINCT 2가지 기능 제공
  1. SQL에 DISTINCT를 추가
  2. 애플리케이션에서 엔티티 중복 제거
* select **distinct** t
  from Team t join fetch t.members
  where t.name = '팀A'
* SQL에 DISTINCT를 추가하지만 데이터가 다르므로 SQL 결과에서 중복 제거
* DISTINCT가 추가로 애플리케이션에서 중복 제거 시도
* 같은 식별자를 가진 **Team 엔티티 제거**



## 페치 조인과 일반 조인의 차이

* 일반 조인 실행 시 연관된 엔티티를 함께 조회하지 않음
* **[JPQL]**
  select t
  from Team t join t.members m
  where t.name = '팀A'
* **[SQL]**
  SELECT **T.\***
  FROM TEAM T
  INNER JOIN MEMBER M ON T.ID=M.TEAM_ID
  WHERE T.NAME = '팀A'
* JPQL은 결과를 반환할 때 연관관계 고려 X
* 단지 SELECT 절에 지정한 엔티티만 조회할 뿐
* 여기서는 팀 엔티티만 조회하고, 회원 엔티티는 조회 X
* 페치 조인을 사용할 때만 연관된 엔티티도 함께 **조회 (즉시 로딩)**
* **페치 조인은 객체 그래프를 SQL 한번에 함께 조회하는 개념**