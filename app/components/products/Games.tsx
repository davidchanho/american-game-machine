import React from "react";
import { Card, CardDeck } from "react-bootstrap";

interface Props {
  games: string[];
}

function Games({ games }: Props) {
  return (
    <CardDeck>
      {games?.map((game) => {
        return <Card key={game}>{game}</Card>;
      })}
    </CardDeck>
  );
}

export default Games;
