import React from "react";
import styled from "styled-components";
import ButtonRemove from "../UI/ButtonRemove";

export const ProductItem = ({
  name,
  price,
  src,
  alt,
  onAddProduct,
  id,
  onRemoveProduct,
  quantity,
  onDecProduct,
}) => {
  return (
    <ProductContainer>
      <ProductInfo>
        <ProductImage src={src} alt={alt} />
        <ProductName>{name}</ProductName>
        <ProductPrice>$ {price} </ProductPrice>
        <Quntity>
          <button onClick={() => onDecProduct(id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onAddProduct(id)}>+</button>
        </Quntity>
        <ButtonRemove onRemoveProduct={onRemoveProduct} id={id} />
      </ProductInfo>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #cac9c9;
  width: 1000px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 122px;
  flex: 1;
  cursor: pointer;
  padding: 30px;
  margin-left: 45px;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  font-size: 16px;
`;

const ProductImage = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

const Quntity = styled.div`
  & button {
    font-weight: bold;
    background-color: #f4cbb3;
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 6px;
  }
  & button:hover {
    background-color: black;
    color: #fff;
  }
`;
