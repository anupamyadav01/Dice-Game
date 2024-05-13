import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";

const PlayGame = () => {
  return (
    <Main className="main">
      <TotalScore />
      <NumberSelector />
    </Main>
  );
};

export default PlayGame;

const Main = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
`;
