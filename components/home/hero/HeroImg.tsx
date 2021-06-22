import Image from "next/image";
import React from "react";
import hero from "../../../public/img/machines/hero-banner.webp";

function HeroImg() {
  return <Image src={hero} alt="hero banner" placeholder="blur" s-maxage={3000} />;
}

export default HeroImg;
