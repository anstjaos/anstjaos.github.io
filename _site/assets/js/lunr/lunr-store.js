var store = [{
        "title": "github.io 블로그 시작하기",
        "excerpt":"안녕하세요 이 글의 제목은 github.io 블로그 시작하기입니다.  ","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "http://localhost:4000/blog/first-post/",
        "teaser":null},{
        "title": "댓글 테스트",
        "excerpt":"댓글이 잘 작동되나??  ","categories": ["Test"],
        "tags": ["Test"],
        "url": "http://localhost:4000/test/comments-test/",
        "teaser":null},{
        "title": "NHN 신입교육 1일차 후기",
        "excerpt":"NHN 신입교육 후기 입사일인 2020년 1월 2일부터 7일간 회사 교육을 진행하였다. 서비스 교육 NHN이라는 회사가 현재 제공하고 있는 대표 서비스들에 대한 교육을 받았다. 서비스 팀의 이사님이나 수석님들께서 직접 오셔서 강연을 해주셔서 더욱 감동을 받았다. 설명을 들으며 회사에 대한 애정이 솟아나는 것 같았다. 개발자 교육 7일간 다양한 교육을 받았는데 그 중...","categories": ["NHN"],
        "tags": ["NHN","신입교육"],
        "url": "http://localhost:4000/nhn/newbie-education/",
        "teaser":null},{
        "title": "HTML/CSS Basic",
        "excerpt":"출처: NHN 기술교육 - HTML/CSS (성슬기 선임님/최민호 선임님) 01. HTML 기본 구조와 영역을 나누는 Element 웹의 구성요소 HTML 구조와 내용을 잡는 역할 HTML 문서에 대한 정보 내용을 서술하고 정의 CSS 모양과 표현을 잡는 역할 모양을 추가하거나 변경 디자인을 입히는 개념 Javascript 기능과 액션 HTML 문서 안의 동작을 추가 웹 제작...","categories": ["Study"],
        "tags": ["Web","HTML","CSS"],
        "url": "http://localhost:4000/study/html-css-basic/",
        "teaser":null},{
        "title": "Javascript 기본",
        "excerpt":"출처: NHN 기술교육 - JavaScript 기본 (김성호 책임님) 웹 언어를 배울 때 Todolist를 만들자 SPEC TODO 추가, 완료할 수 있다. TODO는 미완료 상태와 완료된 상태 디자인 적용 종류에 따라 갯수 카운팅(전체/활성/완료) TODO를 삭제할 수 있다. 종류별로 보기(전체/활성/완료) 자바스크립트의 사용 스크립트 파일을 인클루드하는 방식 &lt;script src=\"\"&gt;&lt;/script&gt; 스크립트를 직접 코딩하는 방식 &lt;script&gt;...","categories": ["Study"],
        "tags": ["Web","Javascript"],
        "url": "http://localhost:4000/study/javascript-basic/",
        "teaser":null},{
        "title": "Bash 프로그래밍",
        "excerpt":"출처: NHN 기술교육 - bash tutorial (조영일 이사님) Unix Shell Kernel을 둘러싸고 있는 껍데기 사용자가 제어할 수 있는 명령행 해석기 MS 윈도우즈로 치면 DOS 환경 또는 커맨드창 커서 이동 문장의 맨 처음 / 끝 Ctrl-a / Ctrl-e 단어 단위 이동 Ctrl-방향키 화면 제어 화면 정리 Ctrl-l 스크롤 중단 및 재개...","categories": ["Study"],
        "tags": ["UNIX","Linux","NHN"],
        "url": "http://localhost:4000/study/bash/",
        "teaser":null},{
        "title": "Webpack #1",
        "excerpt":"Webpack 공부 #1 웹팩은 모듈 번들러(Module Bundler)이다. 그렇다면 **번들러(Bundler)**란 무엇일까?? 번들러는 소프트웨어 및 일부 하드웨어와 함께 작동하는데 필요한 모든 것을 포함하는 패키지이다. 이를 프로그래밍적으로 접근하자면 번들러란 필요한 의존성에 대해 정확하게 추적하여 해당하는 의존성들을 그룹핑 해주는 도구라고 할 수 있다. 다시 말해, Webpack 은 공식 사이트 이미지에서 소개하듯이 웹페이지를 동작시키기 위한...","categories": ["Study"],
        "tags": ["Web","Webpack","Javascript","HTML","Study"],
        "url": "http://localhost:4000/study/webpack-1/",
        "teaser":null},{
        "title": "NHN 베이스 캠프 회고록",
        "excerpt":"신입교육 회고록 (~02.14) 베이스캠프 회고록 (~02.14) 이번주와 저번주는 유독 야근이 많았다. 저번주의 경우 우리 TF가 욕심이 많아 기능들을 많이 정의한 탓에 구현하기 바빴다. 그러다보니 자연스럽게 돌아가긴 하지만 굉장히 더러운 코드들이 많이 나왔다. 이번 주에 더러운 코드들을 고치느라 꽤나 애를 썼다. 1차 서비스 발표 걱정하던 1차 서비스 발표는 다행히 별탈없이 잘...","categories": ["Basecamp"],
        "tags": ["NHN","Basecamp","교육"],
        "url": "http://localhost:4000/basecamp/education-review/",
        "teaser":null},{
        "title": "JSP 파일 첨부 텍스트",
        "excerpt":"JSP input=’file’ 사용 시 문제 jsp 파일에서 파일 첨부를 하기 위해 다음과 같은 태그를 사용하였다. &lt;input id=\"file\" type=\"file\" class=\"createform-attachment-btn\" multiple /&gt; 위와 같은 태그를 추가하였을 때 정상적으로 작동한다. 하지만 버튼 옆에 뜨는 텍스트가 이상하게 보이는 문제가 있다. 왼쪽 사진을 보면 처음 파일 5개를 업로드 하였을 경우 파일 선택 버튼 옆에...","categories": ["Basecamp"],
        "tags": ["NHN","Basecamp","교육","Jsp"],
        "url": "http://localhost:4000/basecamp/fix-file-upload-bug/",
        "teaser":null},{
        "title": "Javascript 로딩창 만들기",
        "excerpt":"JSP input=’file’ 사용 시 문제 버튼 클릭시 로딩화면 만들기 문제 웹 페이지에서 특정 페이지를 클릭 시 로딩 화면을 만들었다. 기존의 화면은 아래와 같이 중앙에 spinner gif가 화면에 보여지는 방식이었다. gif는 잘 보이지만 하나의 단점이 있었다. 다른 content나 화면 구성요소가 동작을 한다는 것이였다. 예를 들어 제목 텍스트박스를 클릭하고 내용을 적어도 기록이...","categories": ["Basecamp"],
        "tags": ["NHN","Basecamp","Javascript"],
        "url": "http://localhost:4000/basecamp/fix-mail-send-spnnier/",
        "teaser":null},{
        "title": "tui-viewer 적용",
        "excerpt":"메일 본문을 보여주기 위한 tui-viewer 적용 문제 기존 웹페이지의 경우 메일 본문을 출력할 때는 일반적인 HTML div 태그에 출력하였다. &lt;div&gt; ${mail.contents} &lt;/div&gt; 이럴 경우 &lt;h1&gt; 과 같은 HTML 태그들이 동작하여 문제가 발생했다. 그래서 DB에 저장할 때 &lt; 을 &amp;lt로 치환하여 저장하였다. 다시 불러올 때는 &amp;lt를 &lt;로 변환하는 번거로운 작업이 있었다....","categories": ["Basecamp"],
        "tags": ["NHN","Basecamp","tui-viewer","TOAST"],
        "url": "http://localhost:4000/basecamp/set-tui-viewer/",
        "teaser":null},{
        "title": "Apache server status 접근 권한 설정",
        "excerpt":"Apache server status 접근 권한 설정 문제 웹 애플리케이션을 톰캣과 아파치에 배포 후 구동하면 정상적으로 동작하였다. 그러나 한 가지 문제점을 발견하였다. http:///server-status에 접근 시 다음과 같은 화면이 출력되었다. 관리자만이 볼 수 있어야하는 server-status가 외부에 쉽게 노출되었다. 해결방안 위의 문제를 해결하기 위해서는 apache 설정 값을 변경해줘야 한다. apache/conf로 이동한다. 그리고 httpd.conf...","categories": ["Basecamp"],
        "tags": ["NHN","Basecamp","Apache","Web"],
        "url": "http://localhost:4000/basecamp/setup-apache-server-status/",
        "teaser":null},{
        "title": "9주간의 Basecamp를 마치며",
        "excerpt":"9주간의 Basecamp를 마치며 NHN 신입사원으로 입사한 지 벌써 2달이 지났다. 입사 후 첫 2주간은 인사팀에서 진행하는 신입사원 입문교육이 있었고, 그 후 9주 동안은 기술전략팀에서 지원하는 Basecamp 교육이 있었다. 처음 9주간의 일정과 과제를 소개받았을 때는 막막함이 앞섰다. 이것 저것 개발은 해봤지만 웹 개발이라고는 수업시간에 간단한 페이지 만드는 것이 전부였고, Spring 이라는...","categories": ["Basecamp"],
        "tags": ["NHN","Basecamp"],
        "url": "http://localhost:4000/basecamp/basecamp/",
        "teaser":null},{
        "title": "[UML Distilled] 1장",
        "excerpt":"1. UML 소개 UML이란 무엇인가? UML(Unified Modeling Language) 은 그래픽 표기법의 집합으로, 단일 메타모델을 기초로 하고 있으며 소프트웨어 시스템, 특히 객체 지향 소프트웨어 시스템을 표현하고 설계하는 것을 도와준다. 그래픽 모델링 언어(graphical modeling language)가 등장하게 된 근본적인 이유는 프로그래밍 언어가 설계에 대한 논의에 도움을 줄 수 있을 만큼 충분히 추상적이지 못하기...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter1/",
        "teaser":null},{
        "title": "[UML Distilled] 2장",
        "excerpt":"2. 개발 공정 UML을 사용하는 방법은 사용하는 공정의 형식에 따라 달라진다. 반복 공정과 폭포수 공정 두 공정의 근본적인 차이점은, 하나의 프로젝트를 어떻게 작은 덩어리로 쪼갤 것인가에 있다. 폭포수 방식(Waterfall style) 액티비티 기준으로 프로젝트를 나눈다. 액티비티는 분석(analysis), 설계(design), 개발(coding), 테스트(testing) 가 있다. 각 단계 사이에 어떤 형태의 공식 산출물이 있다. 종종...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter2/",
        "teaser":null},{
        "title": "[UML Distilled] 3장",
        "excerpt":"3장. 클래스 다이어그램 : 필수 요소 클래스 다이어그램 시스템의 객체의 타입과 그들 간에 존재하는 다양한 정적 관계에 대해서 기술한다. 클래스의 프로퍼티(property) 와 오퍼레이션(operation), 객체들이 연결되는 방법에 적용되는 제약사항(constraints) 을 보여준다. 그림 3.1 단순한 클래스 다이어그램 프로퍼티 클래스의 구조적인 특징을 나타낸다. 클래스의 필드(field)에 대응된다. 단일 개념이지만 두 가지의 다른 표기법으로 나타난다....","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter3/",
        "teaser":null},{
        "title": "[UML Distilled] 4장",
        "excerpt":"4장. 시퀀스 다이어그램 교류 다이어그램(Interaction diagram) 은 어떤 행동 안에서 객체 그룹들이 어떻게 협력하는지를 설명한다. 그 중 가장 많이 쓰이는 것이 시퀀스 다이어그램이다. 시퀀스 다이어그램은 한 가지 시나리오에 대한 행동을 묘사한다. 그림 4.1 중앙 집중형 제어를 나타내는 시퀀스 다이어그램 시퀀스 다이어그램에서 참가자를 표현하는 완전한 문법은 이름 : 클래스이다. 각각의 생명선(lifeline)...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter4/",
        "teaser":null},{
        "title": "[UML Distilled] 5장",
        "excerpt":"5장. 클래스 다이어그램 : 고급 개념 키워드 심볼이 너무 많으면 사용자가 모든 심볼의 의미를 기억하기가 아주 힘들다. UML을 사용할 때는 종종 심볼의 개수를 줄이고 키워드(keyword) 를 사용한다. 책임 클래스 다이어그램에서 클래스의 책임을 나타내는 것이 좋을 때가 있다. 가장 좋은 방법은 클래스 내부에 주석문으로 나타내는 것이다. 그림 5.1 클래스 다이어그램에서 책임을...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter5/",
        "teaser":null},{
        "title": "[UML Distilled] 6장",
        "excerpt":"6장. 객체 다이어그램      객체 다이어그램(Object Diagrams) 은 시스템에 있는 객체들의 어떤 순간의 모습이다.   인스턴스 다이어그램이라고도 종종 불린다.   객체 다이어그램은 서로 연결된 객체의 예를 보여주는 데에 유용하다.       그림 6.1 조직을 나타내는 클래스 다이어그램       그림 6.2 조직 클래스의 인스턴스를 예로 보여 주는 객체 다이어그램   ","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter6/",
        "teaser":null},{
        "title": "[UML Distilled] 7장",
        "excerpt":"7장. 패키지 다이어그램 패키지는 UML의 어떤 구성 요소라도 더 높은 수준의 단위로 묶을 수 있도록 하는 묶음 구조이다. UML 모델에서 각각의 클래스는 단일 패키지의 멤버이다. 패키지도 다른 패키지의 멤버가 될 수 있다. 최상위 패키지를 하위 패키지로 나누고, 하위 패키지를 다시 하위 패키지로 나누는 것을 계속하여 클래스까지 내려가는 계층 구조를 얻을...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter7/",
        "teaser":null},{
        "title": "[UML Distilled] 8장",
        "excerpt":"8장. 배치 다이어그램 배치 다이어그램은 시스템의 물리적인 구조를 보여주며, 소프트웨어의 어떤 부분이 하드웨어의 어떤 부분에서 동작하고 있는지를 나타낸다. 노드(node) 란 소프트웨어를 실행할 수 있는 무언가를 말한다. 장치(device) 는 하드웨어이다. 실행 환경(execution environment) 이란 스스로 실행하거나 다른 소프트웨어를 포함하는 소프트웨어이다. 아티팩트(artifact) 란 소프트웨어의 물리적인 모습(manifestation)이며, 보통 파일을 말한다. 일반적으로, 같은 논리...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter8/",
        "teaser":null},{
        "title": "[UML Distilled] 9장",
        "excerpt":"9장. 유스케이스 유스케이스는 시스템의 기능적인 요구 사항을 잡아내기 위한 기술이다. 시스템과 시스템의 사용자 간의 통상적인 교류를 기술하여 시스템이 어떻게 사용되는지를 표현한다. 시나리오(senario) 란 사용자와 시스템 간에 일어나는 교류를 단계적으로 나타내는 것이다. 유스 케이스란 공통적인 사용자의 목표에 의해서 하나로 묶인 시나리오 세트이다. 유스 케이스에서는 사용자를 액터(actor) 라 칭한다. 액터는 사용자가 시스템에...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter9/",
        "teaser":null},{
        "title": "[UML Distilled] 10장",
        "excerpt":"10장. 상태 기계 다이어그램 상태 기계 다이어그램(State Machine Diagram) 은 시스템의 행동을 기술하는 잘 알려진 기술이다. 객체 지향적인 접근 방법에서는 단일 객체가 활성인 시간 동안 어떤 행동을 하는지 나타내기 위해서 그린다. 그림 10.1 간단한 상태 기계 다이어그램 상태 다이어그램은 객체가 생성되었을 때의 상태에서 시작한다. 초기 의사 상태(initial pseudostate) 는 실제의...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter10/",
        "teaser":null},{
        "title": "[UML Distilled] 11장",
        "excerpt":"11장. 액티비티 다이어그램 액티비티 다이어그램(activity diagram) 은 순차 로직(procedural logic), 업무 절차(business process), 워크 플로우(work flow)를 기술하는 방법이다. 플로우 차트와 비슷한 역할을 하지만, 근본적인 차이점은 액티비티 다이어그램은 병렬 행동(parallel behavior) 을 지원한다는 것이다. 그림 11.1 간단한 액티비티 다이어그램 액티비티 다이어그램은 초기 노드(initial node) 액션으로부터 시작해서 작업을 시작한다. 포크(fork) 는 하나의...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter11/",
        "teaser":null},{
        "title": "[UML Distilled] 12장",
        "excerpt":"12장. 커뮤니케이션 다이어그램 커뮤니케이션 다이어그램(Communication Diagrams) 은 교류에 참여하는 요소들 간의 데이터 연결을 강조한다. 참여 요소를 자유롭게 놓을 수 있으며, 링크를 그려서 서로 어떻게 연결되는지를 나타내고, 그것에 번호를 붙여서 메시지의 순서를 나타낼 수 있다. 그림 12.1 중앙 집중 제어를 보여주는 커뮤니케이션 다이어그램 그림 12.2 단계별로 번호를 붙인 커뮤니케이션 다이어그램 단계별로...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter12/",
        "teaser":null},{
        "title": "[UML Distilled] 13장",
        "excerpt":"13장. 복합 구조 복잡한 객체를 여러 개의 부분으로 나눌 수 있도록 해준다. 그림 13.1 TV 뷰어와 그 인터페이스를 나타내는 두 가지 방법 그림 13.2 컴포넌트의 내부 모습(제임스 럼보가 제안한 예제) 그림 13.3 여러 개의 포트를 가진 컴포넌트 언제 복합 구조를 사용하는가 컴포넌트와 그 컴포넌트가 어떻게 몇 개의 부분으로 나눠지는지 보여주기에...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter13/",
        "teaser":null},{
        "title": "[UML Distilled] 14장",
        "excerpt":"14장. 컴포넌트 다이어그램 컴포넌트는 고객이 어떻게 소프트웨어를 사고 싶어하는 지에 대한 것이다. 컴포넌트는 독립적으로 구입하고 업그레이드 할 수 있는 부분을 의미한다. 그림 14.1 컴포넌트의 표기법 그림 14.2 컴포넌트 다이어그램의 예 언제 컴포넌트 다이어그램을 사용하는가 시스템을 컴포넌트로 나누고 그들 간의 상호 관계를 인터페이스를 통해서 나타내고 싶거나, 컴포넌트를 더 저수준의 구조로 나누고...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter14/",
        "teaser":null},{
        "title": "[UML Distilled] 15장",
        "excerpt":"15장. 협력 협력에서 클래스라고 불리는 것은 실제로 클래스가 아니라 역할(role) 이다. 클래스에서 협력으로 연결된 링크는 클래스들이 협력에서 정의된 여러 가지 역할을 어떻게 수행하는지를 나타낸다. 그림 15.1 역할을 명시한 협력 그림 15.2 경매 협력에 대한 시퀀스 다이어그램 그림 15.3 협력 사건 그림 15.4 JUnit 내에서 패턴 사용을 나타내는 비표준적인 방법(junit.org) 언제...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter15/",
        "teaser":null},{
        "title": "[UML Distilled] 16,17장",
        "excerpt":"16장. 교류 개요 다이어그램 교류 개요 다이어그램(Interaction Overview Diagrams) 은 액티비티 다이어그램과 시퀀스 다이어그램을 접목한 것이다. 액티비티들이 작은 시퀀스 다이어그램으로 바뀐 액티비티 다이어그램으로 생각할 수 있다. 그림 16.1 교류 개요 다이어그램 언제 교류 다이어그램을 사용하는가 필요에 따라서 액티비티 다이어그램이나 시퀀스 다이어그램 중에서 선택해서 사용하자. 17장. 타이밍 다이어그램 타이밍 다이어그램(Timing Diagrams)...","categories": ["Study"],
        "tags": ["UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/uml-distilled-chapter16,17/",
        "teaser":null},{
        "title": "[Object] 3장 요약",
        "excerpt":"3. 역할, 책임, 협력 객체지향 패러다임의 관점에서 핵심은 역할(role), 책임(responsibility), 협력(collaboration) 이다. 객체지향의 본질은 협력하는 객체들의 공동체를 창조하는 것이다. 객체지향 설계의 핵심은 협력을 구성하기 위해 적절한 객체를 찾고 적절한 책임을 할당하는 과정에서 드러난다. 협력 객체지향 원칙을 따르는 애플리케이션의 제어 흐름은 다양한 객체들 사이에 균형 있게 분배되는 것이 일반적이다. 객체들이 애플리케이션의...","categories": ["Study"],
        "tags": ["Object","OOP","UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter3/",
        "teaser":null},{
        "title": "[Object] 1장",
        "excerpt":"1. 객체, 설계 티켓 판매 어플리케이션 구현하기 그림 1.1 너무 많은 클래스에 의존하는 Theater 티켓 판매 어플리케이션을 구현한다고 가정했을 때 전체 클래스 설계(그림 1.1)은 잘 돌아갈 것이다. 하지만 이러한 설계에는 문제가 있다. 무엇이 문제인가 로버트 마틴(Robert C. Martin)은 소프트웨어 모듈이 가져야 하는 세 가지 기능에 관해 설명한다. 여기서 모듈이란 크기와...","categories": ["Study"],
        "tags": ["Object","OOP","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter1/",
        "teaser":null},{
        "title": "[Object] 2장",
        "excerpt":"2. 객체지향 프로그래밍 객체지향 프로그래밍을 향해 협력, 객체, 클래스 객체지향은 말 그대로 객체를 지향하는 것이다. 진정한 객체지향 패러다임으로의 전환은 클래스가 아닌 객체에 초점을 맞출 때에 얻을 수 있다. 이를 위해서 프로그래밍하는 동안 다음의 두 가지에 집중해야 한다. 어떤 클래스가 필요한지를 고민하기 전에 어떤 객체들이 필요한지 고민하라. 클래스는 공통적인 상태와 행동을...","categories": ["Study"],
        "tags": ["Object","OOP","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter2/",
        "teaser":null},{
        "title": "[Object] 4장",
        "excerpt":"4. 설계 품질과 트레이드 오프 객체지향 설계의 핵심은 역할, 책임, 협력이다. 그 중 객체지향 애플리케이션 전체의 품질을 결정하는 것은 책임이다. 객체지향 설계란 올바른 객체에게 올바른 책임을 할당하면서 낮은 결합도와 높은 응집도를 가진 구조를 창조하는 활동이다. 이 정의에는 객체지향 설계에 관한 두 가지 관점이 섞여 있다. 첫 번째는 객체지향 설계의 핵심이...","categories": ["Study"],
        "tags": ["Object","OOP","UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter4/",
        "teaser":null},{
        "title": "[Object] 5장",
        "excerpt":"5. 책임 할당하기 책임에 초점을 맞춰서 설계할 때 직면하는 가장 큰 어려움은 어떤 객체에게 어떤 책임을 할당할지를 결정하기가 쉽지 않다는 것이다. 책임 할당 과정은 일종의 트레이드오프 활동이다. 책임 주도 설계를 향해 데이터 중심의 설계에서 책임 중심의 설계로 전환하기 위해서는 다음의 두 가지 원칙을 따라야 한다. 데이터보다 행동을 먼저 결정하라 협력이라는...","categories": ["Study"],
        "tags": ["Object","OOP","UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter5/",
        "teaser":null},{
        "title": "[Object] 6장",
        "excerpt":"6. 메시지와 인터페이스 클래스라는 구현 도구에 지나치게 집착하면 경직되고 유연하지 못한 설계에 이를 확률이 높아진다. 훌량한 객체지향 코드를 얻기 위해서는 객체를 지향해야 한다. 협력 안에서 객체가 수행하는 책임에 초점을 맞춰야 한다. 중요한 것은 책임이 객체가 수신할 수 있는 메시지의 기반이 된다는 것이다. 객체지향 애플리케이션의 가장 중요한 재료는 클래스가 아니라 객체들이...","categories": ["Study"],
        "tags": ["Object","OOP","UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter6/",
        "teaser":null},{
        "title": "[Object] 7장",
        "excerpt":"7. 객체 분해 불필요한 정보를 제거하고 현재의 문제 해결에 필요한 핵심만 남기는 작업을 추상화라고 부른다. 가장 일반적인 추상화 방법은 한 번에 다뤄야 하는 문제의 크기를 줄이는 것이다. 큰 문제를 해결 가능한 작은 문제로 나누는 작업을 분해(decomposition) 라고 부른다. 분해의 목적은 큰 문제를 인지 과부하의 부담 없이 단기 기억 안에서 한...","categories": ["Study"],
        "tags": ["Object","OOP","UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter7/",
        "teaser":null},{
        "title": "[Object] 8장",
        "excerpt":"8. 의존성 관리하기 잘 설계된 객체지향 애플리케이션은 작고 응집도 높은 객체들로 구성된다. 작고 응집도 높은 객체란 책임의 초점이 명확하고 한 가지 일만 잘 하는 객체를 의미한다. 일반적인 애플리케이션의 기능을 구현하기 위해서는 다른 객체에게 도움을 요청해야 한다. 이런 요청이 객체 사이의 협력을 낳는다. 협력은 객체가 다른 객체에 대해 알 것을 강요한다....","categories": ["Study"],
        "tags": ["Object","OOP","UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter8/",
        "teaser":null},{
        "title": "1 Day 1 Commit",
        "excerpt":"회사 일 외에 별도로 코드 작업을 하지 않다보니 내 Github에 공백이 어마무시하게 생겼다… 이대론 안되겠다 싶어 여러가지를 보던 중 1일 1커밋(1 Day 1 Commit) 이라는 것을 보게 되었다. 굉장히 좋은 것 같아 오늘부터(2020.06.01) 꾸준하게 커밋하려고 한다. 단, 규칙이 있다. 무조건적인 커밋을 찍기 위한 어뷰징은 하지 않는다. 커밋 로그는 상세하게 쓰자....","categories": ["1D1C"],
        "tags": ["1D1C","Study","개인공부"],
        "url": "http://localhost:4000/1d1c/1day1commit/",
        "teaser":null},{
        "title": "[Object] 10장",
        "excerpt":"10. 상속과 코드 재사용 재사용 관점에서 상속이란 클래스 안에 정의된 인스턴스 변수와 메서드를 자동으로 새로운 클래스에 추가하는 구현 기법이다. 객체지향에서는 상속 외에도 코드를 효과적으로 재사용할 수 있는 방법이 한 가지 더 있다. 새로운 클래스의 인스턴스 안에 기존 클래스의 인스턴스를 포함시키는 방법으로 흔히 합성이라고 부른다. 상속과 중복 코드 DRY 원칙 중복...","categories": ["Study"],
        "tags": ["Object","OOP","UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter10/",
        "teaser":null},{
        "title": "[Object] 9장",
        "excerpt":"9. 유연한 설계 개방-폐쇄 원칙 로버트 마틴은 확장 가능하고 변화에 유연하게 대응할 수 있는 설계를 만들 수 있는 원칙 중 하나로 개방-폐쇄 원칙(Open-Closed Principle, OCP)을 고안했다. 개방-폐쇄 원칙은 다음과 같은 문장으로 요약할 수 있다. 소프트웨어 개체(클래스, 모듈, 함수 등등)는 확장에 대해 열려 있어야 하고, 수정에 대해서는 닫혀 있어야 한다. 여기서...","categories": ["Study"],
        "tags": ["Object","OOP","UML","Study","요약","정리"],
        "url": "http://localhost:4000/study/object-chapter9/",
        "teaser":null},{
        "title": "1d1c_1",
        "excerpt":"06.01   오늘은 자바 8 인 액션이라는 책을 공부했다.   기존의 코드를 보면서 Stream과 Optional처럼 모르는 문법을 몰라서 책을 사서 공부하였다.   커밋 로그      Set theme jekyll-theme-midnight   Modify 1Day 1Commit post   Merge branch ‘master’ of https://github.com/anstjaos/anstjaos.github.io   Updload 1Day 1Commit post   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/1d1c_1/",
        "teaser":null},{
        "title": "Promise, Async, Await",
        "excerpt":"Promise와 async, await ES2015부터 Promise가 정식적으로 지원된다. Promise는 기존의 callback 지옥을 벗어나는데 큰 도움을 준다. 예를 들어 다음과 같은 코드가 있다고 가정한다. Users.findOne(1, (err, user) =&gt; { if (err) { console.error(err); } console.log(user); Users.updateUser(user, (err, updatedUser) =&gt; { if (err) { console.error(err); } console.log(updatedUser); Users.deleteUser(user, (err, deleteUser) =&gt; {...}); });...","categories": ["Study"],
        "tags": ["Study","정리"],
        "url": "http://localhost:4000/study/promise-async-await/",
        "teaser":null}]
