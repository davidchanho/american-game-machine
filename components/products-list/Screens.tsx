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
        {screens?.map((s) => {
          return (
            <OptionsItem key={`screen-size-item-${s}`}>
              <img src={s} />
            </OptionsItem>
          );
        })}
      </Options>
    </>
  );
}

export default Screens;
