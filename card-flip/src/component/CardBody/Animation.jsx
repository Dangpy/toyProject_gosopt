import Money from "../../assets/Money.png";
import styled, { keyframes } from "styled-components";

function Animation() {
  return (
    <StContainer>
      <div className="moneyContainer">
        <StMoney1 className="moneyOne"></StMoney1>
      </div>

      <div className="moneyContainer">
        <StMoney2 className="moneyTwo"></StMoney2>
      </div>

      <div className="moneyContainer">
        <StMoney3 className="moneyThree"></StMoney3>
      </div>

      <div className="moneyContainer">
        <StMoney4 className="moneyFour"></StMoney4>
      </div>
    </StContainer>
  );
}

export default Animation;
const StContainer = styled.div``;
const move1 = keyframes`
  0% {transform:translateY(0px) scale(0) rotateZ(0)}
  50% {transform:translateY(0px) scale(1.5) rotateZ(90deg)}
  100% {transform:translateY(0px)scale(0) rotateZ(0)}
`;

const move2 = keyframes`
  0% {transform:translateX(0) scale(0) rotateZ(0)}
  50% {transform:translateX(70px) scale(1) rotateZ(-360deg)}
  100% {transform:translateX(0) scale(0) rotateZ(0)}
`;

const move3 = keyframes`
  0% {transform:translateX(0) translateY(0) scale(0) rotateZ(0)}
  50% {transform:translateX(-50px) translateY(-30px) scale(1.2) rotateZ(135deg)}
  100% {transform:translateX(0) translateY(0) scale(0) rotateZ(0)}
`;

const move4 = keyframes`
  0% {transform:translateX(0) translateY(0) scale(0)}
  50% {transform:translateX(30px) translateY(-50px) scale(1) rotateZ(85deg)}
  100% {transform:translateX(0) translateY(0) scale(0)}
`;

const StMoney1 = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url(${Money});
  background-size: 100%;
  background-color: transparent;
  position: absolute;
  top: 200px;
  left: 40.5%;
  opacity: 1;
  animation: ${move1} 2s 5ms infinite;
`;

const StMoney2 = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url(${Money});
  background-size: 100%;
  background-color: transparent;
  position: absolute;
  top: 200px;
  left: 40.5%;
  opacity: 1;
  animation: ${move2} 2s 5ms infinite;
`;

const StMoney3 = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url(${Money});
  background-size: 100%;
  background-color: transparent;
  position: absolute;
  top: 200px;
  left: 40.5%;
  opacity: 1;
  animation: ${move3} 2s 5ms infinite;
`;

const StMoney4 = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url(${Money});
  background-size: 100%;
  background-color: transparent;
  position: absolute;
  top: 200px;
  left: 40.5%;
  opacity: 1;
  animation: ${move4} 2s 5ms infinite;
`;
