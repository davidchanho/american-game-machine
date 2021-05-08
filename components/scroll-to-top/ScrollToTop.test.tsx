import React from "react";
import renderer from "react-test-renderer";
import ScrollToTop from ".";

describe("ScrollToTop", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ScrollToTop />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
