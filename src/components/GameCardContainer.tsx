import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box borderRadius={10} overflow={"hidden"} width={"300px"}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
