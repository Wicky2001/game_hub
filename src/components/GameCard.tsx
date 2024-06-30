import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatFormIconLis from "./PlatFormIconLis";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <PlatFormIconLis
          platform={game.parent_platforms.map((p) => p.platform)}
        ></PlatFormIconLis>
      </CardBody>
    </Card>
  );
}

export default GameCard;
