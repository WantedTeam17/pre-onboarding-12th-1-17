# 원티드 프리온보딩 프론트엔드 인턴십 12차 - 1주차 과제

### 17팀
#### 백하람, 변혜빈, 양음정, 이유승, 임정훈.


### 과제 내용
사전 과제의 각 기능들을 각자 어떤 방식으로 구현하였는지 설명한 다음, 무엇이 가장 BEST한 방식인지 논의를 거쳐 최종 결과물을 도출.

### BEST 선정 기준
코드의 가독성, 재사용성, 유지보수성, 가장 최적에 가까운 구현 방식을 BEST로 선정하였습니다.

### 배포 링크
[배포 링크 - Vercel](https://pre-onboarding-12th-team17-1-1.vercel.app/)

<br/><br/>
### 프로젝트 실행 방법
배포 링크를 통한 실행.

혹은

ZIP 파일을 다운로드 한 다음, 압축을 풀고 코드 에디터로 실행. 아래 키워드를 입력하여 실행에 필요한 패키지를 설치한 다음 프로젝트 실행.

> npm i

> npm run start

### 사용한 기술 스택
**Javascript, HTML, CSS
React.js, React-router-dom, Axios, styled-components**

### 과제 Assignment와 기능별 쟁점 사항 및 결정 요지.

#### Assignment 유효성 검사
> * 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사 기능을 구현해주세요
    - 이메일 조건: `@` 포함
    - 비밀번호 조건: 8자 이상
> * 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요

- BEST : **includes / length** 사용. 
- 선정 이유 : 간단한 수준의 검사에서는 정규 표현식보다 includes / length 쪽이 더 **자원을 적게 사용**한다. 

#### Assignment 2 & 3 페이지 이동/ jwt 관리
> - 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요
> - 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요
    - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
    - 응답받은 JWT는 로컬 스토리지에 저장해주세요
    
- jwt를 관리하는 방법 : **localStorage와 Context API**를 같이 사용. 
- 선정 이유 : 각 컴포넌트에서 localStorage의 token을 반복적으로 호출하는 것보다, Context API에서 **전역적으로 관리하는게 더 효율적**이다.
    
    
#### Assignment 4 리다이렉트
> - 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
    - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
    - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

- Route 컴포넌트 내부에서 삼항 연산자 등으로 조건부 라우팅 VS PublicRoute / PrivateRoute 컴포넌트를 제작하여 기능을 분리.
- 선정 : **PublicRoute / PrivateRoute 컴포넌트를 제작하여 기능을 분리.**
- 선정 이유 : 컴포넌트 내부 혹은 컴포넌트의 속성 등에 과도한 코드가 작성되어 **가독성을 해치는 상황을 방지하고 기능을 추가하거나 수정하는데 용이**함.


#### Assignment 5 투두 리스트 목록과 체크박스
> - `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
> - 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
> - TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요

- Context API를 사용해야 하는가? **사용해야 한다.**
- 이유 : TODO 기능을 구성하는 컴포넌트들이 다수 나누어져 있어 state를 props로 관리할 경우 **Props Drilling 현상이 발생. 전역 관리로 이를 방지해야 할 필요가 있음.**


#### Assignment 6 투두 리스트 추가
> - 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
> - 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
> - TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다

#### Assignment 7 & 10 투두리스트, 체크박스 수정
> - TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
> - 투두 리스트의 수정 기능을 구현해주세요

- window.alert의 사용 여부? **구현해보면서 결정.**
- window.alert의 문제. **기본 디자인이 구시대적이고 디자인 변경이 불가능**하다.


- 에러 상황 발생시 어디까지 처리를 해주어야 하는가?
- **에러 코드를 기준으로 처리**한다.
- 에러 코드는 하나이지만 **원인이 두 개 이상인 경우가 존재**하기 때문.

#### Assignment 8 & Assignment 9 투두리스트 삭제
> - TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
> - 투두 리스트의 삭제 기능을 구현해주세요
    - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요


### 과제 진행 방법
디스코드의 음성 채널, 화면 공유, 노션 팀 페이지를 사용하여 서로가 가진 정보를 공유하며 본인과 팀의 부족한 부분을 채워나갔습니다.

깃 컨벤션, 브랜치 관리 방법, 디렉토리 / 파일 / 함수와 변수 / 코드 작성 구조 / 컴포넌트 이름 규칙 및 구조 등의 코딩 컨벤션을 설정하고 이를 실제로 실현해보면서 발생하는 의문과 개선점들을 지속적으로 반영하였습니다.

#### 코딩 컨벤션 - 노션 팀 스페이스 페이지
[https://lean-mahogany-686.notion.site/843c479139054c8e915a2b1aa28f51c6](https://lean-mahogany-686.notion.site/843c479139054c8e915a2b1aa28f51c6)


### 프로젝트 구조
> .
└── src/
    ├── ┣ api
    ├── ┃ ┣ auth.js
    ├── ┃ ┣ axios.js
    ├── ┃ ┗ todo.js
    ├── ┣ components
    ├── ┃ ┣ todo
    ├── ┃ ┃ ┣ AddTodo.jsx
    ├── ┃ ┃ ┣ TodoList.jsx
    ├── ┃ ┃ ┗ TodoListItem.jsx
    ├── ┃ ┗ ui
    ├── ┃ ┃ ┣ Button.jsx
    ├── ┃ ┃ ┗ Input.jsx
    ├── ┣ constants
    ├── ┃ ┗ color.js
    ├── ┣ context
    ├── ┃ ┣ AuthContext.jsx
    ├── ┃ ┗ TodoContext.jsx
    ├── ┣ hooks
    ├── ┃ ┗ useValidation.jsx
    ├── ┣ layout
    ├── ┃ ┣ Header.jsx
    ├── ┃ ┗ PageLayout.jsx
    ├── ┣ pages
    ├── ┃ ┣ auth
    ├── ┃ ┃ ┣ SignInPage.jsx
    ├── ┃ ┃ ┗ SignUpPage.jsx
    ├── ┃ ┣ notFound
    ├── ┃ ┃ ┗ NotFoundPage.jsx
    ├── ┃ ┣ redirect
    ├── ┃ ┃ ┣ PrivateRoute.jsx
    ├── ┃ ┃ ┗ PublicRoute.jsx
    ├── ┃ ┗ todo
    ├── ┃ ┃ ┗ TodoPage.jsx
    ├── ┣ App.js
    ├── ┣ index.css
    ├── ┣ index.js
    └── ┗ routes.js


