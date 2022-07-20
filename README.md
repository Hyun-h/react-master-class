# React Master Class

공부의 목적 : 다음 프로젝트에 도입할 스택 연구. 왜 해당 스택을 도입해야 하는지에 대한 발표준비. 정리하면서 최신 스택이니까 써보자!보다는 진행할 프로젝트에 적합할 지 스스로에게 물으면서 듣기.

## _typescript_

### 쓰는 이유

-   얘는 의심의 여지없이 반드시 도입을 해야한다.
-   당연하겠지만 타입의 안정성 : JS만 사용했을 때 들어오는 애가 string인지 number인지 늘 확인해줘야 했다.
-   새로운 프로젝트에는 로그인이 있고, 매장정보 API가 왔다갔다 하는만큼 타입의 안정성은 중요해보임.
-   클론코딩 하는 내내 내가 오타를 내거나, 이상한 걸 가져다 쓰려고 하면 경고를 바로 띄워서 한 번 더 체크하게 해줬다. JS 쓸 때보다 오류 찾는 시간이 줄어들음. (반대로 이야기하면 에러가 배로 늘었고 왜 그런지 시간이... 좋은거겠지..?)
-   내가 찾아서 써야하는 옵션을 알아서 찾아준다.

## _styled-components_

### 쓰는 이유

-   styled-components가 알아서 클래스명 부여해서 클래스명들을 복사 붙여넣기 할 필요가 사라진다. 당연히 클래스명이 중복되는 일도 없어진다.
-   코드의 반복적인 사용을 줄일 수 있다. : 개발속도의 개선
-   props를 활용하여 원하는 변화만 줄 수 있다.
-   CSS를 살펴보지 않고도 각각의 컴포넌트가 맡은 일을 파악할 수 있다.
-   div 투성이인 jsx에서 해방될 수 있다.
-   JS 쓰는 방법만 알면 JS 쓰듯 쓰는 게 가능.
-   styled-components 사용방법은 리엑트와 찰떡궁합.

### 프로젝트에서 styled-components를 쓴다면 어떻게 적용시킬 것인가?

-   다크모드, 라이트모드 도입 : 내부관리자는 매장을 관리하는 영업직을 대상으로 하는 페이지. 다크모드를 선호. 나오는 디자인에 따라 다크모드 라이트모드 선택할 수 있게 하면 좋을 거 같음.
-   ThemeProvider를 통해 공통적인 양식(색상, 폰트 사이즈 뭐 이런 것들?)을 만들어서 import하고 각 컴포넌트에서 props로 가져오게 하면 효율적인 관리가 가능하지 않을까 싶음.
-   일단 className 고민에서 해방되는게... 매우매우매우매우 경제적
-   return 안에서 부여한 조건문이 styled-components와 연계되어 사용할 수 있다는 게 놀라웠다. (당연하게도 JS니까!) 그 전에는 따로 클래스를 부여해서 clsx나 classes를 써서 강조해주는 css 를 넣었다. 이 부분을 잘 연구해서 사용하면 코드를 더 줄일 수 있는데 도움이 될 거 같다.

### 더 나은 다른 방법이 없을까?

-   개인적으로는 Tailwind와 비교해보고 싶다 : XD나 Figma를 사용하여 기획자, 디자이너, 프론트엔드가 협업할 수 있는 환경은 중소기업에서 기대하기 어렵다. 현재 회사의 경우 디자인을 다른 분야의 디자이너가 포토샵으로 디자인을 주고 있어 정형화된 디자인(예를 들면 폰트 사이즈, 컨텐츠 간의 간격 등등..)을 프론트엔드가 만들어야 하는 상황이다. Tailwind는 이런 번거로움을 줄여주지 않을까 하는 기대감이 있다.
-   그럼 Bootstrap이나 Material UI 이런 게 있지 않나? : 이 두 프레임워크는 오래된만큼 축적된 자료들이 많다. 그만큼 부딪혔을 때 정보도 얻기 쉬울 것이다. 하지만 처음 써봤을 때 세세하게 커스텀을 하기가 어려워 UI를 내가 다시 짰던 기억이 있다. (물론 나의 미숙한 사용법이 불러온 문제일 수 있다.) Tailwind는 이 부분에 있어서 자유로워 보였다. styled-components와 비교하여 더 적합한 프레임워크를 채택하면 좋을 거 같다.

## _react-query_

### 도입을 고려하는 이유?

이전 프로젝트에서는 redux와 redux-saga를 사용했다. 그러다 보니 늘 드는 의문점이 있었다.

-   실시간 게임 정보를 서버에서 불러와서 목록으로 보여주거나 웹에서 제어하는 일이 주된 기능이네..?

