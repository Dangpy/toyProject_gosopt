/* eslint-disable react/prop-types */
//일일 날씨확인List // 일일 api + 스타일링
import styled from "styled-components";

function DayWeatherCard({ result, imgUrl }) {
  console.log;
  return (
    <StWeather>
      {result && (
        <StCard>
          <StText className="title">{result.name}</StText>
          <StImage src={imgUrl} alt={result.weather[0].description} />
          <StText>TEMP🌡️: {result.main.temp} &#x2103;</StText>
          <StText>FEELS_LIKE🥶: {result.main.feels_like} &#x2103;</StText>
          <StText>
            MIN👎/MAX_TEMP👍:{result.main.temp_min} &#x2103;/
            {result.main.temp_max} &#x2103;
          </StText>
          <StText>CLOUDS☁️: {result.clouds.all} %</StText>
        </StCard>
      )}
    </StWeather>
  );
}

export default DayWeatherCard;
const StText = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const StImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 3rem;
`;

const StWeather = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const StCard = styled.div`
  margin-left: 1rem;
  padding: 1.2rem;
  border: 0.3rem solid #252525;
  border-radius: 2rem;

  &:hover {
    background-color: #c1715f;
  }
  .title {
    font-size: 1.7rem;
    margin-bottom: 0.7rem;
  }
`;
