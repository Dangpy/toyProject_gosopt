/* eslint-disable react/prop-types */
import styled from "styled-components";

function Score({ score }) {
  return <StScore> {score}개나 사줄꼬얌? 대박 ~</StScore>;
}

export default Score;
const StScore = styled.p`
  font-size: 3rem;
`;
