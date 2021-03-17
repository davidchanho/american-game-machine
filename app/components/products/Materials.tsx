import { VariantContainer, VariantItem } from "./styles";
import Image from 'next/image'

interface Props {
  materials: string[];
}

function Materials({materials}: Props) {
    return (
      <VariantContainer horizontal>
        {materials.map((m) => {
          return (
            <VariantItem key={`material-item-${m}`}>
              <Image src={`/img/${m}.jpg`} layout="fill" />
            </VariantItem>
          );
        })}
      </VariantContainer>
    );
}

export default Materials
