import React from "react";
import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";
import { ProductItem } from "./ProductItem";

export const Products = ({
  products,
  onAddProduct,
  onRemoveProduct,
  onDecProduct,
  totalPrices,
}) => {
  return (
    <ProductsContainer>
      <Title>Товары в магазине:</Title>
      <div>
        <ul>
          <li>Product</li>
          <li>Product Name</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Remove</li>
        </ul>
      </div>
      <div>
        {products.map((item) => {
          return (
            <ProductItem
              {...item}
              key={item.id}
              onAddProduct={onAddProduct}
              onDecProduct={onDecProduct}
              onRemoveProduct={onRemoveProduct}
            />
          );
        })}
      </div>
      <ShoppingCartIcon />
      <h1>
        Total: <span>${totalPrices}</span>
      </h1>
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 1015px;
  padding: 20px;
  & ul {
    display: flex;
    flex-direction: row;
    gap: 7.3rem;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
    border: 1px solid #cac9c9;
    width: 1020px;
  }
  & ul > li {
    list-style: none;
    font-weight: bold;
    font-size: 16px;
  }
  & h1 > span {
    color: #f57575;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ShoppingCartIcon = styled(FaShoppingBasket)`
  font-size: 36px;
`;
