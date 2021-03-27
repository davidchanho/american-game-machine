import React from "react";
import renderer from "react-test-renderer";
import ContactsPage from ".";

describe("ContactsPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ContactsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
