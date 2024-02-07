/* eslint-disable react/prop-types */
import GiftBox from "../../assets/GiftBox.png";
import styled from "styled-components";

function SingleCard({ item, handleCardChoice, flipped, disabled }) {
  const handleCardClick = () => {
    if (!disabled) {
      handleCardChoice(item);
    }
  };
  return (
    <StWrapper>
      <StCardFlex>
        <StFrontImage
          className="front"
          src={item.image}
          alt={item.alt}
          style={{ transform: flipped ? "rotateY(0deg)" : "rotateY(90deg)" }} // props로 flipped를 받아서 그 상태에 따라 로테이트 값을 바꿔준다!
        />
        <StBackImage
          className="back"
          src={GiftBox}
          alt="카드 뒷면"
          onClick={handleCardClick}
          style={{ transform: flipped ? "rotateY(90deg)" : "rotateY(0deg)" }}
        />
      </StCardFlex>
    </StWrapper>
  );
}

export default SingleCard;

const StWrapper = styled.div`
  position: relative;
`;

const StCardFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const StBackImage = styled.img`
  width: 20rem;
  height: 20rem;
  transition: all ease-in 0.2s;
  transition-delay: 0s;
`;

const StFrontImage = styled.img`
  position: absolute;
  width: 20rem;
  height: 20rem;
  background-color: ${(props) => props.theme.coinWhite};
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
`;
