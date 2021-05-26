import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { photoMachines } from "../../context";
import Grid from "../../components/photos/grid";

function PhotosPage() {
  return (
    <Grid>
      {photoMachines.map((photo) => (
        <InnerImageZoom
          {...photo}
          key={photo.id}
          zoomScale={1.2}
          width={600}
          height={600}
        />
      ))}
    </Grid>
  );
}

export default PhotosPage;
