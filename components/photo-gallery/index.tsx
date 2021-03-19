import React from "react";
import { Card } from "react-bootstrap";
import { photos } from "../../context";
import Gallery from "./styles";

function PhotoGallery() {
  return (
    <Gallery>
      {photos.map((photo) => {
        return (
          <Card key={photo.id}>
            <img src={photo.src} />
          </Card>
        );
      })}
    </Gallery>
  );
}

export default PhotoGallery;
