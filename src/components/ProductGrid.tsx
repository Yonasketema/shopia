import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import useProduct from "../hooks/useProduct";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Category } from "../pages/HomePage";

interface Prop {
  selectedCategory: Category | null;
}

const ProductGrid = ({ selectedCategory }: Prop) => {
  const { error, products, isLoading } = useProduct(selectedCategory);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red.400">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)}
        {products.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
