import React from "react";
import { category } from "../../data";
import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <div id="category">
     {category.map((c, index) => (
        <CategoryItem key={c.id} c={c} delay={index * 0.2 + 0.2} />
      ))} 
    </div>
  );
}

export default Category;
