import React from "react";
import { solutions } from "../../../context";
import Section from "../../shared/section";
import SolutionItem from "./SolutionItem";

function Solutions() {
  return (
    <Section title="solutions">
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {solutions.map((solution, index) => (
          <SolutionItem
            key={`solution-${solution.id}`}
            {...solution}
            delay={index * 0.2 + 0.2}
          />
        ))}
      </div>
    </Section>
  );
}

export default Solutions;
