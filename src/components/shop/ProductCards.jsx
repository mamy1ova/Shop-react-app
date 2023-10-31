import React from "react";
import styled from "styled-components";
import ButtonAdded from "../UI/ButtonAdded";

const ProductCards = ({ name, src, alt, totalPrice}) => {
  return (
    <CardsContainer>
      <Cards>
        <CardImage src={src} alt={alt} />
        <p>{name}</p>
        <h3>Total price: <span>${totalPrice}</span> </h3>
        <ButtonAdded />
      </Cards>
    </CardsContainer>
  );
};

export default ProductCards;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 40px;

  & p {
    margin-bottom: 10px;
  }
  & h3 {
    color: #828181;
  }
  & h3 > span {
    color: #f57575;
  }
`;
const CardImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
`;

const Cards = styled.div`
  border: 2px solid;
  border-color: #e3e3e3;
  border-radius: 8px;
  text-align: center;
  padding: 60px 60px 38px 60px ;
  height: 290px;
  margin: 43px;
  &:hover {
    box-shadow: 0.5px 2.3px 22.6px rgba(114, 114, 114, 0.247),
      1.3px 6.3px 62.6px rgba(109, 109, 109, 0.247);
    transform: scale(1.02);
    transition: 0.5s;
    cursor: pointer;
  }
`;
