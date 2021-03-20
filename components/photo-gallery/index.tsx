import React from "react";
import { CardColumns } from "react-bootstrap";
import { photos } from "../../context";
import ImgCard from "../_shared/card/img-card";
import Section from "../_shared/section";

function PhotoGallery() {
  return (
    <Section>
      <CardColumns>
        {photos.map(({ id, src }) => {
          return <ImgCard key={id} src={src} />;
        })}
      </CardColumns>
    </Section>
  );
}

export default PhotoGallery;
