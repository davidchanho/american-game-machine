import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import Section from "../../components/section";
import { photos } from "../../context";
import Grid from "./components/grid";

function PhotosPage() {
  return (
    <Section>
      <h1>Photo Gallery</h1>

      <Grid>
        {photos.map((photo) => {
          return (
            <InnerImageZoom
              {...photo}
              key={photo.id}
              zoomScale={1.2}
              width={600}
              height={600}
            />
          );
        })}
      </Grid>
    </Section>
  );
}

export default PhotosPage;
