import styled from "styled-components";

const TotalScore = () => {
  return (
    <Container>
      <h1>0</h1>
      <p>Total Score</p>
    </Container>
  );
};

export default TotalScore;

const Container = styled.div`
  max-width: 200px;
  text-align: center;

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
