import React from "react";
import renderer from "react-test-renderer";
import Grid from ".";
import Card from "../card";

describe("Grid", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Grid>
          <Card>test</Card>
        </Grid>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
