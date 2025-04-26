import React from "react";
import Header from "../../layouts/header/Header";
import Hero from "./Hero";
import MiddleContainer from "./MiddleContainer";
import Footer from "../../layouts/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />;
      <MiddleContainer />
      <Footer />
    </>
  );
};

export default Home;