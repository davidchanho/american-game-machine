import { Options, OptionsItem } from "./styles";

interface Props {
  materials: string[];
}

function Materials({ materials }: Props) {
  if (materials?.length === 0) {
    return null;
  }

  return (
    <>
      <p>Cabinet Material</p>
      <Options horizontal>
        {materials?.map((m) => {
          return (
            <OptionsItem key={`material-item-${m}`}>
              <img src={m} alt={m} className="w-100" aria-hidden="true" />
            </OptionsItem>
          );
        })}
      </Options>
    </>
  );
}

export default Materials;
