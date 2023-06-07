import { HStack, Text } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <HStack
      paddingX={120}
      paddingY={6}
      fontWeight="bold"
      borderColor="gray.200"
      borderBottomWidth={1}
    >
      <Link to="/">
        <Text fontSize="3xl" fontWeight="300" marginRight={150}>
          Shopia
        </Text>
      </Link>

      <SearchInput />
    </HStack>
  );
}

export default NavBar;
