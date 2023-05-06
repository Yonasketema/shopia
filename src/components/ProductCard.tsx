import { Card, Image, CardBody, Text } from "@chakra-ui/react";
import { Product } from "../hooks/useProduct";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={0} padding={2}>
      <Image src={product.image_uri} />
      <CardBody>
        <Text fontSize="lx">{product.title}</Text>
        <Text fontSize="xl">{product.price}$</Text>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
