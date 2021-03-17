import Image from "next/image";
import { Card } from "react-bootstrap";
import { IAccessory } from "../../context/accessories";

function Item({ label, img }: IAccessory) {
  return (
    <Card className="w-100">
      <Image src={img} alt={`image of ${label}`} width="300" height="300" />
    </Card>
  );
}

export default Item;
