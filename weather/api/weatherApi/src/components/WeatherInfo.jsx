import DayWeatherCard from "./DayWeatherCard";
import { useLocation, useParams } from "react-router-dom";
import WeekWeatherCard from "./WeekWeatherCard";
import styled from "styled-components";

function WeatherInfo() {
  const location = useLocation();
  const { result, imgUrl } = location.state || {};
  const { area } = useParams();
  const isWeekForecast = result && result.list && result.list.length > 0;

  return (
    <div>
      <StWeatherInfoTitle>Weather Information</StWeatherInfoTitle>
      {isWeekForecast ? (
        <WeekWeatherCard result={result} imgUrl={imgUrl} area={area} />
      ) : (
        <DayWeatherCard result={result} imgUrl={imgUrl} area={area} />
      )}
    </div>
  );
}

export default WeatherInfo;

const StWeatherInfoTitle = styled.h1`
  margin-top: 2rem;
`;
