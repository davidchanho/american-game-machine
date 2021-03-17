import Image from "next/image";
import { VariantContainer, VariantItem } from "./styles";

interface Props {
  screens: string[];
}

function Screens({ screens }: Props) {
  return (
    <VariantContainer horizontal>
      {screens.map((m) => {
        return (
          <VariantItem key={`screen-size-item-${m}`}>
            <Image src={`/svg/${m}screen.svg`} layout="fill" />
          </VariantItem>
        );
      })}
    </VariantContainer>
  );
}

export default Screens;
