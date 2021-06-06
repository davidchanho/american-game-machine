import Image from "next/image";
import React from "react";

function HeroImg() {
  return (
    <Image
      src="/img/machines/hero-banner.png"
      alt="hero banner"
      layout="responsive"
      sizes="(max-width: 600px) 180px,
            240px"
      width={180}
      height={240}
    />
  );
}

export default HeroImg;
