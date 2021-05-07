---
title: "Docker를 활용하여 젠킨스를 띄워보자!"
excerpt: "로컬 서버에 Jenkins 띄우기"

categories:
  - Development
tags:
  - Study
  - 개인공부
---



# Docker를 활용하여 로컬 서버에 젠킨스를 띄워보자!

혼자 이것저것 끄적이다가 문득 Jenkins 서버를 구축하고 싶어졌다.

Jenkins를 이용해 `.jar` 파일을 생성하고, 이를 shell을 이용하여 애플리케이션을 실행시킬 수 있지만, 이번엔 도커를 이용하여 도커 컨테이너를 띄워보려고 한다.



## 젠킨스 설치

 젠킨스를 도커 컨테이너 방식으로 설치하고 실행한다.

로컬 서버에 다음과 같은 명령어를 실행한다.

```sh
# 1. 젠킨스 도커 이미지 다운로드
docker pull jenkins/jenkins:lts
# 2. 젠킨스 실행
docker run -d \
 -p 8282:8080 \
 -v /var/jenkins_home:/var/jenkins_home \
 --name jenkins -u root jenkins/jenkins:lts
```

이 후 웹 브라우저로 접속하면 다음과 같은 화면을 볼 수 있다.

![jenkins1](https://user-images.githubusercontent.com/37808594/117401388-76734b80-af3f-11eb-8cb5-cf53b7b794a0.png)

빨간 글씨로 적힌 경로로 이동하여 Admin 비밀번호를 얻어오자

```sh
cd /var/jenkins_home/secrets
cat initialAdminPassword
```

비밀번호를 복사 붙여넣기하면 다음과 같은 화면을 볼 수 있다.

![jenkins2](https://user-images.githubusercontent.com/37808594/117401392-78d5a580-af3f-11eb-8013-4ce4e6e5e69d.png)

인내의 시간... 😴

![jenkins3](https://user-images.githubusercontent.com/37808594/117401394-796e3c00-af3f-11eb-88f0-ed11641da612.png)



조금만 버티면 다음과 같이 Admin 계정 생성을 위한 화면을 볼 수 있다.

![jenkins4](https://user-images.githubusercontent.com/37808594/117401396-7a06d280-af3f-11eb-8869-6d9ebb2a5dcc.png)

Admin 계정을 생성해주면....

짜잔 👏 젠킨스 서버를 구축하였다. 👍

![jenkins5](https://user-images.githubusercontent.com/37808594/117401399-7b37ff80-af3f-11eb-81b2-0066c84edd9a.png)

