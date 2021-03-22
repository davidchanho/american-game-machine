import React from "react";
import { CardColumns } from "react-bootstrap";
import { photos } from "../../context";
import Section from "../_shared/section";
import InnerImageZoom from "react-inner-image-zoom";

function PhotoGallery() {
  return (
    <Section>
      <h1>Photo Gallery</h1>
      <CardColumns>
        {photos.map((photo) => {
          return <InnerImageZoom key={photo.id} {...photo} />;
        })}
      </CardColumns>
    </Section>
  );
}

export default PhotoGallery;
