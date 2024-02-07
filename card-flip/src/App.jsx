import "./App.css";
import Header from "./component/Header";
import CardBody from "./component/CardBody";

function App() {
  //필요한 기능 1. 게임 난이도 선택
  // 2. 정답 노출 > useState
  // 3. 카드 선택
  // 4. 카드 배열 랜덤
  // 상수파일 -> 데이터 랜더링

  //심화 리셋 버튼 클릭 시 랜덤 => 리셋에 shuffleCards()함수 온클릭으로 넣기
  //컴포 분리 => 헤더->한 번더 분리? (제목/리셋 버튼/ 스코어) =>  EasyMode (난이도 선택/ card리스트)
  return (
    <>
      <Header />
      <CardBody />
    </>
  );
}

export default App;
