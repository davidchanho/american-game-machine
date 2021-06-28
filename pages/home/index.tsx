import React from "react";
import About from "../../components/home/about";
import Category from "../../components/home/category";
import Contact from "../../components/home/contact";
import Solutions from "../../components/home/solutions";

export default function HomePage() {
  return (
    <>
      {/* <BackToTop /> */}
      {/* <About /> */}
      <Category />
      <Solutions />
      <Contact />
    </>
  );
}
