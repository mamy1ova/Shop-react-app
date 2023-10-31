import React, { useReducer, useEffect } from "react";
import { Products } from "./shop/Products";
import ProductCardMap from "./shop/ProductCardMap";

const initialData = JSON.parse(localStorage.getItem("products")) || {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 99,
      src: "https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png",
      alt: "",
      quantity: 0,
    },
    {
      id: 2,
      name: "Product 2",
      price: 15,
      src: "https://static.vecteezy.com/system/resources/previews/008/530/509/original/kiwi-fruit-cutout-file-png.png",
      alt: "",
      quantity: 0,
    },
    {
      id: 3,
      name: "Product 3",
      price: 86,
      src: "https://freepngimg.com/save/19219-strawberry-png-images/1000x1000",
      alt: "",
      quantity: 0,
    },
  ],
  cart: [],
  totalQuantity: 0,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productAdd = state.products.find((item) => {
        return item.id === action.payload;
      });
      if (productAdd) {
        productAdd.quantity += 1;
        const itemInCard = state.cart.find((item) => {
          return item.id === productAdd.id;
        });
        if (itemInCard) {
          itemInCard.quantity += 1;
          itemInCard.totalPrice = itemInCard.quantity * itemInCard.price;
        } else {
          state.cart.push({
            ...productAdd,
            quantity: 1,
            totalPrice: productAdd.price,
          });
        }
        state.totalQuantity += 1;

        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return state;
    case "SUBTRACTION":
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }
          if (state.totalQuantity > 0) {
            state.totalQuantity -= 1;
          }
        }
        return item;
      });
      const updatedProduct = state.products.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }
          if (state.totalQuantity > 0) {
            state.totalQuantity -= 1;
          }
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart,
        products: updatedProduct,
      };
    case "REMOVE":
      const removedProductsCard = state.cart.filter(
        (item) => item.id !== action.payload
      );
      const removeQuantity = state.products.map((item) =>
        item.id === action.payload ? { ...item, quantity: 0 } : { ...item }
      );
      return {
        ...state,
        cart: removedProductsCard,
        products: removeQuantity,
      };

    default:
      return state;
  }
};

const ProductContainer = () => {
  const [products, dispatch] = useReducer(productReducer, initialData);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProductHandler = (id) => {
    dispatch({ type: "ADD_PRODUCT", payload: id });
  };

  const decPtoductHandler = (id) => {
    dispatch({ type: "SUBTRACTION", payload: id });
  };

  const removeProductHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const totalPrices = products.cart.reduce(
    (acc, current) => acc + current.totalPrice,
    0
  );

  return (
    <div>
      <ProductCardMap itemCards={products.cart} />
      <Products
        products={products.products}
        onAddProduct={addProductHandler}
        onDecProduct={decPtoductHandler}
        onRemoveProduct={removeProductHandler}
        totalPrices={totalPrices}
      />
    </div>
  );
};

export default ProductContainer;
