import React from "react";
import {Card} from "./styles";
import { Props } from "./types";
import Image from "next/image";

function Service({ src, alt, title, description }: Props) {
  return (
    <Card>
      <Image
        src={src}
        alt={alt}
        title={title}
        aria-hidden={true}
        width={350}
        height={350}
      />
      <Card.Title>{title}</Card.Title>
      <Card.Body>{description}</Card.Body>
    </Card>
  );
}

export default Service;
