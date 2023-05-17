import { Card, Image, CardBody, Text } from "@chakra-ui/react";
import { Product } from "../hooks/useProduct";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link to={`product/${product.title}-${product.id} `}>
      <Card borderRadius={0} padding={2}>
        <Image src={product.image_uri} />
        <CardBody>
          <Text fontSize="lx">{product.title}</Text>
          <Text fontSize="xl">{product.price}$</Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
