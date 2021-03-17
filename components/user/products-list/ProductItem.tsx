import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import { IProduct } from "../../../context";
import MultiItemContainer from "../../shared/multi-item-container";

import Games from "./Games";
import Materials from "./Materials";
import Overview from "./Overview";
import QuoteBtn from "./QuoteBtn";
import Screens from "./Screens";

function ProductItem({
  label,
  materials,
  overview,
  screens,
  games,
  description,
  image,
}: IProduct) {
  return (
    <MultiItemContainer>
      <Card>
        <Image
          src={image}
          alt={label}
          aria-hidden={true}
          width="100%"
          height="100%"
        />
      </Card>
      <Card>
        <h3 className="text-capitalize">{label}</h3>
        <p>{description}</p>
        <Games games={games} />
        <Screens screens={screens} />
        <Materials materials={materials} />
        <Overview {...overview} />
        <QuoteBtn />
      </Card>
    </MultiItemContainer>
  );
}

export default ProductItem;
