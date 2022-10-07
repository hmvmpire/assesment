import React from "react";
import { Body } from "../Components/body/body";
import { Header } from "../Components/Header/Header";
import { Products } from "../Components/product/product";
import { Footer } from "../Components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};
