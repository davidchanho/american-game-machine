import Image from "next/image";
import React from "react";
import Card from "../card";

function ImgCard({ src, alt }) {
  return (
    <Card>
      <Image src={src} alt={alt} width={300} height={300} />
    </Card>
  );
}

export default ImgCard;
