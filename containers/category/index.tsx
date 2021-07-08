import React from "react";
import { category } from "../../data";
import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <>
      {category.map((c, index) => (
        <CategoryItem key={c.id} {...c} delay={index * 0.2 + 0.2} />
      ))}
    </>
  );
}

export default Category;