-   음..? 데이터를 불러와서, 조건에 맞는지 확인한 후, UI에 active를 주는 이 과정이 너무 복잡한데? 왜 이렇게 복잡해야 하지? 뭔가 하나의 큰 구조물이 뒤엉켜 있는 느낌인데?

-   (위의 상황과는 반대로)
    간단하게 변경만 하는건데 왜 이렇게 문법이 복잡할까..? 효율성을 극도로 추구하는 게으른 프로그래머들이 이걸 그냥 냅둘리가 없어!!

그래서 채용 사이트를 뒤져서 테크 기업들의 상태관리 툴을 뭘 쓰는지 확인하고, 기술 블로그를 체크했다. 그래서 얻은 결론은

-   오호라..! 서버와 클라이언트의 상태를 따로 분리해서 관리를 하는구나? 나만 불편함을 느낀 게 아니구나?

### 왜 앞으로의 프로젝트에 react-query가 적합할 거 같은가?

예정되어 있는 프로젝트는 어드민 사이트다. 로그인 기능이 필요하고, 매장의 실시간 정보를 가져오는 게 필요하다. 즉 서버에서 데이터를 가져와서 관리를 하는 일이 많다는 소리다. react-query를 도입하는 수많은 이유가 있겠지만 이거 하나로 충분한 이점이 보였다.
<br />
이전 프로젝트에서 스크린 골프 결과를 받아와 목록형태라 게임 목록을 보여줘야 했다. Pagination에서 처음 로딩할 때 말고 목록을 넘긴 다음 접속했던 이전 목록으로 돌아오는데도 지연되는 현상이 있었다.
<br />
이 현상을 어떻게 하면 개선할 수 있을까 고민했었는데 강의를 보고 어느정도 길을 찾은 거 같다. react-query는 강력한 캐싱 메커니즘을 가지고 있어서 query의 고유한 key값을 react-query에 넘겨주었다면 react-query는 예전에 접속했던 페이지를 기억하고 있어서 유저에게 지연없이 보여준다. (웬지 미래에 query에 key 하나하나 부여하기 너무 귀찮아! 하면서 이걸 개선한 라이브러리가 짠! 하고 나타날 거 같은 느낌이 스멀스멀 들기는 하지만...) react-query를 다음 프로젝트에 적용을 해보고 괜찮으면 이전 프로젝트에 적용해보면 괜찮을 거 같다는 생각이 들었다.
<br />
마지막으로 redux-saga를 쓸 때보다 사용방법이 깔끔해져서 호감이 훅 갔다.

### 더 생각해봐야 할 것은?

강의에서는 간단한 과정을 예시로 들고 있는데 실무에서는 실시간 인증을 하는 과정을 통해 보안처리를 하는 과정이 있다고 들었다. 복잡하게 쓰는 부분은 연습이 더 필요해보인다.

## _recoil_

### 더 생각해 봐야 할 점

-   없데이트 recoil : react native에서 업데이트가 느리다는 점을 떠올리고 나서 확인하니 역시나였다. recoil도 업데이트가 느렸다. RN이 느그적거리는 사이 다른 좋은 툴들이 나왔고 치열한 경쟁 중이듯 recoil도 그런 거 같다. 빠르게 변화하는 프론트엔드 생태계에서 느리다는 점은 큰 단점이 아닐까? 개선이 빨리 이뤄져 더 나은 방법을 제공하는 툴이 있으면 recoil을 쓸 필요가 있을까?

-   기존에 사용하던 redux : 구관이 명관. 좋은 툴들이 나왔다고 하지만 압도적인 redux의 방대한 자료, 다운로드 수는 어려움에 부딪혔을 때 자료를 많이 찾을 수 있다는 소리다. 이 점은 유지보수나 수정 할 때도 유리하다는 소리다. 게다가 redux 기술자들도 내가 느낀 불편함을 개선점으로 잡았나보다. 문법의 복잡함을 개선한 redux toolkit을 훑어보니 굳이 기존의 방법을 버려야 하나? 라는 의문점이 들었다.

-   액션이 그렇게 많지 않은 클라이언트 상태이면 굳이 전역상태관리 툴을 도입할 필요가 있을까? 전역관리가 복잡하게 들어가지 않는다면 필요한 순간이 올 때 context를 쓰는 게 낫지 않을까?

## 참고 사이트

-   UI color 모음 : https://flatuicolors.com/
-   react-query 참고자료1 : https://tech.kakao.com/2022/06/13/react-query/
-   react-query 참고자료2 : https://www.youtube.com/watch?v=MArE6Hy371c
-   상태관리 트랜드 참고 : https://npmtrends.com/jotai-vs-react-redux-vs-recoil-vs-zustand
