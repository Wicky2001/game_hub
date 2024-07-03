import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/useGame";

interface DynamicHeadingProps {
  genre: Genre | null;
  platform: Platform | null;
}

function DynamicHeading({ genre, platform }: DynamicHeadingProps) {
  const heading = ` ${platform ? platform.name : ""} ${
    genre ? genre.name : ""
  }  Games`;
  return (
    <>
      <Heading as={"h1"} marginBottom={1}>
        {heading}
      </Heading>
    </>
  );
}

export default DynamicHeading;
