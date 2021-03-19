import React from "react";
import { photos } from "../../context";
import ImgCard from "../_shared/card/img-card";
import Gallery from "./styles";

function PhotoGallery() {
  return (
    <Gallery>
      {photos.map(({ id, src }) => {
        return <ImgCard key={id} src={src} />;
      })}
    </Gallery>
  );
}

export default PhotoGallery;
