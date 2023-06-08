import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetail";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import ImageList from "../components/ImageList";
import useProductReview from "../hooks/useProductReview";
import ReviewCard from "../components/ReviewCard";
import { useState } from "react";
import apiClient from "../services/api-client";

const ProductDetailPage = () => {
  const params = useParams();

  const id = params.id?.split("-")[1];

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { product, error, isLoading } = useProductDetails(id!);
  const {
    reviews,
    error: reviewError,
    isLoading: isLoadingReview,
    setReviews,
  } = useProductReview(id!);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  if (isLoading) return <Spinner />;
  if (error || !product) return <>{error}</>;

  return (
    <>
      <HStack alignItems="flex-start" gap={5}>
        <Box width={"50%"}>
          {/* <Image src={product.image_uri} />
           */}
          <ImageList imgs={product.images} />
        </Box>

        <Box width={"50%"}>
          <Heading marginBottom={10}>{product.title}</Heading>
          <Text marginBottom={12} color="gray.600">
            {product.description}
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            {product.price}$
          </Text>
        </Box>
      </HStack>

      <Box
        marginY={31}
        borderColor={"gray.100"}
        borderRadius={4}
        borderWidth={1}
        padding={7}
      >
        <Text fontSize={"x-large"} color={"gray.800"} fontWeight="bold">
          Comment
        </Text>

        {/* com */}
        {reviews?.map((review) => (
          <ReviewCard review={review} />
        ))}
        {/* com */}
      </Box>
      <Box>
        <Input
          placeholder="your name"
          marginBottom={2}
          onChange={(event) => setName(event.target.value)}
        />

        <Textarea
          placeholder="write your comment"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Box textAlign="right" marginY={5}>
          <Button
            colorScheme="twitter"
            onClick={() =>
              apiClient
                .post(`/review/${id}`, {
                  name,
                  description,
                })
                .then((res) => {
                  setReviews([...reviews, res.data]);
                })
            }
          >
            post
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetailPage;
