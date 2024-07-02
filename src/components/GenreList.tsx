import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedUrl from "../services/image_url";

interface GenreListProps {
  onSelcetGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelcetGenre, selectedGenre }: GenreListProps) {
  const { genres, isLoading } = useGenre();

  return (
    <>
      <List>
        {isLoading && <Spinner></Spinner>}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingBottom={2}>
            <HStack>
              <Image
                src={getCroppedUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={5}
              ></Image>
              <Button
                variant={"link"}
                onClick={() => {
                  onSelcetGenre(genre);
                }}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
