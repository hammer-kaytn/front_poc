## 2020-10-15(목)

1. 참여하기 라우터 경로 수정(/participate -> /mission)
2. 내 미션 현황에서 상세 정보 나오게 수정

## 2020-10-14(수)

1. Likes 충족 되면 참가 못하게 수정
2. Register에서 Content 추가하게 수정
3. List 및 Mission 페이지 에서 content 나오게 수정
4. 내 참여 미션 확인하는 api 수정

## 2020-10-13(화)

1. react-elastic-carousel 모듈 다운로드 및 참가페이지 슬라이드 가능하게 수정
2. smart contract 참가비 수정
3. 각종 컴포넌트 CSS 애니메이션 효과 적용

## 2020-10-12(월)

1. 헤더 네브바에서 카이카스 연결 가능하게 수정
2. 휴대폰 본인 인증 가능하게 수정(테스트단계)

## 2020-10-11(일)

1. 미션 연결할 때 id 값 말고 missionId값으로 받도록 수정(미션 등록 후 바로 이동하기 위함.)
2. 특정 미션 조회 render로 가능하게 수정(연결된 address값 받게 하기 위함임.)
3. 참여하기 페이지 카테고리 별로 보이게 수정
4. 특정 미션 페이지에서 좋아요 +1 및 지갑 주소 기록 가능
5. txlist css 적용 가능하게 수정

## 2020-10-10(토)

1. 특정 미션 조회 router를 render 가 아닌 component 로 해야 props 가 전달된다. (id값을 전달받기 위해)
2. 미션 리스트, 특정 미션에 관한 페이지 완료.

## 2020-10-08(목)

1. header 클래스형 컴포넌트를 함수형 컴포넌트로 변경 (카이카스 로그인 관련)
2. 라우트 경로를 header에서 app으로 변경하여 관리
3. header(네비바 디자인 수정), footer, sidebar(지갑정보) css 적용

## 2020-10-07(수)

1. 블록에 기록된 미션 id 받아오기 가능
2. 좋아요, 리워드 기능 프론트 단에서 테스트(/test)

## 2020-10-06(화)

1. 등록하기 구현 to 몽고db
2. 등록하기에서 컨트랙트 함수 호출(createAdvertise)하여 블록에 데이터 저장가능하나 미션 id 받아오기 해야함
3. 리액트 js 파일을 jsx 로 수정
4. 토큰 관리 css 적용, 토큰 관리 페이지 클래스 컴포넌트에서 함수형 컴포넌트로 수정

## 2020-10-05(월)

1. sns 계정 연동 구현 (연동 및 수정)

## 2020-09-29(화)

1. 헤더(네비바) 추가
2. 마이페이지 -> 토큰관리 추가
3. 카이카스 주소를 props로 페이지마다 받아올 수 있음

## 2020-08-28(금)

1. 프론트 단에서 토큰 컨트랙트와 연동하여 스테이킹 및 언스테이킹 구현
   (수정예정사항 : 프론트 보기좋게~~)

## 2020-08-26(수)

1. 프론트 단에서 KLAY 및 TOKEN 전송하게 구현
2. 프론트 단에서 express 서버 kas api 불러와 토큰 전체 트랜잭션 리스트 보여주게 구현
   (수정예정사항 : 현재 지갑의 계정만 나오도록 할 예정)

## 2020-08-25(화)

1. 배포된 해머토큰 컨트랙트(KIP-7) 정보 불러오게 구현

## 2020-08-18(월)

1. create-react-app으로 생성
2. truffle init으로 생성
3. 프론트 페이지에서 kaikas 지갑 연동 후 지갑 주소 및 KLAY 잔액 확인 가능 까지 구현
