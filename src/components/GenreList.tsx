import useGenre from "../hooks/useGenre";

function GenreList() {
  const { genres } = useGenre();

  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
