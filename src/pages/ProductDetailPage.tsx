import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const ProductDetailPage = () => {
  const params = useParams();

  const id = params.id?.split("-")[1];

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { product, error, isLoading } = useProductDetails(id!);

  if (isLoading) return <Spinner />;
  if (error || !product) return <>{error}</>;

  return (
    <>
      <div>ProductDetailPage {id}</div>
      <Heading>{product.title}</Heading>
      <Text>{product.description}</Text>
    </>
  );
};

export default ProductDetailPage;
