import Image from "next/image";
import { Options, OptionsItem } from "./styles";

interface Props {
  materials: string[];
}

function Materials({ materials }: Props) {
  if (materials.length === 0) {
    return null;
  }

  return (
    <>
      <p>Material Type</p>
      <Options horizontal>
        {materials.map((m) => {
          return (
            <OptionsItem key={`material-item-${m}`}>
              <Image src={`/img/${m}.jpg`} layout="fill" />
            </OptionsItem>
          );
        })}
      </Options>
    </>
  );
}

export default Materials;
