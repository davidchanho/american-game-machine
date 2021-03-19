import { Card as BsCard } from "react-bootstrap";
import styled from "styled-components";
import { IService } from "../../context";

const Card = styled(BsCard)`
  text-align: center;
  padding: 15px;

  .card-title {
    text-transform: capitalize;
    text-decoration: underline;
    margin-top: 5px;
  }
  .card-body {
    padding: 0;
    height: 120px;
  }
`;

function Service({ icon, title, description }: IService) {
  return (
    <Card>
      <Card.Img
        src={icon}
        alt={description}
        title="https://storyset.com/"
        aria-hidden={true}
      />
      <Card.Title>{title}</Card.Title>
      <Card.Body>{description}</Card.Body>
    </Card>
  );
}

export default Service;
