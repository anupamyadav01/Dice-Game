import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [selectNumber, setSelectNumber] = useState();
  return (
    <SelectNumberContainer>
      <div>
        {numbers.map((item, i) => (
          <Box
            onClick={() => setSelectNumber(item)}
            key={i}
            isSelected={item === selectNumber}
          >
            {item}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </SelectNumberContainer>
  );
};

export default NumberSelector;

const SelectNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    text-align: right;
  }
`;

const Box = styled.div`
  border: 1px solid red;

  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  fontweight: 700;
  font-size: 24px;
  place-item: center;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
