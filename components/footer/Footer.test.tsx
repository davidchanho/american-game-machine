import React from "react";
import renderer from "react-test-renderer";
import Footer from ".";

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer>test</Footer>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
