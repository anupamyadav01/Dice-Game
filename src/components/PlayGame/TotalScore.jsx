import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  );
};

export default TotalScore;

const Container = styled.div`
  max-width: 200px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 90px;
  }
  p {
    font-size: 24px;
    line-height: 36px;
  }
`;
