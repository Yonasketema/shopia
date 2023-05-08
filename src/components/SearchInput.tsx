import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        variant="filled"
        borderRadius={20}
        placeholder="search ..."
        width={"50%"}
      />
    </InputGroup>
  );
};

export default SearchInput;
