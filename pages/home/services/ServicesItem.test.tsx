import React from "react";
import renderer from "react-test-renderer";
import ServicesItem from "./ServicesItem";

const test = { src: "", alt: "", title: "", description: "" };

describe("ServicesItem", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ServicesItem {...test} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
