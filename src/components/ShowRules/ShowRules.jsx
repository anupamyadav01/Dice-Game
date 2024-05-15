import styled from "styled-components";
const ShowRules = () => {
  return (
    <Rules>
      <h1>How to play dice game.</h1>
      <div>
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        <p>
          After click on dice if selected number is equall to dice number you
          get same points as dice.
        </p>
        <p>
          If you get wrong guess same number you have selected will be deducted
          from score.
        </p>
      </div>
    </Rules>
  );
};

export default ShowRules;

const Rules = styled.div`
  margin-block: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: start;
    margin-bottom: 10px;
    margin-left: 19%;
  }

  div {
    text-align: start;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
