import React from "react";
import renderer from "react-test-renderer";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ContactForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
