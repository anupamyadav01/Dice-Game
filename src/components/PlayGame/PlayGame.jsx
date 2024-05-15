import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import { useState } from "react";
import RoleDice from "./RoleDice";
import ShowRules from "../ShowRules/ShowRules";

const PlayGame = () => {
  const [selectNumber, setSelectNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(1);
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = () => {
    const Number = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(Number);
  };

  const startGame = () => {
    if (!selectNumber) {
      setError("You have not selected any number!!");
      return;
    } else {
      generateRandomNumber();
      if (selectNumber === randomNumber) {
        setScore((prevScore) => prevScore + selectNumber);
      } else {
        setScore((prevScore) => prevScore - selectNumber);
      }
      setSelectNumber(undefined);
    }
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <Main className="main">
      <div>
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RoleDice
        startGame={startGame}
        randomNumber={randomNumber}
        setRandomNumber={setRandomNumber}
        generateRandomNumber={generateRandomNumber}
      />
      <Div>
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </Div>
      {showRules ? <ShowRules /> : null}
    </Main>
  );
};

export default PlayGame;

const Div = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Main = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  padding: 10px 50px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-weight: semibold;
  cursor: pointer;
  font-size: 20px;
  border: 1px solid transparent;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    transition: all 0.3s ease-in-out;
  }
`;
const OutlineButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: 1px solid black;
  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
  }
`;
