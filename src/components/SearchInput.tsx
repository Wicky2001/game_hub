import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}
function SearchInput({ onSearch }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            onSearch(ref.current.value);
          }
        }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiSearch></CiSearch>
          </InputLeftElement>
          <Input ref={ref} borderRadius={20} placeholder="Search Game"></Input>;
        </InputGroup>
      </form>
    </>
  );
}

export default SearchInput;
