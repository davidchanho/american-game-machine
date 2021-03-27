import React from "react";
import renderer from "react-test-renderer";
import SectionTitle from ".";

describe("SectionTitle", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SectionTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
