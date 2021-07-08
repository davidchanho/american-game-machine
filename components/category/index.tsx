import React from "react";
import { category } from "../../data";
import Section from "../section";
import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <Section title="category">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {category.map((c, index) => (
          <CategoryItem key={c.id} {...c} delay={index * 0.2 + 0.2} />
        ))}
      </div>
    </Section>
  );
}

export default Category;
