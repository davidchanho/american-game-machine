import React from "react";
import renderer from "react-test-renderer";
import PhotosPage from ".";

describe("PhotosPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PhotosPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
