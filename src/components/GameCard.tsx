import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatFormIconLis from "./PlatFormIconLis";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../services/image_url";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card>
      <Image src={getCroppedUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatFormIconLis
            platform={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIconLis>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"xl"} marginTop={2}>
          {game.name}
        </Heading>
        <Emoji rating={game.rating_top}></Emoji>
      </CardBody>
    </Card>
  );
}

export default GameCard;
