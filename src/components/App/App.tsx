import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";
import { ShopContext } from "../Context/useContext";
import { useReducer } from "react";
import { add, erase, initialState, remove, save, shopReducer, update } from "../Reducer";
import { Product } from "../../models";
import { Wishlist } from "../Wishlist";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  

  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch(add(updatedCart));
  };

  const removeItem = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch(remove(updatedCart));
  };

  const updatePrice = (products: [] = []) => {
    let total = 0;
    products.forEach(
      (product: { price: number }) => (total = total + product.price)
    );

    dispatch(update(total));
  };

  const addToWL = (product: Product) => {
    const updatedCart = state.saved.concat(product);
        dispatch(save(updatedCart));
  };

  const removeToWL = (product: Product) => {
    const updatedCart = state.saved.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );

    dispatch(erase(updatedCart));
  };





  
  const value = {
    total: state.total,
    products: state.products,
    saved: state.saved,
    addToCart,
    removeItem,
    addToWL,
    removeToWL
  };
  return (
    <ShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Wrapper>
    </ShopContext.Provider>
  );
};
