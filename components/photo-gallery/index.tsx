import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { photos } from "../../context";
import Grid from "../_shared/grid";
import Section from "../_shared/section";

function PhotoGallery() {
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

export default PhotoGallery;
