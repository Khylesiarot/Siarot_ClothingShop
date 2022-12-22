import { useContext, useState } from "react";
import { Product } from "../../models";
import { CheckoutCard } from "../CheckouCard";

import { ShopContext } from "../Context/useContext";
import { Labels, PriceContainer, ProductsWrapper, Title, Total, TotalAmount, TotalAmountLabel, TotalItems, TotalItemsLabel } from "./Checkout.styled";

export const Checkout = () => {
  const { products, total, totalitems } = useContext(ShopContext);
 




  return (
    <>
    <Title>
        Items ready for checkout
    </Title>
    <ProductsWrapper>
        {products.map((product: Product, index) => (
          <CheckoutCard {...product} key={index} />
        ))}
      </ProductsWrapper>
      <Total>
      <Labels>
          <TotalAmountLabel>Total Amount:</TotalAmountLabel>
          <TotalItemsLabel>Total Items:</TotalItemsLabel>
        </Labels>
        <PriceContainer>
          <TotalAmount>${total}.00</TotalAmount>
          <TotalItems>{totalitems}</TotalItems>
        </PriceContainer>
      </Total>

    </>
  );
};
