import PropTypes from "prop-types";

import styled from "styled-components";
import Dies from "../../assets/dices.png";

const StartGame = ({ toggleGamePlay }) => {
  return (
    <Container>
      <div className="image">
        <img
          src={Dies}
          alt="sdfg"
          onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        />
      </div>
      <div>
        <h1 className="title">Dice Game</h1>
        <Button onClick={toggleGamePlay}>Start Game</Button>
      </div>
    </Container>
  );
};

StartGame.propTypes = {
  toggleGamePlay: PropTypes.func,
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  hight: 100vh;
  margin: 12vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: end;

  .title {
    font-size: 96px;
    white-space: nowrap;
  }
  .image {
    max-width: 90%px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
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
