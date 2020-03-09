---
title: "tui-viewer 적용"
excerpt: "내용을 표시하기 위한 tui-viewer 적용"

categories:
 - Basecamp
tags:
 - NHN
 - Basecamp
 - tui-viewer
 - TOAST
---



## 메일 본문을 보여주기 위한 tui-viewer 적용



### 문제

기존 웹페이지의 경우 메일 본문을 출력할 때는 일반적인 HTML div 태그에 출력하였다.

```html
<div>
    ${mail.contents}
</div>
```



이럴 경우 <h1> 과 같은 HTML 태그들이 동작하여 문제가 발생했다.

그래서 DB에 저장할 때 `<` 을 `&lt`로 치환하여 저장하였다.

다시 불러올 때는 `&lt`를 `<`로 변환하는 번거로운 작업이 있었다.

이러한 번거로움을 없애고자 다음과 같이 적용하였다.

```html
<div>
    <c:out value="${mail.contents}" escapeXml="true"/>
</div>
```

위와 같이 적용 시 자동으로 HTML 태그가 무시되었다.



하지만 또 다른 문제가 있었는데 마크다운 형식이 제대로 출력되지 않았다.

기존의 코드는 자바스크립트에서 내용을 저장할 때

``` javascr
var content = editor.getValue();
```

로 저장하였기 때문에 태그가 제대로 적용되지 않았다.



따라서 위지윅 모드와 마크다운 모드 별로 컨텐츠를 다르게 저장하려고 코드를 변경하였다.

``` javascript
if (editor.isMarkdownMode()) {
		content = editor.getMarkdown();
}
else {
		content = editor.getValue();
}
```



### 해결방안

이제 다시 출력하는 일만 남았다.

하지만 기존의 HTML로 마크다운을 출력하기에는 원래와는 다르게 출력되는 문제가 있었다.

따라서 tui-viewer를 추가하여 메일 본문을 출력하게 하였다.

(참고 : https://nhn.github.io/tui.editor/latest/ToastUIEditorViewer, https://github.com/nhn/tui.editor)





![img](https://i.imgur.com/QXkBdob.png)

tui-viewer 적용 후 다음과 같이 마크다운 문법이 제대로 적용되었다!