---
title: "헬스 서비스 개발일지 #4"
excerpt: "Milestone #1 회고록"

categories:
  - Development
tags:
  - Study
  - 개발 일지
  - 헬스 서비스

---



1차 마일스톤을 끝냈다.

이번 마일스톤의 내용은

* 개발 DB 환경 세팅
* API Spec 설계
* Entity 클래스들 생성 + 테스트
* User REST API 구현

이였다.



사실 다른 부분은 크게 문제될 건 없었지만, DB Unit 테스트하는데 애를 많이 먹었다.

분명히 application.yml 파일 정의도 제대로 하고, xml 파일도 제대로 정의했는데 테스트 DB 값을 읽어오지 못했다.

이 부분 때문에 거의 3시간은 넘게 날린것 같다.



알고보니... pom.xml에 디펜던시를 하나 빼먹어서 생겨난 문제였다.

``` xml
<dependency>
			<groupId>org.dbunit</groupId>
			<artifactId>dbunit</artifactId>
			<version>2.6.0</version>
			<scope>test</scope>
</dependency>
```



위의 디펜던시를 추가하니깐 바로 되었다...

괜히 쓸데없이 DataSource Configuration도 추가하고 삽질을 많이 했다.

그래도 원인을 찾아서 해결했으니 만족한다.



다음 2차 마일스톤에는 IOS APP 기본 구성을 만들고, REST API도 좀 더 구현해야겠다. :+1: