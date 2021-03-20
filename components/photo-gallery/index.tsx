import React from "react";
import { CardColumns } from "react-bootstrap";
import { photos } from "../../context";
import ImgCard from "../_shared/img-card";
import Section from "../_shared/section";

function PhotoGallery() {
  return (
    <Section>
      <h1>Photo Gallery</h1>
      <CardColumns>
        {photos.map((photo) => {
          return <ImgCard key={photo.id} {...photo} />;
        })}
      </CardColumns>
    </Section>
  );
}

export default PhotoGallery;
