import { useState } from "react";

import styled from "styled-components";
import dice1 from "../../dies/dice_1.png";
import dice2 from "../../dies/dice_2.png";
import dice3 from "../../dies/dice_3.png";
import dice4 from "../../dies/dice_4.png";
import dice5 from "../../dies/dice_5.png";
import dice6 from "../../dies/dice_6.png";

const RoleDice = () => {
  const [randomNumber, setRandomNumber] = useState(1);
  const generateRandomNumber = () => {
    const Number = Math.floor(Math.random() * 6);
    console.log(Number);
    setRandomNumber(Number);
  };
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <RoleDiceContainer>
      <div onClick={generateRandomNumber}>
        <img src={diceImages[randomNumber]} alt="" />
      </div>
      <p>Click on dice to roll</p>
    </RoleDiceContainer>
  );
};

export default RoleDice;

const RoleDiceContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  maign-top: 48px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    img {
      cursor: pointer;
      max-width: 200px;
    }
  }
  p {
    font-size: 24px;
    fontweight: 500;
  }
`;
