import { Badge } from "@chakra-ui/react";

interface CriticScorePropos {
  score: number;
}

function CriticScore({ score }: CriticScorePropos) {
  const color = score > 75 ? "green" : score > 60 ? "yello" : "red";
  return (
    <Badge colorScheme={color} borderRadius={3} paddingX={2}>
      {score}
    </Badge>
  );
}

export default CriticScore;
