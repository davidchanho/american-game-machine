import React from "react";
import renderer from "react-test-renderer";
import ImgCard from ".";

const test = {
  src: "",
  alt: "",
};

describe("ImgCard", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ImgCard {...test} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
