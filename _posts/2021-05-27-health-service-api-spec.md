---
title: "헬스 서비스 개발일지 #3"
excerpt: "REST API 설계"

categories:
  - Development
tags:
  - Study
  - 개발 일지
  - 헬스 서비스
---



대략적인 요구사항 분석과 DB 설계도 끝냈으니 이를 바탕으로 REST API를 설계하려고 한다.

HTTP Response Status code는 일단 생략한다.



# **REST** API Document

* [회원 관리](#user)
* [운동 관리](#exercise)
* [루틴 관리](#routine)



## User

* 회원 등록

```http
POST /users
```



#### Request

```json
{
  "userId": "test@naver.com",
  "nickname": "test",
  "password": "asdf...", // encoded SHA-256
  "email": "test@naver.com"
}
```



#### Response

```json
{
  "isSuccess": true,
  "message": null,
  "data": {
    "userNum": 1
  }
}
```



* 회원 정보 수정

```http
PUT /users/{userNum}
```



#### Request

```json
{
  "nickname": "asdf",
 	"password": "asdfasf..",
  "email": "test@daum.net"
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 회원 탈퇴

```http
DELETE /users/{userNum}
```



#### Header

```http
{
	"x-access-token": "asdfefdf~"
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 로그인

```http
POST /auth/login
```



#### Request

```json
{
	"userId": "test@naver.com",
	"password": "asdfasdf" // encoded SHA-256
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": {
    "token": "IEmeifeif~~"
  }
}
```



* 로그아웃

```http
DELETE /auth/logout/{userNum}
```



#### Header

```json
{
	"x-access-token": "IEmeifeif~~"
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



## Exercise

* 운동 등록

```http
POST /exercises
```



#### Request

```json
{
  "exerciseName": "bench press",
  "exerciseTypeId": 1,
  "bodyPartId": 1
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 운동 수정

```http
PUT /exercises/{exerciseId}
```



#### Request

```json
{
  "exerciseName": "change",
  "exerciseTypeId": 2,
  "bodyPartId": 2
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 운동 조회

```http
GET /exercises/{exerciseId}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 운동 삭제

```http
DELETE /exercises/{exerciseId}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 수행한 운동 등록

```http
POST /users/{userNum}/exercises/{exerciseId}
```



#### Request

```json
{
  "date": "2021-05-27 15:00:00",
  "exerciseCount": 10,
  "setCount": 3
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 수행한 운동 수정

```http
PUT /users/{userNum}/exercises/{exercisesId}
```



#### Request

```json
{
  "exerciseCount": 12,
  "setCount": 5
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 수행한 운동 조회

```http
GET /users/{userNum}/exercises/{exercisesId}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": {
    "exerciseName": "bench press",
    "exerciseCount": 12,
    "date": "2021-05-27 15:00:00",
    "setCount": 4,
    "exerciseTypeId": 1,
    "bodyPartId": 3
  }
}
```



* 수행한 운동 전체 조회

```http
GET /users/{userNum}/exercises
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": {
    "exercises" : [
      {
        "exerciseName": "bench press",
        "exerciseCount": 12,
        "date": "2021-05-27 15:00:00",
        "setCount": 4,
        "exerciseTypeId": 1,
        "bodyPartId": 3
      },
      {
        ...
      }
    ]
  }
}
```



* 수행한 운동 삭제

```http
DELETE /users/{userNum}/exercises/{exerciseId}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



## Routine

* 루틴 등록

```http
POST /users/{userNum}/routines
```



#### Request

```json
{
  "routineName": "hi",
  "dayOfWeek": 4
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 루틴 수정

```http
PUT /users/{userNum}/routines/{routineId}
```



#### Request

```json
{
  "routineName": "change",
  "dayOfWeek": 3
}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



* 루틴 조회

```http
GET /users/{userNum}/routines/{routineId}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": {
    "routineName": "test",
    "dayOfWeek": 3
  }
}
```



* 전체 루틴 조회

```http
GET /users/{userNum}/routines
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": {
    "routines": [
      {
        "routineName": "test",
        "dayOfWeek": 3
      }, 
      {
      	...  
      }
    ]
  }
}
```



* 루틴 삭제

```http
DELETE /users/{userNum}/routines/{routineId}
```



#### Response

```json
{
	"isSuccess": true,
  "message": null,
  "data": null
}
```



---

대략적인 API여서 아마 지속적으로 수정될 것 같다.

이를 목표로 2차 마일스톤 때 개발 진행해보자.