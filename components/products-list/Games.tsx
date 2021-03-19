import { Card, CardDeck } from "react-bootstrap";

interface Props {
  games: string[];
}

function Games({ games }: Props) {
  if (games?.length === 0) {
    return null;
  }
  return (
    <>
      <p>Games</p>

      <CardDeck>
        {games?.map((game) => {
          return (
            <Card key={game}>
              <img src={game} alt={`game-${game}`} />
            </Card>
          );
        })}
      </CardDeck>
    </>
  );
}

export default Games;
