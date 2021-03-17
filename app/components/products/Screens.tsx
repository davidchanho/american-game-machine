import Image from "next/image";
import { Options, OptionsItem } from "./styles";

interface Props {
  screens: string[];
}

function Screens({ screens }: Props) {
  return (
    <>
      <p>Screen Sizes</p>
      <Options horizontal>
        {screens?.map((m) => {
          return (
            <OptionsItem key={`screen-size-item-${m}`}>
              <Image src={`/svg/${m}screen.svg`} layout="fill" />
            </OptionsItem>
          );
        })}
      </Options>
    </>
  );
}

export default Screens;
