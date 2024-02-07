/* eslint-disable react/prop-types */
import { useState } from "react";
import ResetButton from "./Reset";
import LevelBtn from "./CardBody/LevelBtn";

function CardBody() {
  const [resetCounter, setResetCounter] = useState(0);

  const handleResetClick = () => {
    setResetCounter(resetCounter + 1);
  };

  return (
    <div>
      <LevelBtn resetCounter={resetCounter} />
      <ResetButton onClick={handleResetClick} />
    </div>
  );
}

export default CardBody;
