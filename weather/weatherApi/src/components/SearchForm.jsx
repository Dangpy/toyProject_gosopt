/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../node_modules/axios/index";
import { WEATHER_TYPE } from "../constants/weather";

//자 검색 페이지
//1. 전송 시킬때 페이지 전환-> day/:area 또는 week/:area
//2. 주간 혹은 오늘 선택시 -> 페이지 쿼리? 무튼 링크 부분이 바뀔 준비 해야함 -> 선택한 걸 확인할 수 있어야함
//3. 검색 텍스트 url로 넘겨서 해당 데이터가 뜨도록 해야함.

function SearchForm() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");
  const [selectedOption, setSelectedOption] = useState("day"); // 선택한 옵션 상태 추가
  const [result, setResult] = useState({}); // 결과 값이 넣어져 있을때 => 검색한 도시에 대한 날씨 정보 출력
  const [imgUrl, setImgUrl] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let apiUrl;
      if (selectedOption === "week") {
        apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric`;
      } else {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric`;
      }
      const response = await axios.get(apiUrl);
      const data = response.data;
      setResult(data);
      let img = "";
      if (data && data.weather && data.weather.length > 0) {
        const matchingWeatherType = WEATHER_TYPE.find((weatherType) => {
          return weatherType.description === data.weather[0].description;
        });

        if (matchingWeatherType) {
          img = matchingWeatherType.imgURL;
          console.log(img);
        }
      }
      setImgUrl(img);
      navigate(`/${selectedOption.toLowerCase()}/${area}`, {
        state: { result: data, imgUrl },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
      setResult({});
      setImgUrl("");
    }
  };

  return (
    <StWrapper>
      <form action="#" onSubmit={handleOnSubmit}>
        <select
          name="date"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="day">day</option>
          <option value="week">week</option>
        </select>
        <StSearchForm
          type="text"
          name="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Please Write in English. ➡️ suwon"
        />
        <StSubmitForm type="submit" value="Submit" onClick={handleOnSubmit} />
      </form>
    </StWrapper>
  );
}

export default SearchForm;

const StSubmitForm = styled.input`
  width: 4rem;
  height: 2rem;
  border: 0.1rem solid black;
  border-radius: 0.3rem;
  background-color: #d1d1d1;
  color: #343434;
`;

const StSearchForm = styled.input`
  width: 14rem;
  height: 2rem;
  border: 0.1rem solid black;
  border-radius: 1rem;
  background-color: #d1d1d1;
  color: #343434;
`;

const StWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;
