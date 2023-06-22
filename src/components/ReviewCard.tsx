import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { Review } from "../hooks/useProductReview";

interface Prop {
  review: Review;
}

const ReviewCard = ({ review }: Prop) => {
  return (
    <HStack
      borderBottomWidth={1}
      borderBottomColor={"gray.300"}
      paddingY={6}
      gap={3}
    >
       
      <Box>
        <Text fontSize="larger" fontWeight="black" marginBottom={1}>
          {review.name}
        </Text>
        <Text fontSize="sm" color={"gray.600"} marginLeft={3}>
          {review.description}
        </Text>
      </Box>
    </HStack>
  );
};

export default ReviewCard;
