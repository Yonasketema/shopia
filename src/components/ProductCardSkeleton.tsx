import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText fontSize={1} />
      </CardBody>
    </Card>
  );
};
export default ProductCardSkeleton;
