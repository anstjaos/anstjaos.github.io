---
title: "Promise, Async, Await"
excerpt: "promise, async, await 설명"

categories:
- Study 
tags:
- Study
- 정리
---

# Promise와 async, await


ES2015부터 Promise가 정식적으로 지원된다.

Promise는 기존의 `callback 지옥`을 벗어나는데 큰 도움을 준다.

예를 들어 다음과 같은 코드가 있다고 가정한다.

```javascript
Users.findOne(1, (err, user) => {
  if (err) {
    console.error(err);
  }
  
  console.log(user);
  Users.updateUser(user, (err, updatedUser) => {
    if (err) {
      console.error(err);
    }
    
    console.log(updatedUser);
    Users.deleteUser(user, (err, deleteUser) => {...});
  });
});
```



이렇게 끝도 없이 함수가 깊어지고 depth가 깊어지는 것을 `callback 지옥`이라고 한다.

이를 방지하고자 Promise라는 것이 새로 나오게 되었는데

```javascript
class Users {
  findOne(id) => {
    return new Promise((resolve, reject) => {
      let success = true;
      
      if (success) {
        resolve('성공');
      } else {
        reject('실패');
      }
    });
  }
}

Users.findOne(1)
	.then((user) => {
  	console.log(user);
  	return Users.updateUser(user);
	})
	.then((updatedUser) => {
		console.log(updatedUser);
  	return Users.deleteUser(updatedUser);
	})
	.then((deletedUser) => {
		console.log(deletedUser);  
	})
	.catch((err) => {
  	console.error(err);
	});
console.log('내가 제일 먼저 실행');
```



위와 같이 사용할 수 있다.

하지만 위의 코드를 실행하게 될 경우 가장 아래에 있는 `console.log('내가 제일 먼저 실행');`이 먼저 실행되게 되는데 이는 Node js의 논블로킹 I/O 특성 때문이다.

만약, 가장 아래에 있는 console.log까지 순차적으로 실행되기를 원한다면 다음과 같이 코드를 작성할 수 있다.

```javascript
async (() => {
  try {
    const user = await Users.findOne(1);
    console.log(user);
    const updatedUser = await Users.updateUser(user);
    console.log(updatedUser);
    const deletedUser = await Users.deleteUser(updatedUser);
    console.log(deletedUser);
    console.log('내가 제일 먼저 실행');
  } catch(err) { 
  	console.error(err);
  }
})

func();
```



async와 await 키워드를 사용하게 되면 코드들이 깔끔하게 표현되는 것을 확인할 수 있다.

다만, 에러를 잡기 위해 `try-catch` 문을 사용해야 된다.

