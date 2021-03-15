import React from "react";
import { Card, CardDeck } from "react-bootstrap";

interface GamesProps {
  games: string[];
}

function Games({ games }: GamesProps) {
  return (
    <CardDeck>
      {games?.map((game) => {
        return <Card key={game}>{game}</Card>;
      })}
    </CardDeck>
  );
}

export default Games;
