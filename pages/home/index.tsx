import React from "react";
import About from "../../containers/about";
import Category from "../../containers/category";
import Contact from "../../containers/contact";
import Hero from "../../containers/hero";
import MainTemplate from "../../templates/MainTemplate";

function Home() {
  return (
    <MainTemplate>
      <Hero />
      <About />
      <Category />
      <Contact />
    </MainTemplate>
  );
}

export default Home;
