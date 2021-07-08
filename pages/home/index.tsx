import React from "react";
import About from "../../containers/about";
import Category from "../../containers/category";
import Contact from "../../containers/contact";
import Layout from "../../containers/layout";

function Home() {
  return (
    <Layout>
      <About />
      <Category />
      <Contact />
    </Layout>
  );
}

export default Home;
