import React from "react";
import { Card } from "react-bootstrap";
import renderer from "react-test-renderer";
import Grid from ".";

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
