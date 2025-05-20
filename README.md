# 하이팅 프론트 개발

### 하이아크 개발팀 FE 이호재

## 🔗 링크

<a>https://hi-rating.com</a>

## 🐥 기획의도

홍익대학교 알고리즘 학회
학회원들의 ps의 흥미를 붙이기 위하여 자체적으로 제작한 사이트입니다.

solved.ac에서 일정 티어가 넘어가면 더 이상 점수가 오르지 않아 재미가 없습니다.

그래서 저희만의 로직을 이용하여 푼 문제별로 점수를 주는 시스템을 구현했습니다.

또한, 브론즈로 스트릭을 계속이어가는 행위도 별로 의미가 없다고 생각하여 스트릭 채우는 기준을 사용자의 티어별로 다르게 설정하여 난이도를 올렸습니다.

## 🛠 기술 스택

- **언어**: TypeScript
- **라이브러리**: React
- **상태관리**: useState, useEffect, jotai(전역)
- **스타일링**: Styled Components (CSS-in-JS)
- **API 통신**: Axios
- **구조 설계**: Atomic Design Pattern

## 🐣 기술적 설명

- FE는 atomic 패턴을 이용하여 구현을 했습니다.
- page <- block <- component <- atom 순으로 이루어진 구조를 가집니다.

- css in js 를 이용하여 css 를 구성하였고, layOut과 Color 그리고 상수는 따로 빼서 관리하였습니다.

- axios 를 사용하여 백엔드에 api 요청을 보냈고 데이터를 패칭해와서 사용자에게 렌더링 했습니다.

- 관리자 페이지의 로그인을 관리하기 위해 백엔드에게 비밀번호를 전송하고 그것이 일치하면 accessToken을 백엔드에서 받아와 localStorage에 저장했고, 관리자페이지에서 백엔드에 요청을 보낼 때마다, 헤더에 accessToken을 넣어서 보내서 권한을 확인하게 했습니다. 그리고 admin 페이지에 접근할때도 AdminGuard를 이용하여 accessToken이 없으면 접근하지 못하도록 설정했습니다.

## 🎉 트러블 슈팅

1. 데이터를 패칭해오는 동안 로딩중이라는 글씨가 잠깐 렌더링 되는데.. 이게 ux에 좋지 못한 영향을 끼친다고 생각하여 에니메이션을 넣어 로딩중...이 보이지 않게 하였습니다(네트워크가 너무 느리지 않을 때)
2. 처음에 스트릭 페이지에 모든 유저의 데이터를 전부 렌더링하게 하였는데 이러니 사용자가 자신의 정보를 찾기위해 계속 스크롤을 내려봐야해서 일정 개수씩 페이지네이션을 적용했습니다.
3. 처음엔 그냥 웹형태로만 페이지를 제작했었는데, 반응형을 추가하여 모바일환경에서 사용자가 긍정적인 경험을 할 수 있도록 하였습니다.

## 🧬 프로젝트 구조

```
.
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── favicon.png
│   └── NanumSquareNeo-Variable.ttf
├── README.md
├── src
│   ├── api
│   │   ├── AdminApi.ts
│   │   ├── AdminLogin.ts
│   │   ├── ApiClient.ts
│   │   ├── MainPageApi.ts
│   │   ├── RanikingApi.ts
│   │   ├── SearchApi.ts
│   │   └── StreakApi.ts
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   ├── 🔥.svg
│   │   ├── evenImg2.svg
│   │   ├── eventImg.png
│   │   ├── EventImg3.svg
│   │   ├── Frame 189.svg
│   │   ├── hiarc-reallogo.png
│   │   ├── Home.svg
│   │   ├── IHHHLOGO.png
│   │   ├── InputImg.png
│   │   ├── react.svg
│   │   ├── Rectangle 161125745.png
│   │   ├── solvedImg.png
│   │   └── tierImg
│   │       ├── 0.svg
│   │       ├── 1.svg
│   │       ├── 10.svg
│   │       ├── 11.svg
│   │       ├── 12.svg
│   │       ├── 13.svg
│   │       ├── 14.svg
│   │       ├── 15.svg
│   │       ├── 16.svg
│   │       ├── 17.svg
│   │       ├── 18.svg
│   │       ├── 19.svg
│   │       ├── 2.svg
│   │       ├── 20.svg
│   │       ├── 21.svg
│   │       ├── 22.svg
│   │       ├── 23.svg
│   │       ├── 24.svg
│   │       ├── 25.svg
│   │       ├── 26.svg
│   │       ├── 27.svg
│   │       ├── 28.svg
│   │       ├── 29.svg
│   │       ├── 3.svg
│   │       ├── 30.svg
│   │       ├── 31.svg
│   │       ├── 4.svg
│   │       ├── 5.svg
│   │       ├── 6.svg
│   │       ├── 7.svg
│   │       ├── 8.svg
│   │       └── 9.svg
│   ├── atoms
│   │   ├── ArrowButton.tsx
│   │   ├── CircularProgress.tsx
│   │   ├── DounutChart.tsx
│   │   ├── EventEntity.tsx
│   │   ├── HeaderInput.tsx
│   │   ├── InfoEntity.tsx
│   │   └── MediaListCell.tsx
│   ├── block
│   │   ├── adminBlock
│   │   │   ├── AdminCheckCurrent.tsx
│   │   │   ├── AdminEnd.tsx
│   │   │   ├── AdminInput.tsx
│   │   │   └── HistoryCheck.tsx
│   │   ├── DivBlock.tsx
│   │   ├── DivButton.tsx
│   │   ├── EventBlock.tsx
│   │   ├── RankingContainer.tsx
│   │   └── StreakBox.tsx
│   ├── components
│   │   ├── adminComponents
│   │   │   ├── AdminCheck.tsx
│   │   │   ├── AdminCheckExplain.tsx
│   │   │   └── AdminInputBox.tsx
│   │   ├── ChartComponent.tsx
│   │   ├── DivAndRank.tsx
│   │   ├── DivNameTack.tsx
│   │   ├── DivToggleBar.tsx
│   │   ├── EventButton.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HitingBox.tsx
│   │   ├── IndividualBlock.tsx
│   │   ├── Modal.tsx
│   │   ├── RankingContainerExplainBar.tsx
│   │   ├── RankingEntity.tsx
│   │   ├── SearchedHitingEntity.tsx
│   │   ├── SearchedStreakEnity.tsx
│   │   ├── SolvedButton.tsx
│   │   ├── StreakBoxArrowButton.tsx
│   │   ├── StreakEntity.tsx
│   │   └── TierButton.tsx
│   ├── guards
│   │   └── AdminGuard.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── page
│   │   ├── AdminLoginPage.tsx
│   │   ├── AdminPage.tsx
│   │   ├── DivPage.tsx
│   │   ├── MainPage.tsx
│   │   ├── SearchPage.tsx
│   │   └── StreakPage.tsx
│   ├── store
│   │   └── Atom.ts
│   ├── ui
│   │   ├── AdminExplain.ts
│   │   ├── AdminExplain.tsx
│   │   ├── CheckAdminName.ts
│   │   ├── Color.tsx
│   │   ├── FontStyle.tsx
│   │   ├── Layout.tsx
│   │   ├── MockData.ts
│   │   ├── MockPercent.ts
│   │   ├── NumberToStreakColor.ts
│   │   ├── NumberToTear.ts
│   │   └── TierImg.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.node.tsbuildinfo
├── vercel.json
└── vite.config.ts

```
