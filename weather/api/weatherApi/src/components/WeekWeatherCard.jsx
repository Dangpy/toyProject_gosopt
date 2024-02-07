/* eslint-disable react/prop-types */
//주간 날씨 확인List
import styled from "styled-components";
import { WEATHER_TYPE } from "../constants/weather";

function WeekWeatherCard({ result }) {
  console.log(result);
  const dateOptions = { month: "numeric", day: "numeric" };

  const dateList = Array.from({ length: 5 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return (
      <div key={index}>{date.toLocaleDateString("ko-KR", dateOptions)}</div>
    );
  });
  return (
    <StWeatherList>
      {result.list.slice(0, 5).map((weekResult, index) => {
        const matchingWeatherType = WEATHER_TYPE.find((weatherType) => {
          return weatherType.description === weekResult.weather[0].description;
        });
        const imgUrl = matchingWeatherType ? matchingWeatherType.imgURL : "";

        return (
          <StCardList key={index}>
            <StText className="date">{dateList[index]}</StText>
            {weekResult.weather && weekResult.weather[0] && (
              <StImage src={imgUrl} alt={weekResult.weather[0].description} />
            )}
            <StText>TEMP🌡️: {weekResult.main.temp} &#x2103;</StText>
            <StText>FEELS_LIKE🥶: {weekResult.main.feels_like} &#x2103;</StText>
            <StText>
              MIN👎/MAX_TEMP👍: {weekResult.main.temp_min} &#x2103;/
              {weekResult.main.temp_max} &#x2103;
            </StText>
            <StText>CLOUDS☁️: {weekResult.clouds.all} %</StText>
          </StCardList>
        );
      })}
    </StWeatherList>
  );
}

export default WeekWeatherCard;

const StText = styled.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const StImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 3rem;
`;

const StWeatherList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const StCardList = styled.div`
  margin-left: 1rem;
  padding: 1.2rem;
  border: 0.3rem solid #252525;
  border-radius: 2rem;

  &:hover {
    background-color: #c1715f;
  }
  .date {
    font-size: 1.7rem;
    margin-bottom: 0.7rem;
  }
`;
