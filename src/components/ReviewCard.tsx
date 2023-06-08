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
      <Image
        src={
          "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        }
        width={50}
        height={50}
        fit="cover"
        borderRadius="50%"
        borderWidth={2}
        borderColor={"gray.400"}
      />
      <Box>
        <Text fontSize="larger" fontWeight="black" marginBottom={1}>
          {review.name}
        </Text>
        <Text fontSize="sm" color={"gray.600"}>
          {review.description}
        </Text>
      </Box>
    </HStack>
  );
};

export default ReviewCard;
