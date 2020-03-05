---
title: "JSP 파일 첨부 텍스트"
excerpt: "JSP에서 input='file'을 하였을 때 이슈 해결"

categories:
 - Basecamp
tags:
 - NHN
 - Basecamp
 - 교육
 - Jsp
---



## JSP input='file' 사용 시 문제

jsp 파일에서 파일 첨부를 하기 위해 다음과 같은 태그를 사용하였다.

```html
<input id="file" type="file" class="createform-attachment-btn" multiple />
```

위와 같은 태그를 추가하였을 때 정상적으로 작동한다.

하지만 버튼 옆에 뜨는 텍스트가 이상하게 보이는 문제가 있다.



![file-upload-bug](https://i.imgur.com/rh5ltw2.png)![file-upload-bug-1](https://i.imgur.com/JHNqyPd.png)



왼쪽 사진을 보면 처음 파일 5개를 업로드 하였을 경우 `파일 선택` 버튼 옆에 `파일 5개`라고 출력이 된다.

하지만 두 개를 삭제하였을 경우 여전히 `파일 5개`로 출력된다.

위를 고치기 위해 우측 텍스트를 갱신하려고 하였다.

하지만, `input='file'` 의 경우 보안 상의 문제로 read only여서 값을 갱신할 수 없다.



## 문제 해결

따라서 위의 문제를 해결하기 위해 다음과 같은 방식을 적용하였다.

```html
<input id="file" type="file" class="createform-attachment-btn" multiple />
<label for="file" class="createform-attachment-label">파일 선택</label>
```

```css
.createform-attachment-btn{
	display: none;
}

.createform-attachment-label {
	background-image: linear-gradient(to top, #e7e7e7 0%, #ddd 40%, #fff 100%);
    border: 1px solid #aaa;
    border-radius: 3px;
    text-align: center;
    line-height: 28px;
}
```



적용된 화면은 다음과 같다.

![file-upload-bug-fix](https://i.imgur.com/CcwysnY.png
)


꼼수(?)처럼 기존의 input을 hidden으로 처리하고 input 을 위한 label을 추가하였다.

다른 방법이 있으면 추가로 업로드하겠다.
