import Image from "next/image";
import React from "react";

interface Props {
  image: StaticImageData;
}

function HeroImg({ image }: Props) {
  return <Image src={image} alt="hero banner" placeholder="blur" />;
}

export default HeroImg;
