import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import useProduct from "../hooks/useProduct";

const ProductGrid = () => {
  const { error, products } = useProduct();

  return (
    <>
      {error && <Text color="red.400">{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={10}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
