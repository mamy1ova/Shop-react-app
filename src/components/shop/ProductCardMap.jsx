import React from "react";
import ProductCards from "./ProductCards";
import styled from "styled-components";

const ProductCardMap = ({ itemCards }) => {
  return (
    <CardContainer>
      {itemCards.map((item) => {
        return <ProductCards {...item} key={item.id} />;
      })}
    </CardContainer>
  );
};

export default ProductCardMap;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
