/* eslint-disable react/prop-types */
import { CARD_LIST } from "../../constants/CARD_LIST";
import SingleCard from "./SingleCard";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Score from "./Score";

function NormalMode() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null); // 아직 선택 받지 못한 상황이기에 null로!
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    shuffleCards();
  }, []);

  //카드를 랜덤으로 섞고 이지모드인 5번째까지 자름
  const shuffleCards = () => {
    const normalMode = [...CARD_LIST.slice(0, 7), ...CARD_LIST.slice(0, 7)]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));
    setCards(normalMode);
    setScore(0);
  };

  //첫번째 카드와 두번째 카드 선택 체크 이벤트!
  const handleCardChoice = (item) => {
    if (firstChoice === null) {
      setFirstChoice(item);
    } else if (secondChoice === null) {
      setSecondChoice(item);
    }
  };

  // handleCardChoice 카드 일치하지 않음 오류 ! 해결하기 위한 콘솔 확인 코드
  useEffect(() => {
    console.log("firstChoice:", firstChoice);
    console.log("secondChoice:", secondChoice);
  }, [firstChoice, secondChoice]);

  //카드 값 2개 비교하기 useEffect 사용
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.image === secondChoice.image) {
        //카드 리스트에 우선 matched : false로 해놓은 다음 , 첫번째 카드와 두번째 카드가 맞게 매칭되면 true로 바꿔주도록 함!
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === firstChoice.image) {
              setScore(score + 1);
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000); // 초기화 전에 setTimeout를 걸어 약간의 지연시간을 둠!(아니면 초고속 뒤집힘)
      }
    }
  }, [firstChoice, secondChoice]);

  console.log(cards);

  //카드 선택 초기화하기
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  return (
    <>
      <Score score={score} />
      <StCardContainer>
        <StCard>
          {cards.map((item) => (
            <SingleCard
              key={item.id}
              item={item}
              handleCardChoice={handleCardChoice}
              flipped={
                item === firstChoice || item === secondChoice || item.matched
              } // 카드가 뒤집히는 경우 => 1. 첫번째카드 고를때, 2. 두번째 카드 고를때, 3. 카드 두장이 일치할 때
              disabled={disabled}
            />
          ))}
        </StCard>
      </StCardContainer>
    </>
  );
}

export default NormalMode;

const StCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
`;

const StCardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
