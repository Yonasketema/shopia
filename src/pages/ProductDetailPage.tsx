import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetail";
import { Box, HStack, Heading, Spinner, Text } from "@chakra-ui/react";
import ImageList from "../components/ImageList";

const ProductDetailPage = () => {
  const params = useParams();

  const id = params.id?.split("-")[1];

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { product, error, isLoading } = useProductDetails(id!);

  console.log(product);

  if (isLoading) return <Spinner />;
  if (error || !product) return <>{error}</>;

  return (
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
  );
};

export default ProductDetailPage;
