import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ErrorPage() {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <StError>
      <StImage
        src="https://blog.kakaocdn.net/dn/b7L13j/btq8gyBEWmV/SU4bBvwwFMP1vGuzNzmaZ1/img.png"
        alt="에러페이지"
      />
      <StText>잘못된 경로에요... 홈으로...돌아가주세요....</StText>
      <StBackButton onClick={handleHomeClick}>컴백홈</StBackButton>
    </StError>
  );
}

export default ErrorPage;

const StBackButton = styled.button`
  width: 7rem;
  height: 3rem;
  margin-top: 2rem;
  background-color: #c1715f;
  border: 0.3rem solid #c1715f;
  border-radius: 3rem;
`;

const StText = styled.p`
  margin-top: 1.2rem;
  font-size: 2.5rem;
`;

const StImage = styled.img`
  width: 20rem;
  height: 20rem;
`;

const StError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
