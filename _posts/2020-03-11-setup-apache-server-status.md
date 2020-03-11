---
title: "Apache server status 접근 권한 설정"
excerpt: "웹 애플리케이션 배포 시 server-status 접근 권한 설정"

categories:
 - Basecamp
tags:
 - NHN
 - Basecamp
 - Apache
 - Web
---



## Apache server status 접근 권한 설정



### 문제

웹 애플리케이션을 톰캣과 아파치에 배포 후 구동하면 정상적으로 동작하였다.

그러나 한 가지 문제점을 발견하였다.

http://<DOMAIN>/server-status에 접근 시 다음과 같은 화면이 출력되었다.

![img](https://i.imgur.com/nPdJx6d.png)

관리자만이 볼 수 있어야하는 server-status가 외부에 쉽게 노출되었다.



### 해결방안

위의 문제를 해결하기 위해서는 apache 설정 값을 변경해줘야 한다.

apache/conf로 이동한다.

그리고 httpd.conf 파일을 연 다음 `/Location`을 입력한다.

`N`을 눌러 다음 설정을 찾아가자.

``` shell
<Location /server-status>
	SetHandler server-status
	Order deny,allow
	Deny from all
	Allow from ~~~
</Location>
```



Allow from 부분에서 원래는 localhost만 추가되어야 하지만 다른게 추가되어 있을 수도 있다.

접근을 허락하고자 하는 ip 주소만 추가해주면 된다!



