import Image from "next/image";
import { Card } from "react-bootstrap";
import { IAccessory } from "../../context/accessories";

function AccessoriesItem({ label, img }: IAccessory) {
  return (
    <Card>
      <Image src={img} alt={`image of ${label}`} width="300" height="300" />
    </Card>
  );
}

export default AccessoriesItem;
