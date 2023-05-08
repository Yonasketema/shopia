import { HStack, Text } from "@chakra-ui/react";

function NavBar() {
  return (
    <HStack
      padding={3}
      fontWeight="bold"
      borderColor="gray.300"
      borderBottomWidth={1}
      boxShadow="sm"
    >
      <Text fontSize="3xl" fontWeight="300">
        Shopia
      </Text>
    </HStack>
  );
}

export default NavBar;
