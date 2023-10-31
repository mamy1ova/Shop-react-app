import React from "react";
import styled from "styled-components";

const ButtonAdded = () => {
  return <ButtonCard>Added</ButtonCard>;
};

export default ButtonAdded ;

const ButtonCard = styled.button`
  background-color: #56d256;
  color: #fff;
  font-weight: bold;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;
