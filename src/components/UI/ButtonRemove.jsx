import React from "react";
import styled from "styled-components";

const ButtonRemove = ({ onRemoveProduct, id }) => {
  return <ButtonCard onClick={() => onRemoveProduct(id)}>Remove</ButtonCard>;
};

export default ButtonRemove;

const ButtonCard = styled.button`
  background-color: #d25a56;
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
