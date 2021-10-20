---
title: "헬스 서비스 개발일지 #2"
excerpt: "요구사항 분석 및 DB 설계"

categories:
  - Development
tags:
  - Study
  - 개발 일지
  - 헬스 서비스

---



지난 포스트에 이어서 헬스 서비스 관련 포스트를 작성한다.

저번에는 대략적인 개요를 작성했다면 이번에는 내가 사용자의 입장이 되었을 때 요구 사항과 그것을 반영한 DB 설계를 진행하겠다.



## 요구 사항

사실... 초기에는 나혼자만이 사용하는 서비스여서 일단 나의 입장만을 고려해보려고 한다.



### 회원 관리

사실 혼자만 사용을 한다면 회원이라는 개념은 필요없다.

하지만, 혹시나하는 서비스 오픈을 위해서 회원 관리가 필요할 것 같아서 추가하였다.

회원 관리 안에 기능들은 

* 회원 가입
* 회원 정보 수정
* 회원 정보 조회
* 로그인
* 로그아웃
* 회원 탈퇴

정도가 있겠다.

회원 정보는 광범위하게 다룰 것이 아니라 아이디, 닉네임, 비밀번호, 이메일(?) 정도로만 구성하려고 한다.



### 운동 관리

자신이 했던 운동을 관리하는 서비스다 보니 가장 중요한 부분이 아닐까 싶다.

기능들은

* 운동 등록 (템플릿)
* 운동 수정
* 운동 조회
* 운동 삭제
* 수행한 운동 등록
* 수행한 운동 수정
* 수행한 운동 조회
* 수행한 운동 삭제

가 있다.

*여기서* 기본적인 운동(템플릿)은 관리자가 등록한 운동 타입(밀기, 당기기, 유산소...)와 운동 부위(가슴, 등, 하체..)를 설정하여 템플릿을 의미한다.

사용자별로 자신이 하고자하는 운동, 혹은 이미 등록된 운동을 수행하고 언제, 몇 개, 몇 세트를 했는 지를 등록, 수정, 조회, 삭제할 수 있는 기능이 필요할 것 같다.



### 루틴 관리

사람마다 요일별로 정해진 운동 루틴이 있을 건데 이를 위한 루틴 관리가 있다.

기능은

* 루틴 등록
* 루틴 수정
* 루틴 조회
* 루틴 삭제

가 있다.

루틴 조회 같은 경우는 좀 더 세밀적인 조회(내가 등록한 것만, 전체 등록된 것들) 조건이 필요하지만 일단 뭉뚱그려서 조회라고 표현하였다.

사용자가 요일별로 루틴을 설정하면 나중에 스케쥴표? 캘린더에 등록한 해당 루틴이 뜨고, 이를 수행할 수 있게 할 예정이다.



---



대략적으로 크게 봤을 땐 위의 3가지 관리 기능이 전부일 것 같다.

그 외에 운동 부위, 운동 타입의 경우에는 관리자가 별도로 등록하는 것으로 생각 중이다.

만약, 서비스를 오픈한다면 QnA 기능이 추가돼야 하지만,, 일단 고려하지 않겠다.



이를 반영한 DB 설계는 다음과 같다.

![image](https://user-images.githubusercontent.com/37808594/119779111-43e7bd80-bf03-11eb-82de-a3df1a4e2b5c.png)

딱히 설명할 부분은 없는 것 같다..

굳이 꼽자면 `User` 테이블에서 `user_id` 를 PK로 설정하지 않은 점과 비밀번호를 SHA-256으로 해싱처리 한다는 점? 말고는 없는거 같다.



### 앞으로 할일...

이제 대략적인 기능들이 나왔으니 REST API 설계를 해야겠다.  😀👍
