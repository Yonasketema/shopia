import { HStack, Text } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack
      paddingX={3}
      paddingY={6}
      fontWeight="bold"
      borderColor="gray.300"
      borderBottomWidth={1}
      boxShadow="sm"
    >
      <Text fontSize="3xl" fontWeight="300" marginRight={150}>
        Shopia
      </Text>

      <SearchInput />
    </HStack>
  );
}

export default NavBar;
