/* eslint-disable react/prop-types */
import { useState } from "react";
import EasyMode from "./EasyMode";
import NormalMode from "./NormalMode";
import HardMode from "./HardMode";
import styled from "styled-components";

function LevelBtn({ resetCounter }) {
  const [mode, setMode] = useState("easy");

  const handleLevelChange = (selectedMode) => {
    setMode(selectedMode);
  };

  let selectedLevel;
  switch (mode) {
    case "easy":
      selectedLevel = <EasyMode resetCounter={resetCounter} />;
      break;
    case "normal":
      selectedLevel = <NormalMode resetCounter={resetCounter} />;
      break;
    case "hard":
      selectedLevel = <HardMode resetCounter={resetCounter} />;
      break;
    default:
      selectedLevel = <EasyMode resetCounter={resetCounter} />;
  }
  return (
    <div>
      <StButtonContainer>
        <StButton
          className="easyMode"
          onClick={() => handleLevelChange("easy")}
          style={
            mode === "easy"
              ? { backgroundColor: "#ead8bb", color: "#7d8473" }
              : null
          }
        >
          오다주웠다MODE
        </StButton>
        <StButton
          className="normalMode"
          onClick={() => handleLevelChange("normal")}
          style={
            mode === "normal"
              ? { backgroundColor: "#74ab7e", color: "#e2eee4" }
              : null
          }
        >
          이쯤이야MODE
        </StButton>
        <StButton
          className="hardMode"
          onClick={() => handleLevelChange("hard")}
          style={
            mode === "hard"
              ? { backgroundColor: "#eed18a", color: "#f4f3e4" }
              : null
          }
        >
          플-렉스MODE
        </StButton>
      </StButtonContainer>

      {selectedLevel}
    </div>
  );
}

export default LevelBtn;

const StButton = styled.button`
  padding: 1rem 3rem;
  border-radius: 1rem;
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  .hardMode {
    border: 0.5rem double ${(props) => props.theme.darkYellow};
    background-color: ${(props) => props.theme.whiteYellow};
    color: ${(props) => props.theme.textYellow};
    :hover {
      color: ${(props) => props.theme.whiteYellow};
      background-color: ${(props) => props.theme.mainYellow};
    }
  }

  .normalMode {
    border: 0.5rem double ${(props) => props.theme.darkGreen};
    background-color: ${(props) => props.theme.whiteGreen};
    color: ${(props) => props.theme.textGreen};
    :hover {
      color: ${(props) => props.theme.whiteGreen};
      background-color: ${(props) => props.theme.midGreen};
    }
  }

  .easyMode {
    border: 0.5rem double ${(props) => props.theme.darkOrange};
    background-color: ${(props) => props.theme.whiteOrange};
    color: ${(props) => props.theme.textOrange};
    :hover {
      color: ${(props) => props.theme.whiteOrange};
      background-color: ${(props) => props.theme.mainOrange};
    }
  }
`;
