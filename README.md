# 원티드 프리온보딩 프론트엔드 인턴십 12차 - 1주차 과제

# 17팀
## 백하람, 변혜빈, 양음정, 이유승, 임정훈.


### 과제의 목표와 진행 방법
사전 과제의 각 기능들을 각자 어떤 방식으로 구현하였는지 설명한 다음, 무엇이 가장 BEST한 방식인지 논의를 거쳐 최종 결과물을 도출.

### BEST 선정 기준
코드의 가독성, 재사용성, 유지보수성, 가장 최적에 가까운 구현 방식을 BEST로 선정하였습니다.

### 배포 링크
[배포 링크 - Vercel](https://pre-onboarding-12th-team17-1-1.vercel.app/)

### 시작 가이드

#### 실행을 위해 다음 모듈이 필요합니다.
- [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

#### 실행 방법
> 1. 배포 링크를 통한 접속
> 2. ZIP 파일 다운로드 및 압축 풀기 후 코드에디터로 실행
> 3. 아래 키워드를 통한 실행
```bash
$ git clone https://github.com/WantedTeam17/pre-onboarding-12th-1-17.git
$ cd pre-onboarding-12th-1-17
$ npm install
$ npm run start
```

### 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

#### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Typescript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/context api-F5AE29?style=for-the-badge&logo=context-api&logoColor=white"/>
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black)

## 사전 과제 진행 가이드
[링크](https://github.com/walking-sunset/selection-task)

### 과제 Assignment와 기능별 쟁점 사항 및 결정 요지

#### Assignment 유효성 검사
> * 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사 기능을 구현해주세요.
    - 이메일 조건: `@` 포함
    - 비밀번호 조건: 8자 이상
> * 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요.

- BEST : **includes / length** 사용. 
- 이유 : 간단한 수준의 검사에서는 정규 표현식보다 includes / length 쪽이 더 **자원을 적게 사용**한다. 

#### Assignment 2 & 3 페이지 이동 / jwt 관리
> - 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요.
> - 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요.
    - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
    - 응답받은 JWT는 로컬 스토리지에 저장해주세요.
    
- jwt를 관리하는 방법 : **localStorage와 Context API**를 같이 사용. 
- 선정 이유 : 각 컴포넌트에서 localStorage의 token을 반복적으로 호출하는 것보다, Context API에서 **전역적으로 관리하는게 더 효율적**이다.
    
    
#### Assignment 4 리다이렉트
> - 로그인 여부에 따른 리다이렉트 처리를 구현해주세요.
    - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요.
    - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요.

- BEST LIST : Route 컴포넌트 내부에서 삼항 연산자 등으로 조건부 라우팅 VS PublicRoute / PrivateRoute 컴포넌트를 제작하여 기능을 분리.
- BEST : **PublicRoute / PrivateRoute 컴포넌트를 제작하여 기능을 분리.**
- 이유 : 컴포넌트 내부 혹은 컴포넌트의 속성 등에 과도한 코드가 작성되어 **가독성을 해치는 상황을 방지하고 기능을 추가하거나 수정하는데 용이**함.


#### Assignment 5 투두 리스트 목록과 체크박스
> - `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요.
> - 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
> - TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요.

- Context API를 사용해야 하는가? **사용해야 한다.**
- 이유 : TODO 기능을 구성하는 컴포넌트들이 다수 나누어져 있어 state를 props로 관리할 경우 **Props Drilling 현상이 발생. 전역 관리로 이를 방지해야 할 필요가 있음.**


#### Assignment 6 투두 리스트 추가
> - 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요.
> - 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요.
> - TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

- BEST : 새로운 TODO를 입력할 수 있는 input과 추가 button을 독립 컴포넌트로 구현.
- 이유 : 컴포넌트의 **재사용성을 확보**하기 위해서.

#### Assignment 7 & 10 투두리스트, 체크박스 수정
> - TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
> - 투두 리스트의 수정 기능을 구현해주세요.

- window.alert의 사용 여부? **사용하지 않는다.**
- window.alert의 문제. **기본 디자인이 구시대적이고 디자인 변경이 불가능**하다.
- 대안 : **react-hot-toast**
- 사용 이유 : 더 **직관적이고 깔끔한 UI/UX를 제공**한다.

- 에러 상황 발생시 어디까지 처리를 해주어야 하는가?
- **에러 코드를 기준으로 처리**한다.
- 에러 코드는 하나이지만 **원인이 두 개 이상인 경우가 존재**하기 때문.

#### Assignment 8 & Assignment 9 투두리스트 삭제
> - TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요.
> - 투두 리스트의 삭제 기능을 구현해주세요.
    - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요.


### 과제 진행 방법
디스코드의 음성 채널, 화면 공유, 노션 팀 페이지를 통해 정보를 공유하고, 함께 팀의 역량을 향상시키는 데 집중했습니다. 

깃 컨벤션, 브랜치 관리 전략, 코드 구조 및 작성 규칙, 컴포넌트 명명 규칙 등의 코딩 표준을 도입하였으며, 이를 실제 프로젝트에 적용해보면서 발생한 의문점과 개선 사항을 지속적으로 반영하였습니다.

### 코딩 컨벤션 - 노션 팀 스페이스 페이지
[https://lean-mahogany-686.notion.site/843c479139054c8e915a2b1aa28f51c6](https://lean-mahogany-686.notion.site/843c479139054c8e915a2b1aa28f51c6)


### 프로젝트 구조
```bash
> pre-onboarding-12th-1-17
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── api
    │   ├── auth.js
    │   ├── axios.js
    │   └── todo.js
    ├── components
    │   ├── todo
    │   │   ├── AddTodo.jsx
    │   │   ├── TodoList.jsx
    │   │   └── TodoListItem.jsx
    │   └── ui
    │       ├── Button.jsx
    │       └── Input.jsx
    ├── constants
    │   ├── color.js
    │   └── style.d.js
    ├── context
    │   ├── AuthContext.jsx
    │   ├── ToastContext.jsx
    │   └── TodoContext.jsx
    ├── hooks
    │   └── useValidation.js
    ├── index.css
    ├── index.js
    ├── layout
    │   ├── Header.jsx
    │   └── PageLayout.jsx
    ├── pages
    │   ├── auth
    │   │   ├── SignInPage.jsx
    │   │   └── SignUpPage.jsx
    │   ├── notFound
    │   │   └── NotFoundPage.jsx
    │   ├── redirect
    │   │   ├── PrivateRoute.jsx
    │   │   └── PublicRoute.jsx
    │   └── todo
    │       └── TodoPage.jsx
    └── routes.js
```

