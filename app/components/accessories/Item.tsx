import Image from "next/image";
import { Card } from "react-bootstrap";

interface Props {
  label: string;
  img: string;
}

function Item({ label, img }: Props) {
  return (
    <Card className="w-100">
      <Image src={img} alt={`image of ${label}`} width="300" height="300" />
    </Card>
  );
}

export default Item;
