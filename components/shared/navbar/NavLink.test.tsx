import React from "react";
import renderer from "react-test-renderer";
import NavLink from "./NavLink";

const test = {
  children: "children",
  href: "children",
};

describe("NavLink", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NavLink {...test} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
